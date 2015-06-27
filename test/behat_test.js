/**
 * @file
 * Documentation missing.
 */

'use strict';

var grunt = require('grunt');
var behat = require('../tasks/lib/behat').init(grunt);

exports.behat = {

  overrideOptionsByFlags: function (test) {
    test.expect(3);

    var options;
    var expected;

    options = {
      args: {}
    };
    expected = {
      args: {}
    };
    behat.overrideOptionsByFlags(
      options,
      {}
    );
    test.deepEqual(options, expected, '@todo 1');

    options = {
      args: {
        boring: false
      }
    };
    expected = {
      args: {
        boring: false
      }
    };
    behat.overrideOptionsByFlags(
      options,
      {}
    );
    test.deepEqual(options, expected, '@todo 2');

    options = {
      args: {
        verbose: false
      }
    };
    expected = {
      args: {
        verbose: true
      }
    };
    behat.overrideOptionsByFlags(
      options,
      {
        verbose: true
      }
    );
    test.deepEqual(options, expected, '@todo 3');

    test.done();
  },

  filterEnabled: function (test) {
    test.expect(6);

    test.deepEqual(
      behat.filterEnabled({}),
      [],
      '@todo'
    );

    test.deepEqual(
      behat.filterEnabled(
        {
          item1: true,
          item2: true
        }
      ),
      [
        'item1',
        'item2'
      ],
      '@todo'
    );

    test.deepEqual(
      behat.filterEnabled(
        {
          item1: true,
          item2: false
        }
      ),
      [
        'item1'
      ],
      '@todo'
    );

    test.deepEqual(
      behat.filterEnabled(
        {
          item1: false,
          item2: true
        }
      ),
      [
        'item2'
      ],
      '@todo'
    );

    test.deepEqual(
      behat.filterEnabled(
        {
          item1: {enabled: true, status: false},
          item2: {enabled: false, status: true}
        },
        'enabled'
      ),
      [
        'item1'
      ],
      '@todo'
    );

    test.deepEqual(
      behat.filterEnabled(
        {
          item1: {enabled: true, status: false},
          item2: {enabled: false, status: true}
        },
        'status'
      ),
      [
        'item2'
      ],
      '@todo'
    );

    test.done();
  },

  buildArgs: function (test) {
    test.expect(1);

    var schema = {
      triStateNull: {type: 'tri-state'},
      triStateTrue: {type: 'tri-state'},
      triStateFalse: {type: 'tri-state'}
    };

    var args = {
      flagTrue: true,
      flagFalse: false,
      triStateNull: null,
      triStateTrue: true,
      triStateFalse: false,
      numberNegative: -42,
      numberZero: 0,
      numberPositive: 42,
      stringNull: null,
      stringEmpty: '',
      stringFoo: 'bar',
      arrayEmpty: [],
      arrayFoo: ['foo', 'bar'],
      objectEmpty: {},
      objectFoo: {
        'foo-true': true,
        'foo-false': false
      }
    };

    var cliArgsExpected = [
      '--flag-true',
      '--tri-state-true',
      '--no-tri-state-false',
      '--number-negative',
      '-42',
      '--number-zero',
      '0',
      '--number-positive',
      '42',
      '--string-empty',
      "''",
      '--string-foo',
      'bar',
      '--array-foo',
      'foo',
      '--array-foo',
      'bar',
      '--object-foo',
      'foo-true'
    ];

    var cliArgsActual = behat.buildArgs(args, schema);

    test.deepEqual(cliArgsActual, cliArgsExpected, 'behat.buildArgs() works as expected.');

    test.done();
  },

  createCommand: function (test) {
    test.expect(1);

    var action = 'definitions';

    var options = {
      behatExecutable: 'bin/behat',
      args: {
        definitions: 'l',
        colors: true
      }
    };

    var commandExpected = {
      cmd: 'bin/behat',
      args: [
        '--definitions',
        'l',
        '--colors'
      ],
      opts: {
        cwd: null
      }
    };

    test.deepEqual(
      behat.createCommand(options, action),
      commandExpected,
      'behat.createCommand works as expected.'
    );

    test.done();
  }

};
