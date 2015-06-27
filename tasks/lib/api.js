/**
 * @file
 * Type definitions for IDE parsers.
 *
 * These classes are not in use.
 */

/* eslint no-unused-vars: 0 */

'use strict';

/**
 * @class
 * @constructor
 */
function BehatDefaultArgs() {}

/**
 * @class
 * @extends BehatDefaultArgs
 * @constructor
 */
function BehatDefinitionsArgs() {

  /**
   * @type {string}
   */
  this.definitions = 'l';

  /**
   * @type {string}
   */
  this.lang = null;

  /**
   * @type {string}
   */
  this.config = null;

}

/**
 * @class
 * @extends BehatDefaultArgs
 * @constructor
 */
function BehatStorySyntaxArgs() {

  /**
   * @type {boolean}
   */
  this.storySyntax = true;

}

/**
 * @class
 * @extends BehatDefaultArgs
 * @constructor
 */
function BehatConfigReferenceArgs() {

  /**
   * @type {boolean}
   */
  this.configReference = true;

}

/**
 * @class
 * @extends BehatDefaultArgs
 * @constructor
 */
function BehatRunArgs() {

  /**
   * @type {boolean}
   */
  this.strict = true;

  /**
   * @type {boolean}
   */
  this.stopOnFailure = true;

}

/**
 * @class
 * @extends BehatDefaultArgs
 * @constructor
 */
function BehatRerunArgs() {

  /**
   * @type {boolean}
   */
  this.rerun = true;

  /**
   * @type {boolean}
   */
  this.strict = true;

  /**
   * @type {boolean}
   */
  this.stopOnFailure = true;

}

/**
 * @class
 * @constructor
 */
function BehatDefaultOptions() {

  /**
   * @type {BehatDefaultArgs}
   */
  this.args = {};

  /**
   * @type {string}
   */
  this.behatExecutable = './bin/behat';

}

/**
 * @class
 * @extends BehatDefaultOptions
 * @constructor
 */
function BehatDefinitionsOptions() {

  /**
   * @type {BehatDefinitionsArgs}
   */
  this.args = {};

}

/**
 * @class
 * @extends BehatDefaultOptions
 * @constructor
 */
function BehatStorySyntaxOptions() {

  /**
   * @type {BehatStorySyntaxArgs}
   */
  this.args = {};

}

/**
 * @class
 * @extends BehatDefaultOptions
 * @constructor
 */
function BehatConfigReferenceOptions() {

  /**
   * @type {BehatConfigReferenceArgs}
   */
  this.args = {};

}

/**
 * @class
 * @extends BehatDefaultOptions
 * @constructor
 */
function BehatRunOptions() {

  /**
   * @type {BehatRunArgs}
   */
  this.args = {};

}

/**
 * @class
 * @extends BehatDefaultOptions
 * @constructor
 */
function BehatRerunOptions() {

  /**
   * @type {BehatRerunArgs}
   */
  this.args = {};

}
