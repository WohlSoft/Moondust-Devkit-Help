# World Settings
## Overview
This is a main toolbox which allow you to configure the world map and episode settings.

* **World Title** - the episode name which will be displayed in the episode list of the game menu.
* **Hub-styled world map** - this option disable using of the world map, but you must set intro level which will be used as main hub.
* **Restart last level after fail** - If player was fail on some level, it will be restarted without kicking into world map or into the hub level.

* **Intro level** - the level which will started before world map will be shown.
* **Total stars** - this value defining the total stars number which will be displayed in the game menu in a game save slot choosing menu. 

* **Credits** - the special field which allow add credit list which will be shown in the credits screen after end of the game.
<Note type="danger">
If you save a world map into SMBX64-WLD and older, all lines after the 5th are will be lost.
</Note>
* **Disable character** - these flags disabling possibles for select the character in the game menu.

_World map settings toolbox_

<ImageZoom 
  alt="wset"
  url="screenshots/WorldEditing/WorldSettings.png" 
  :border="true" 
/>

## Star Counter
This feature will help you to count all stars which are exists on the levels which defined on this map. After counting value will be stored into stars number field. Counter counts all Star NPC's which are existing on the map as free objects, containing inside the NPV-Containers, Included into blocks. Friendly Star NPCs are not counting because there are non-collectible while there are has a friendly flag.
