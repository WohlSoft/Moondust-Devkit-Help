# How to make levels

![HowToLevels](Intro/QuickStart/HowToMakeLevels.png)

**Levels** - are a total space available to the player(s) during the
course of completing a discrete objective.


To start make levels, first of all you need open the 
"File" -> "New" -> "Level" menuitem. When you did it you will see the
main editing interface which contains editing space where you will
need to place objects.


If you wish to edit exist level, you can open the "File" -> "Open"
menu and select necessary file in the explorer. You also can drag&drop
file into editor's window directly to open them. You also can associate
all supported by PGE Editor files with editor in the
"Tools" -> "Application Settings" menu.


To make level you need to place any items which you can found in the
special item toolbox. Also you have able to set section size, define
background image and background music, you will need to open the
section settings item box where you have able to use any properties
of current section.


**Each level should have:**

* **Title of level** - The name of level which showing in the world map
or in the battle mode. You will asked for it when you will try to save level.
Or you can edit them in the "Level" -> "Properties" menu.
* **Player's start/spawn point** where player will appear on level beginning.
Instead of spawn points you can put any warps, but you will able start
this level only when you will enter to it with definition of entrance
warp ID (for example, enter to this level from another level or from
world map)! If level will have no start points, it will can't be startable!
* **Exit from level**: this is a special NPC which triggers the exit and ends
level with successful result. Without exits player will not be able exit
from your level.
  * **Standard exits**: are finishing level when one of them was taken by
  player. In the SMBX64 configurations there are a NPC-11(Card roulette),
  NPC-16 (Dungeon ball), NPC-41 (Crystal sphare), NPC-197 (Goal tape),
  NPC-97 (Star).
  * **Secret exit**: in the SMBX64 configurations it is a combination of
  NPC-31 (key) and BGO-35 (key hole). To activate this exit player
  should contact by carried key with key hole.
  * **Offscreen exit**: This exit type is not requires any special items,
  then you will need to enable a flag for section where player will have
  able to exit from level when it will walk out of screen.
  * **Warp exit**: this is a warp with alone entrance point and with
  enabled 'level exit' flag. Level will be completed when player will
 **** enter into this warp. Warps can be used to make able move between
  different levels or even move to a specific world map coordinates.
  If coordinates are not defined, after exiting player will be on same
  position where it was entered into this level or will exited from level
  through same warp point where it was entered (if instead of world map
  a hub level was used).
  * **End game exit**: This exit type will trigger end of episode.
  You can call it via a special event command which available to set
  in the 'events' toolbox.
  * **Boss defeat exit**: Some NPC's can spawn exit item when they
  are was defeated. In the SMBX64 standard there are NPC-15 (boom-boom)
  will spawn NPC-16 (Dungeon ball), NPC-39 (Birdo) will spawn
  NPC-41 (Crystal sphare), defeating of NPC-86 (Bowser IIIrd) will
  activate end of episode. To enable spawning of exit item, NPC must
  have enabled "Set as boss" flag!


_Level editing interface_

<ImageZoom 
  alt="EditorInterface"
  url="screenshots/LevelEditing/005_levelEditingSpace.png" 
  :border="true"
/>


## Level units and items

**The main level unit is a section**. Section - is a separated sub-area of
level which have it's own settings: music, background, physics, etc.
Player can move between sections via special points - warps. All sections
placed in a united space, and you can see many sections in one space,
but you have able set settings for one section at same time.

### Items

**[Items](../../EditLevel/Items)** - are a main content of each level. To make level you should
place them to make universe of your level.

<u>Click to the name of item type to learn more about them:</u>

**[Blocks](../../EditLevel/Items#blocks)** - are a solid objects which are tiles with its shape and size.
The main construction material of which level consists. The majority of
blocks interacts from players on whom it can stand about which the player
can hit which can be a limiting wall. There are blocks which hurts to the
game character on touch, and some are may to kill it instantly, and also
able to destroy other objects which have touched them. There are special
blocks with own algorithm of interaction with the player. For example:
switch, switching wall, what changing his state from lock to unlock and
back; switches between player characters and character limit blocks, what
allows walk through them only for one of characters, for other characters
these blocks working as normal, etc. As there is a special type of blocks
which can have any size. This is a Sizable blocks.

**[Background objects](../../EditLevel/Items#bgo)** - are a sceneries. But some BGO can have special
features: platform movement paths, will define movement paths for moving
"platforms", reverse block, what will revert platform's speed back. Some BGO
allows to climb on them. BGO can be background and foreground.
Foreground BGO placing over all other level items.

**[Non-playable characters](../../EditLevel/Items#npc)** - are a main game unit, what building the game
process: these is a enemies, friends, items, power-ups, sceneries, etc.
Each NPC have his algorithm, and can be programmed.

**[Warp/Door points](../../EditLevel/Items#warps)** - are a special units, which allow to player teleport from first
warp point (Entrance) to second (Exit). Player can teleport between
difference places of one section, and also player can teleport between
sections. This is a one way for enter to another section, but exclusion
is some NPCs, what can generate warp to other section.

**[Physical environment area](../../EditLevel/Items#physical-environments)** (Water, Quicksand, etc.) - this is a
specual unit which defining the physical environment inside its rectangle.


### Special units

**[Layers](../../EditLevel/Layers)** - are a groups of items which can be used for fast access to
them by special events.

**[Events](../../EditLevel/Events)** - are a special data of level which can dynamically define and
change the game process options. For example: section settings, hide/show
objects on target layers, move objects on layer, made scrolling of
section, etc.
