/**
 * @file
 * Documentation missing.
 */

/* global process: true */

/**
 * @param grunt
 *
 * @return {Behat}
 */
exports.init = function (grunt) {
  'use strict';

  var binVersionCheck = require('bin-version-check');
  var escapeShellArg = require('any-shell-escape');
  var S = require('string');
  var path = require('path');
  var shell = require('shelljs');

  function Behat() {
    var self = this;

    this.minmumBehatVersion = '3.0.0';

    this.defaultBehatExecutable = './bin/behat';

    this.argsSchema = {
      definitions: {
        colors: {type: 'tri-state'}
      },
      storySyntax: {
        colors: {type: 'tri-state'}
      },
      configReference: {
        colors: {type: 'tri-state'}
      },
      run: {
        colors: {type: 'tri-state'}
      },
      rerun: {
        colors: {type: 'tri-state'}
      }
    };

    this.flagsSchema = {
      'colors': {argument: 'colors', value: true},
      'no-colors': {argument: 'colors', value: false},
      'no-interaction': {argument: 'noInteraction', value: true},
      'verbose': {argument: 'verbose', value: true},
      'dry-run': {argument: 'dryRun', value: true},
      'strict': {argument: 'strict', value: true},
      'pretty': {argument: 'format', value: 'pretty'},
      'progress': {argument: 'format', value: 'progress'}
    };

    this.defaultOptions = {
      definitions: {
        args: {
          definitions: 'l',
          colors: true
        },
        behatExecutable: this.defaultBehatExecutable
      },
      storySyntax: {
        args: {
          storySyntax: true,
          colors: true
        },
        behatExecutable: this.defaultBehatExecutable
      },
      configReference: {
        args: {
          colors: true
        },
        behatExecutable: this.defaultBehatExecutable
      },
      run: {
        args: {
          strict: true,
          stopOnFailure: true,
          colors: true
        },
        behatExecutable: this.defaultBehatExecutable
      },
      rerun: {
        args: {
          strict: true,
          stopOnFailure: true,
          colors: true
        },
        behatExecutable: this.defaultBehatExecutable
      }
    };

    this.msgPattern = {
      noMatch: S('There is no match to the following patterns: {{patterns}}'),
      currentDirectory: S('Current working directory is: {{cwd}}'),
      command: S('Execute: {{cmd}}')
    };

    /**
     * @param {String} string
     *
     * @return {String}
     */
    this.escapeShellArgument = function (string) {
      string = string.toString();

      if (!string.length) {
        return "''";
      }

      return escapeShellArg(string);
    };

    /**
     * @param {BehatDefaultOptions} options
     * @param {Object} flags
     * @param {Object} flagsSchema
     *
     * @return {Behat}
     */
    this.overrideOptionsByFlags = function (options, flags, flagsSchema) {
      if (typeof flagsSchema === 'undefined') {
        flagsSchema = self.flagsSchema;
      }

      var flagName;
      for (flagName in flagsSchema) {
        if (flagsSchema.hasOwnProperty(flagName) && flags.hasOwnProperty(flagName)) {
          options.args[flagsSchema[flagName].argument] = flagsSchema[flagName].value;
        }
      }

      return self;
    };

    /**
     * @param {BehatDefaultOptions} options
     *
     * @return {Behat}
     */
    this.validateOptions = function (options) {
      binVersionCheck(options.behatExecutable, '>=' + self.minmumBehatVersion, function (error) {
        if (error) {
          grunt.warn(error);
        }
      });

      return self;
    };

    /**
     * @param {Object} items
     * @param {String} [property]
     *   Default is "enabled"
     *
     * @return {String[]}
     *   Keys from items object.
     */
    this.filterEnabled = function (items, property) {
      var enabledItems = [];

      if (typeof property === 'undefined') {
        property = 'enabled';
      }

      for (var key in items) {
        if (items.hasOwnProperty(key)) {
          if (
            (items[key] === true)
            || (
              typeof items[key] === 'object'
              && items[key].hasOwnProperty(property)
              && items[key][property] === true
            )
          ) {
            enabledItems.push(key);
          }
        }
      }

      return enabledItems;
    };

    /**
     * @param {BehatDefaultArgs} args
     * @param {Object} schema
     *
     * @return {String[]}
     */
    this.buildArgs = function (args, schema) {
      var cliArgs = [];
      var name;
      var s;
      var i;
      var filtered;

      for (name in args) {
        if (args.hasOwnProperty(name)) {
          if (args[name] === null) {
            continue;
          }

          s = schema.hasOwnProperty(name) ? schema[name] : {};
          s.type = s.type || (typeof args[name]);
          s.cliName = s.cliName || S(name).dasherize().s;
          if (s.type === 'object' && Array.isArray(args[name])) {
            s.type = 'array';
          }

          switch (s.type) {
            case 'boolean':
              if (args[name]) {
                cliArgs.push('--' + s.cliName);
              }
              break;

            case 'tri-state':
              if (args[name]) {
                cliArgs.push('--' + s.cliName);
              }
              else {
                cliArgs.push('--no-' + s.cliName);
              }
              break;

            case 'string':
            case 'number':
              cliArgs.push('--' + s.cliName);
              cliArgs.push(self.escapeShellArgument(args[name]));
              break;

            case 'array':
              for (i = 0; i < args[name].length; i++) {
                cliArgs.push('--' + s.cliName);
                cliArgs.push(self.escapeShellArgument(args[name][i]));
              }
              break;

            case 'object':
              filtered = self.filterEnabled(args[name]);
              for (i = 0; i < filtered.length; i++) {
                cliArgs.push('--' + s.cliName);
                cliArgs.push(self.escapeShellArgument(filtered[i]));
              }
              break;
          }
        }
      }

      return cliArgs;
    };

    /**
     * @param {BehatDefaultOptions} options
     * @param {String} action
     *
     * @return {Object}
     */
    this.createCommand = function (options, action) {
      var command = {
        cmd: options.behatExecutable,
        args: [],
        opts: {
          cwd: null
        }
      };

      command.args = command.args.concat(self.buildArgs(options.args, self.argsSchema[action]));

      return command;
    };

    /**
     * @param {BehatDefinitionsOptions} options
     */
    this.execDefinitions = function (options) {
      self.exec(options, [], 'definitions');
    };

    /**
     * @param {BehatStorySyntaxOptions} options
     */
    this.execStorySyntax = function (options) {
      options.args.storySyntax = true;

      self.exec(options, [], 'storySyntax');
    };

    /**
     * @param {BehatConfigReferenceOptions} options
     */
    this.execConfigReference = function (options) {
      options.args.configReference = true;

      self.exec(options, [], 'configReference');
    };

    /**
     * @param {BehatRunOptions} options
     * @param {String[]} paths
     */
    this.execRun = function (options, paths) {
      self.exec(options, paths, 'run');
    };

    /**
     * @param {BehatRerunOptions} options
     */
    this.execRerun = function (options) {
      options.args.rerun = true;

      self.exec(options, [], 'rerun');
    };

    /**
     * @param {BehatDefaultOptions} options
     * @param {String[]} paths
     * @param {String} action
     */
    this.exec = function (options, paths, action) {
      var command = self.createCommand(options, action);
      var i;

      if (paths.length > 0) {
        command.args.push('--');
        for (i = 0; i < paths.length; i++) {
          command.args.push(paths[i]);
        }
      }

      grunt.log.writeln(self.msgPattern.command.template({
        cmd: [command.cmd].concat(command.args).join(' ').blue
      }).s);

      self.run(command);
    };

    this.run = function (command) {
      var result = shell.exec(
        S('{{executable}} {{args}}')
          .template({
            // @todo Support the cwd in the task options.
            cwd: command.opts.cwd,
            executable: command.cmd,
            args: command.args.join(' ')
          })
          .s
      );

      if (result.code !== 0) {
        grunt.fail.fatal('Something wrong.');
      }
    };

  }

  return new Behat();
};
