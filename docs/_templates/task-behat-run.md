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
* [paths](#paths)

With the default options the
```bash
grunt behat-run
```

is equivalent to
```bash
./bin/behat
```
