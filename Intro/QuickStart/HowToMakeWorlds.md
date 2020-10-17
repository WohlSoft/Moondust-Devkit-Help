# How to make world maps

![HowToWorlds](Intro/QuickStart/HowToMakeWorlds.png)

**World map** - is an interactive list of levels which available
to player(s) for play.

World map - is a key unit of game or episode!

World map also can be a hub-styled, I.e. world map will not be
used. Instead of world map you will use the special level, which
called as hub. In the hub player can enter into levels though warps.

To start make world map, first of all you need open the
"File" -> "New" -> "World" menuitem. When you did it you will
see the main editing interface which contains editing space
where you will need to place objects.

If you wish to edit exist level, you can open the "File" -> "Open"
menu and select necessary file in the explorer. You also can
drag&drop file into editor's window directly to open them. You
also can associate all supported by PGE Editor files with editor
in the "Tools" -> "Application Settings" menu.

To make world map you need to place any items which you can found
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

**[Scenery](../../EditWorld/Items#sceneries)** - there are secondary design unit. Sceneries can be hidden
when did opened a path which placed over them.

**[Paths](../../EditWorld/Items#paths)** - are allows to player move between level points and map
locations. Usually paths are hidden and appearing when player pass
the level which placed nearly to them.

**[Level entrances](../../EditWorld/Items#level-entrances)** - there are a special units, which are allowing
to enter into specified level or teleport player to other map
coordinates. Levels are can have multiple entrances, but can have
different warp points inside a level. Also level point is used as a
game start point. If start point is not declared (world map has no
level entrance point with "Game start" flag), player will start game
at 0:0 coordinates.

**[Music Boxes](../../EditWorld/Items#music-boxes)** - there are a special units which are switching a
playing music when playable character stands on them.