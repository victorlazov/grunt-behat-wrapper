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
