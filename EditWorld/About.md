# About world maps

**World map** - the interactive list of levels which available to player(s) for play. World map - is a key unit of game or episode.

World map also can be a hub-styled, I.e. world map will not be used. Instead of the world map a special level will be used. That level is called as hub level. The hub level gives to a player to enter into levels like it going between levels.
 

* **Terrain tiles** - the main design unit which using for creating of common design of the world map.
Terrain tiles aren't communicating with other elements.
* **Scenery** - the secondary design unit. Scenery can be hidden when did open a path which placed over them.
* **Paths** - allow to player move between level points and map locations. Usually paths hidden by default
and appearing when player passes the level which placed nearly to them.
* **Level points** - The special units, which allowing entering into defined level or teleport player
to other map coorditates. Levels can have multiple entrances, but can have difference warp points
inside a level. Also level point using as game start point. If start point wasn't defined,
player will start from 0x0 coordinates.
* **Music Boxes** - The special units which switching playing music when player character stand on them. 

_World map editor interface_

<ImageZoom 
  alt="WorldEdit_Workspace"
  url="screenshots/WorldEditing/WorldEdit_Workspace.png" 
  :border="true" 
/>

**Each world map should have:**

* **Title of episode** - this is a name of world map which showing in the main menu. If you will not define
it and when you will try to play it in the SMBX, you will see the blank title of episode!
* **Game start point** - The any level item with "Game start" flag. If you will not plase it, the player will
start game from 0x0 coordinates of world map. If you will put multiple levels with "Game start" flag,
you will start game from oldest of them.
* **All levels should be connected with paths** - if you will don't connect levels with paths you will not
be able walk over world map. Path items - alone type of items which giving able to walk over world map.
Even if you will build chain of levels which placed together, next level will be opened only if you will
successfully complete it (level is successful only if player end them by getting of exit item. If player got
lose the level (killed by enemy/boss, fall down into a pit, lose level mission, etc), exit will give the
failure result, and you should replay level)!
