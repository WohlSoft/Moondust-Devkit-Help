# World Settings
## Overview
It's the main toolbox that allows you to configure the world map and episode settings.

* **World Title** - the episode name will be displayed in the episode list of the game menu.
* **Hub-styled world map** - this option disables using of the world map, but you must set intro-level which will be used as the main hub.
* **Restart the last level after fail** - If a player failed on some level, it will be restarted without kicking into the world map or the hub level.

* **Intro level** - the level which will start before the world map will be shown.
* **Total stars** - this value defining the total number of stars that will be displayed in the game menu in a game save slot choosing menu.

* **Credits** - the special field which allows adding credit list will be shown in the credits screen after the end of the game.

  !> **Danger:** If you save a world map into SMBX64-WLD and older, all extra credits lines after the 5th are will be lost.

* **Disable character** - there are flags that can disable an ability to select any specific playable characters in the main menu or in the world map's pause menu.

_World map settings toolbox_

![wset](../screenshots/WorldEditing/WorldSettings.png)

## Star Counter
This feature will help you to count all-stars that exist on the levels defined on this map. After counting, the value will be stored in the stars number field. The counter counts all Star NPCs which are existing on the map as free objects, containing inside the NPV-Containers, Included into blocks. Friendly Star NPCs are not counting because there are non-collectible while there are has a friendly flag.
