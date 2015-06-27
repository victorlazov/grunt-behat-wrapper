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
