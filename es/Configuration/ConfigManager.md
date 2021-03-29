# Configuration Manager
Configuration Manager allows you to control and select the global game configurations.

## Configuration status
This dialog allows you to check states of current game configuration and find errors if they exist.

![007_configStatus](screenshots/Tools/007_configStatus.png)

<ImageZoom
  alt="008_ConfigStatusBox"
  url="screenshots/Tools/008_ConfigStatusBox.png" 
  :border="true"
/>

## Reload global configuration
This feature allows reloading global configuration settings without restarting of application. 
This useful for apply edited configs into the opened project.

![ReloadConfig](screenshots/Tools/ReloadConfig_menu.png)

## Run a configure tool
Some configuration packages may contain the special configuration tool that gives a set of 
extra actions you can perform. 
[You can read detailed information about configure tool here](https://wohlsoft.ru/pgewiki/Configure.js_(Config_pack)).

![RunConfigTool](screenshots/Tools/RunConfigTool.png)

## Change configuration
You can work with other game configurations. To switch the Configuration Package, you need
to open the menu item: `Tools -> Global Configuration -> Change configuration...` After
the switch of configuration, you need to restart the editor to start work with the new
configuration package.

![ConfigChange](screenshots/Tools/ConfigChange.png)
