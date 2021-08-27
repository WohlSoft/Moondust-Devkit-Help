# How to make levels

![HowToLevels](Intro/QuickStart/HowToMakeLevels.png)

**Levels** - are a total space available to the player(s) during the
course of completing a discrete objective.


To start make levels, first of all you need open the 
`"File" -> "New" -> "Level"` menuitem. When you did it you will see the
main editing interface which contains editing space where you will
need to place objects.


If you wish to work with existing level, you can open the "File" -> "Open"
menu and select necessary file in the explorer. To open file, you also can 
drag & drop a file into the window of the Editor directly. You can associate
all supported by Moondust Editor files with the Editor inside of the
`"Tools" -> "Application Settings"` menu to open them from a file manager by
double-clicking on them.

To build a level you need to place any items which you can found in the
special item toolbox. Also, you are able to set settings of section: size, 
choose background image, and use any background music. You will need to open 
the section settings toolbox where you can find any properties for a current
section.

**Every level must have:**

* **Title of level** - The name of level which showing in the world map
or in the battle mode. You will be asked for it when you will try to save level.
Or you can edit them in the "Level" -> "Properties" menu.
* **Player's start/spawn point** where player will appear on level beginning.
Instead of spawn points you can put any warps, however, this level
can be started by entering of a specific warp by it's ID (for example, enter 
to this level from another level or enter it from the world map)! When level has 
no start points and entrance warp specified, it will fail with an error!
* **Exit from the level**: this is a special NPC which triggers the exit and ends
the level with a successful result. Without exits player will be unable 
to quit the level. There are possible level exit types: 
  * **Standard exits**: are finishing level when one of them was taken by
  player. In the SMBX64 configurations there are a NPC-11(Card roulette),
  NPC-16 (Dungeon ball), NPC-41 (Crystal sphare), NPC-197 (Goal tape),
  NPC-97 (Star).
  * **Secret exit**: in the SMBX64 configurations it is a combination of
  NPC-31 (key) and BGO-35 (key hole). To activate this exit player
  should contact by carried key with key hole.
  * **Offscreen exit**: This type of exit doesn't require any required items 
  placed. Instead, you will need to set the flag for the section where player will be
  able to quit the level when it will walk out of screen.
  * **Warp exit**: this is a warp with a single entrance point and has the
  'level exit' flag enabled. The level will be completed when player will
  enter into this warp. Warps can be used to make an ability to go between
  different levels or even go into a specific world map positions through 
  a level. If world map coordinates wasn't specified, player will return 
  the same world map position where was entered this level, or will exit through 
  the same level through the same warp point where was entered (At the hub-based
  episodes).
  * **End game exit**: This type of exit will trigger the end of episode.
  You can call it via the special event command which can be set through
  the 'events' toolbox.
  * **Boss defeat exit**: Some NPC can spawn an exit item when you defeat them. 
  In the SMBX64 standard there are NPC-15 (boom-boom) that will spawn the NPC-16 (Dungeon ball);
  The NPC-39 (Birdo) will spawn the NPC-41 (Crystal sphare);
  Defeating of the NPC-86 (Bowser IIIrd) will run the End of Episode. 
  To enable the spawning of exit item, NPC must have the "Set as boss" flag enabled!


_Level editing interface_

<ImageZoom 
  alt="EditorInterface"
  url="screenshots/LevelEditing/005_levelEditingSpace.png" 
  :border="true"
/>


## Level units and items

**The main level unit is a section**. Section - is a separated sub-area of
level which have it's own settings: music, background, physics, etc.
Player can move between sections via special points called as **warps**. All sections
placed in a united space, therefore you can see many sections in one space,
however, you can change settings for one section at same time.


### Items

**[Items](../../EditLevel/Items)** - are a main content of every level. To make the level you should
place items to build the universe of the level.

<u>Click to the name of item type to learn more about them:</u>

**[Blocks](../../EditLevel/Items#blocks)** - are a solid objects which are 
tiles with its shape and size. The main construction material of which level 
consists. The majority of blocks interacts from players on whom it can stand
about which the player can hit which can be a limiting wall. There are blocks
which hurts to the game character on touch, and some are may to kill it
instantly, and also able to destroy other objects which have touched them. 
There are special blocks with own algorithm of interaction with the player. 
For example: switch, switching wall, what changing his state from lock to 
unlock and back; switches between player characters and character limit blocks, 
what allows walk through them only for one of characters, for other characters
these blocks working as normal, etc. As there is a special type of blocks
which can have any size. This is a Sizable blocks.

**[Background objects](../../EditLevel/Items#bgo)** - are scenery. However, some 
of BGO can have special features: platform movement rails, which will guide the movement 
of "platforms" (NPC-based objects), reverse block that will turn the moving platform back. 
Some BGO allows a player to climb on them. BGO can be background and foreground.
Foreground BGO placing over all other level items.

**[Non-playable characters](../../EditLevel/Items#npc)** - are a main game unit, they build
the game process: there are enemies, friends, items, power-ups, sceneries, etc.
Every NPC have own algorithm which can be programmed.

**[Warp/Door points](../../EditLevel/Items#warps)** - are a special units which allow a player 
to teleport from the first warp point (Entrance) to the second (Exit). 
Player can teleport between different places of the same section, and also, player can go between 
different sections. This is the only one way to go between different sections. However, there are
exceptions: some NPC can generate the way between different sections.

**[Physical environment area](../../EditLevel/Items#physical-environments)** (Water, Quicksand, etc.) - this is a
special unit which declares the physical environment inside its area.


### Special units
**[Layers](../../EditLevel/Layers)** - are groups of items which can be used for the fast access to
them by special events and for group actions over items are members of a layer.

**[Events](../../EditLevel/Events)** - are simple programming units of the level which can dynamically 
affect the game process options. For example: section settings, hide/show objects on target layers,
move objects of the layer, make the scrolling of a section, etc.
