# About world maps

**World map** - the interactive list of levels available to the player(s) for play. World map - is a key unit of game or episode.

World map also can be a hub-styled, I.e. world map will not be used. Instead of the world map, a special level will be used. That level is called a hub level. The hub level gives a player to enter into levels like it going between levels.


* **Terrain tiles** - the main design unit which used for creating the common design of the world map. Terrain tiles are not communicating with other elements.
* **Scenery** - the secondary design unit. The scenery can be hidden when did open a path which is placed over them.
* **Paths** - This allows the player to move between level points and map locations. Usually, paths are hidden by default and appearing when a player passes the level placed nearly to them.
* **Level points** - The special units, which allowing entering into defined level or teleport player to other map coordinates. Levels can have multiple entrances but can have different warp points inside a level. Also, level point using as the game start point. If the start point wasn't defined, a player will start from 0x0 coordinates.
* **Music Boxes** - The special units which switching playing music when the player character stands on them.

_World map editor interface_

<ImageZoom
alt="WorldEdit_Workspace"
url="screenshots/WorldEditing/WorldEdit_Workspace.png"
:border="true"
/>

**Each world map should have:**

* **Title of episode** - this is the name of the world map which showing in the main menu. If you will not define it and when you will try to play it in the SMBX, you will see the blank title of the episode!
* **Game start point** - Any level item with a "Game start" flag. If you will not place it, the player will start the game from the 0x0 coordinates of the world map. If you will put multiple levels with the "Game start" flag, you will start the game from the oldest of them.
* **All levels should be connected with paths** - if you will don't connect levels with paths you will not be able to walk over the world map. Path items - only one type of item that giving an ability to walk over the world map. Even if you will build a chain of levels which placed together, the next level will be opened only if you will complete it (level is successful only if player end them by getting the exit item. If a player got lose the level (killed by enemy/boss, fell into a pit, lose a level mission, etc), the exit will give the failure result, and you should replay level)!
