# How to make world maps

![HowToWorlds](Intro/QuickStart/HowToMakeWorlds.png)

**World map** - is the interactive list of levels available for a player(s) to play.

World map - is a main unit of the game or an episode!

World maps also can be a hub-styled, I.e. world map will not be
used. Instead, the special level will be used as the list of levels for play,
which is called as a HUB. In the hub player can enter into levels though warps.

To start building the world map, first of all you need open the
`"File" -> "New" -> "World"` menuitem. When you did it you will
see the main editing interface which contains editing space
where you will need to place objects.

If you wish to work with existing world map, you can open the "File" -> "Open"
menu and select necessary file in the explorer. To open file, you also can 
drag & drop a file into the window of the Editor directly. You can associate
all supported by Moondust Editor files with the Editor inside of the
`"Tools" -> "Application Settings"` menu to open them from a file manager by
double-clicking on them.

To make a world map you need to place any items which you can found
in the special item toolbox. The world map also settings of
your episode.

The important items are levels and paths. Levels are entrances
of your levels. Paths giving able to walk between levels or
walk over world map. Don't forget, paths are not connectable
images, there are simple squares which giving able to walk between
them when they near to each other.


**Each world map should have**:

* **Title of episode** - this is a name of world map which showing
in the main menu. If you will not define it and when you will try
to play it in the SMBX, you will see the blank title of episode!
* **Game start point** - The any level item with "Game start" flag.
If you will not place it, the player will start game from 0x0
coordinates of world map. If you will put multiple levels with
"Game start" flag, you will start game from oldest of them.
* **All levels should be connected with paths** - if you will don't
connect levels with paths you will not be able walk over world map.
Path items - alone type of items which giving able to walk over
world map. Even if you will build chain of levels which placed
together, next level will be opened only if you will successfully
complete it (level is successful only if player end them by getting
of exit item. If player lose (killed by enemy/boss, fall down into pit,
lose level mission, etc), exit is failed and you should replay level)!

_World map editor interface_

<ImageZoom 
  alt="WorldMapInterface"
  url="screenshots/WorldEditing/WorldEdit_Workspace.png" 
  :border="true"
/>


## World map items

**[Terrain tiles](../../EditWorld/Items#terrain-tiles)** - the main design units which are using for creation
of a design of the world map. Terrain tiles aren't communicating with
other items.

**[Scenery](../../EditWorld/Items#sceneries)** - there are secondary design unit. Sceneries will hide when
path cells that placed over sceneries gets opened.

**[Paths cells](../../EditWorld/Items#paths)** - are units that allows player to move between different
level points and map locations. Usually, paths cells are hidden by default, and appearing when player passes
the level which placed nearly to them.

**[Level entrances](../../EditWorld/Items#level-entrances)** - there are
a special units, which allows player to enter into specified level or
teleport player to other map coordinates. Levels are can have multiple entrances,
but can have different warp points inside a level. Also, level point using as a
game start point. If start point wasn't placed (world map has no
level entrance point with the "Game start" flag enabled), player will start game
at the 0:0 position.

**[Music Boxes](../../EditWorld/Items#music-boxes)** - there are a special units that switching a playing
music when playable character stands on them.
