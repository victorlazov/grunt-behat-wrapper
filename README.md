# grunt-behat-wrapper



<!-- toc -->

* [Build status](#build-status)
* [Install](#install)
  * [Install with [npm](npmjs.org)](#install-with-npmnpmjsorg)
* [Tasks](#tasks)
  * [behat-definitions](#behat-definitions)
  * [behat-story-syntax](#behat-story-syntax)
  * [behat-config-reference](#behat-config-reference)
  * [behat-run](#behat-run)
  * [behat-rerun](#behat-rerun)
* [Configuration](#configuration)
  * [options.behatExecutable](#optionsbehatexecutable)
  * [options.args](#optionsargs)
  * [options.args.suite](#optionsargssuite)
  * [options.args.format](#optionsargsformat)
  * [options.args.out](#optionsargsout)
  * [options.args.formatSettings](#optionsargsformatsettings)
  * [options.args.lang](#optionsargslang)
  * [options.args.tags](#optionsargstags)
  * [options.args.definitions](#optionsargsdefinitions)
  * [options.args.appendSnippets](#optionsargsappendsnippets)
  * [options.args.noSnippets](#optionsargsnosnippets)
  * [options.args.strict](#optionsargsstrict)
  * [options.args.stopOnFailure](#optionsargsstoponfailure)
  * [options.args.profile](#optionsargsprofile)
  * [options.args.config](#optionsargsconfig)
  * [options.args.verbose](#optionsargsverbose)
  * [options.args.noInteraction](#optionsargsnointeraction)
  * [options.args.colors](#optionsargscolors)
  * [files](#files)
* [Flags](#flags)
  * [Flag colors](#flag-colors)
  * [Flag no-colors](#flag-no-colors)
  * [Flag no-interaction](#flag-no-interaction)
  * [Flag verbose](#flag-verbose)
  * [Flag dryRun](#flag-dryrun)
  * [Flag strict](#flag-strict)
  * [Flag pretty](#flag-pretty)
  * [Flag progress](#flag-progress)
* [Examples](#examples)
  * [Basic](#basic)
* [Author](#author)
* [Release History](#release-history)
* [License](#license)

<!-- toc stop -->


## Build status

[![Build Status: Linux](https://travis-ci.org/Sweetchuck/grunt-behat-wrapper.svg?branch=master)](https://travis-ci.org/Sweetchuck/grunt-behat-wrapper)

## Install

### Install with [npm](npmjs.org)

```bash
npm install grunt-behat-wrapper --save-dev
```


## Tasks


### behat-definitions

Wrapper around the `behat --definitions foo` command.

Print all available step definitions:

- use --definitions l to just list definition expressions.
- use --definitions i to show definitions with extended info.
- use --definitions 'needle' to find specific definitions.

Use --lang to see definitions in specific language.

**Configuration**

* options
  * [behatExecutable](#optionsbehatexecutable)
  * [args](#optionsargs)
    * [definitions](#optionsargsdefinitions)
    * [lang](#optionsargslang)

With the default options the
```bash
grunt behat-definitions
```

is equivalent to
```bash
./bin/behat --definitions l
```



### behat-story-syntax

Wrapper around the `behat --story-syntax` command.

Print *.feature example. 
Use --lang to see specific language.

**Configuration**

* options
  * [behatExecutable](#optionsbehatexecutable)
  * [args](#optionsargs)
    * [lang](#optionsargslang)

With the default options the
```bash
grunt behat-story-syntax
```

is equivalent to
```bash
./bin/behat --story-syntax
```



### behat-config-reference

Wrapper around the `behat --config-reference` command.

Display the configuration reference.

**Configuration**

* options
  * [behatExecutable](#optionsbehatexecutable)

With the default options the
```bash
grunt behat-config-reference
```

is equivalent to
```bash
./bin/behat --config-reference
```



### behat-run

Wrapper around the `behat` command.

Run tests.

**Configuration**

* options
  * [behatExecutable](#optionsbehatexecutable)
  * [args](#optionsargs)
    * [suite](#optionsargssuite)
    * [format](#optionsargsformat)
    * [out](#optionsargsout)
    * [formatSettings](#optionsargsformatsettings)
    * [lang](#optionsargslang)
    * [name](#optionsargsname)
    * [tags](#optionsargstags)
    * [role](#optionsargsrole)
    * [appendSnippets](#optionsargsappendsnippets)
    * [noSnippets](#optionsargsnosnippets)
    * [strict](#optionsargsstrict)
    * [stopOnFailure](#optionsargsstoponfailure)
    * [dry-run](#optionsargsdryrun)
    * [profile](#optionsargsprofile)
    * [config](#optionsargsconfig)
    * [verbose](#optionsargsverbose)
    * [noInteraction](#optionsargsnointeraction)
    * [colors](#optionsargscolors)
* [files](#files)

With the default options the
```bash
grunt behat-run
```

is equivalent to
```bash
./bin/behat
```



### behat-rerun

Wrapper around the `behat --rerun` command.

Re-run scenarios that failed during last execution.

**Configuration**

* options
  * [behatExecutable](#optionsbehatexecutable)

With the default options the
```bash
grunt behat-rerun
```

is equivalent to
```bash
./bin/behat --rerun
```



## Configuration

### options.behatExecutable

Type: `String`

Default value: `'./bin/behat'`

Path to `behat` executable.


### options.args

Type: `Object`

Default value: `{}`

Key-value. The keys are almost the same as in the options in the CLI.


### options.args.suite

Type: `String`

Default value: `null`

Only execute a specific suite.


### options.args.format

Type: `String`

Default value: `null`

How to format tests output. pretty is default.

Available formats are:

* progress: Prints one character per step.
* pretty: Prints the feature as is.

You can use multiple formats at the same time. (multiple values allowed)


### options.args.out

Type: `String`

Default value: `null`

Write format output to a file/directory instead of STDOUT (output_path). 
You can also provide different outputs to multiple formats. (multiple values 
allowed)


### options.args.formatSettings

Type: `String`

Default value: `null`

@todo Set formatters parameters using json object. Keys are parameter names, 
values are values. (multiple values allowed)


### options.args.lang

Type: `String`

Default value: `null`

Only executeCall the feature elements which match part of the given name or 
regex. (multiple values allowed)


### options.args.tags

Type: `String`

Default value: `null`

Only executeCall the features or scenarios with tags matching tag filter 
expression. (multiple values allowed)


### options.args.definitions

Type: `String`

Default value: `'l'`


### options.args.appendSnippets

Type: `Boolean`

Default value: `false`

Appends snippets for undefined steps into main context.


### options.args.noSnippets

Type: `Boolean`

Default value: `false`

Do not print snippets for undefined steps after stats.


### options.args.strict

Type: `Boolean`

Default value: `true`

Passes only if all tests are explicitly passing.


### options.args.stopOnFailure

Type: `Boolean`

Default value: `true`

Stop processing on first failed scenario.


### options.args.profile

Type: `String`

Default value: `null`

Specify config profile to use.


### options.args.config

Type: `String`

Default value: `null`

Specify config file to use.


### options.args.verbose

Type: `Boolean`

Default value: `false`


### options.args.noInteraction

Type: `Boolean`

Default value: `false`

Do not ask any interactive question.


### options.args.colors

Type: `TriState`

Default value: `null`

If `true` then force ANSI color in the output. By default color support is 
guessed based on your platform and the output if not specified.

If `false` then force no ANSI color in the output.


### files

For more information see the Grunt documentation
[Configuring tasks/files](http://gruntjs.com/configuring-tasks#files)


## Flags

You can modify the arguments by [Flags](http://gruntjs.com/api/inside-tasks#this.flags)


### Flag colors

Override the value of [options.args.colors](#optionsargscolors) argument with `true`.


### Flag no-colors

Override the value of [options.args.colors](#optionsargscolors) argument with `false`.


### Flag no-interaction

Override the value of [options.args.noInteraction](#optionsargsnointeraction) argument with `true`.


### Flag verbose

Override the value of [options.args.verbose](#optionsargsverbose) argument with `true`.


### Flag dryRun

Override the value of [options.args.dryRun](#optionsargsdryrun) argument with `true`.


### Flag strict

Override the value of [options.args.strict](#optionsargsstrict) argument with `true`.


### Flag pretty

Override the value of [options.args.format](#optionsargsformat) argument with `'pretty'`.


### Flag progress

Override the value of [options.args.format](#optionsargsformat) argument with `'progress'`.


## Examples

### Basic

```javascript
require('jit-grunt')(
  grunt,
  // Mapping.
  {
    'behat-definitions': 'grunt-behat-wrapper',
    'behat-story-syntax': 'grunt-behat-wrapper',
    'behat-config-reference': 'grunt-behat-wrapper',
    'behat-run': 'grunt-behat-wrapper',
    'behat-rerun': 'grunt-behat-wrapper'
  }
);

grunt.config.init({
  'behat-definitions': {
    main: {}
  },
  'behat-story-syntax': {
    main: {}
  },
  'behat-config-reference': {
    main: {}
  },
  'behat-run': {
    main: {}
  },
  'behat-rerun': {
    main: {}
  }
});
```


## Author

**Andor Dávid**
* [GitHub](https://github.com/Sweetchuck)
* [Twitter](http://twitter.com/andor_david)
* [LinkedIn](https://hu.linkedin.com/pub/andor-dávid/5b/484/b83)


## Release History

* **v0.0.1** - 2015-06-21
  * Initial release with basic functions.



## License

Copyright (c) 2015 Andor Dávid, contributors.