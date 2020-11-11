# Development console
It's a development console. Here will be printed all log events during the Editor workflow. 
Also, you can type some commands to control the editor's settings. The console can be used 
for cheats into the engine part while the level is testing.

To open a console, open the `Help -> Show Development Console` menu item.

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/Tools/devconsole.png"
  :border="true"
/>

### Available console commands:
Here is a list of available commands you can use for various tests and works.

| Command | Description |
|---------|-------------|
| ?, help | Prints the command help | 
| test | display the `-> All good!` message |
| version | display version information of the editor application |
| md5 | **Args:** `{SomeString}` Calculating MD5 hash of string |
| strarr | **Args:** `{String array}` validating the PGE-X string array |
| savesettings | Do write application settings into the config file now (otherwise, settings will save on application quit) |
| playmusic | **Args** `{Music type (lvl wld spc), Music ID}` Play default music by specific ID |
| pgex | **Arg:** `{Path to file}` tests if the file contains the valid PGE-X data format |
| strarr | **Arg:** `{String array}` validates the PGE-X string array |
| quit | close editor application |
| paths | Shows various important paths! |
