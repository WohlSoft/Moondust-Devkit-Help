# Development console
This is a development console. Here will be logged all log events of editor working, 
also you can type some commands to control the editor's settings. Also, this is a single way to enter
cheats into engine part while level is testing.

To open console simply open menuitem  `Help -> Show Developement Console`.

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/Tools/devconsole.png"
  :border="true"
/>

### Available comsole commands:
Now console available for tests and have a few commands. This list will be exchanged while developing process is going.

| Command | Description |
|---------|-------------|
| ?, help | Prints the command help | 
| test | display the `-> All good!` message |
| version | display version information of the editor application |
| md5 | **Args:** `{SomeString}` Calculating MD5 hash of string |
| strarr | **Args:** `{String array}` validating the PGE-X string array |
| savesettings | write application settings into config file (usually settings writing on exit) |
| playmusic | **Args** `{Music type (lvl wld spc), Music ID}` Play default music by specific ID |
| pgex | **Arg:** `{Path to file}` tests if the file contains the valid PGE-X data format |
| strarr | **Arg:** `{String array}` validates the PGE-X string array |
| quit | close editor application |
| paths | Shows various important paths! |
