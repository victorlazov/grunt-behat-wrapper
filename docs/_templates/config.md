## options.behatExecutable

Type: `String`

Default value: `'./bin/behat'`

Path to `behat` executable.


## options.args

Type: `Object`

Default value: `{}`

Key-value. The keys are almost the same as in the options in the CLI.


## options.args.suite

Type: `String`

Default value: `null`

Only execute a specific suite.


## options.args.format

Type: `String`

Default value: `null`

How to format tests output. pretty is default.

Available formats are:

* progress: Prints one character per step.
* pretty: Prints the feature as is.

You can use multiple formats at the same time. (multiple values allowed)


## options.args.out

Type: `String`

Default value: `null`

Write format output to a file/directory instead of STDOUT (output_path). 
You can also provide different outputs to multiple formats. (multiple values 
allowed)


## options.args.formatSettings

Type: `String`

Default value: `null`

@todo Set formatters parameters using json object. Keys are parameter names, 
values are values. (multiple values allowed)


## options.args.lang

Type: `String`

Default value: `null`

Only executeCall the feature elements which match part of the given name or 
regex. (multiple values allowed)


## options.args.tags

Type: `String`

Default value: `null`

Only executeCall the features or scenarios with tags matching tag filter 
expression. (multiple values allowed)


## options.args.definitions

Type: `String`

Default value: `'l'`


## options.args.appendSnippets

Type: `Boolean`

Default value: `false`

Appends snippets for undefined steps into main context.


## options.args.noSnippets

Type: `Boolean`

Default value: `false`

Do not print snippets for undefined steps after stats.


## options.args.strict

Type: `Boolean`

Default value: `true`

Passes only if all tests are explicitly passing.


## options.args.stopOnFailure

Type: `Boolean`

Default value: `true`

Stop processing on first failed scenario.


## options.args.profile

Type: `String`

Default value: `null`

Specify config profile to use.


## options.args.config

Type: `String`

Default value: `null`

Specify config file to use.


## options.args.verbose

Type: `Boolean`

Default value: `false`


## options.args.noInteraction

Type: `Boolean`

Default value: `false`

Do not ask any interactive question.


## options.args.colors

Type: `TriState`

Default value: `null`

If `true` then force ANSI color in the output. By default color support is 
guessed based on your platform and the output if not specified.

If `false` then force no ANSI color in the output.


## paths

Type: `String[]`

Default value: `[]`

Optional path(s) to execute. Could be:

* a dir (features/)
* a feature (*.feature)
* a scenario at specific line (*.feature:10).
* all scenarios at or after a specific line (*.feature:10-*).
* all scenarios at a line within a specific range (*.feature:10-20).
* a scenarios list file (*.scenarios).
