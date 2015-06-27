/**
 * @file
 * Grunt plugin - Wrapper around the `compass` CLI tool.
 */

'use strict';

module.exports = function (grunt) {

  /** @type {Behat} behat */
  var behat = require('./lib/behat').init(grunt);

  grunt.registerMultiTask('behat-definitions', 'Run `behat --definitions` command', function () {

    /** @type {BehatDefinitionsOptions} options */
    var options = this.options(behat.defaultOptions.definitions);

    options.args.definitions = options.args.definitions.toString();
    if (!options.args.definitions) {
      options.args.definitions = behat.defaultOptions.definitions.args.definitions;
    }

    behat
      .overrideOptionsByFlagPatterns(options, this.args)
      .overrideOptionsByFlags(options, this.flags)
      .validateOptions(options)
      .execDefinitions(options);
  });

  grunt.registerMultiTask('behat-story-syntax', 'Run `behat --story-syntax` command', function () {

    /** @type {BehatStorySyntaxOptions} options */
    var options = this.options(behat.defaultOptions.storySyntax);

    behat
      .overrideOptionsByFlagPatterns(options, this.args)
      .overrideOptionsByFlags(options, this.flags)
      .validateOptions(options)
      .execStorySyntax(options);
  });

  grunt.registerMultiTask('behat-config-reference', 'Run `behat --config-reference` command', function () {

    /** @type {BehatConfigReferenceOptions} options */
    var options = this.options(behat.defaultOptions.configReference);

    behat
      .overrideOptionsByFlagPatterns(options, this.args)
      .overrideOptionsByFlags(options, this.flags)
      .validateOptions(options)
      .execConfigReference(options);
  });

  grunt.registerMultiTask('behat-run', 'Run `behat` command', function () {

    /** @type {BehatRunOptions} options */
    var options = this.options(behat.defaultOptions.run);

    grunt.util._.merge(this.data, {paths: []});

    behat
      .overrideOptionsByFlagPatterns(options, this.args)
      .overrideOptionsByFlags(options, this.flags)
      .validateOptions(options)
      .execRun(options, this.data.paths);
  });

  grunt.registerMultiTask('behat-rerun', 'Run `behat --rerun` command', function () {

    /** @type {BehatRerunOptions} options */
    var options = this.options(behat.defaultOptions.rerun);

    behat
      .overrideOptionsByFlagPatterns(options, this.args)
      .overrideOptionsByFlags(options, this.flags)
      .validateOptions(options)
      .execRerun(options);
  });
};
