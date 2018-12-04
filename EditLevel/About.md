# About levels

**Levels** - is the total space available to the player(s) during
the course of completing a discrete objective.

Here you can made levels for your game.

The main level unis is a **section**. Section - is a separated sub-area
of level which have his own settigs: music, background, physics, etc.
Player can move between sections by special points - warps. All sections
placed in a single space, and you can see many sections, but you can
set settings only for current section.

**Blocks** - are a solid objects which are tiles with its shape and size.
The main construction material of which level consists. The majority of blocks interacts from players on whom it can stand about which the player can hit which can be a limiting wall. There are blocks the touch to which hurt to the game character, and some are capable to kill instantly not only it, but also to destroy other objects which have touched them. There are special blocks with own algorithm of interaction with the player. For example: switch, switching wall, what changing his state frol lock to unlock and back; switches between player characters and character limit blocks, what allows walk throught them only for one of characters, for other characters theese blocks working as normal, etc. As there is a special type of blocks which can have any size. This is a Sizable blocks.

**Background objects** - are a sceneries. But some BGO can have special
features: platform movement paths, will define movement paths for moving
"platforms", reverser, what will revert platform's speed back. Some BGO
allows to climb on them. BGO can be background and foreground. Foreground
BGO placing over all other level items.

**Non-playable characters** - are a main game unit, what building the game process:
there are an enemies, friends, items, power-ups, scenery, etc. Each NPC have
his algorithm, and can be programmed.

**Warps** - are a special units, which allow to player teleport from first
warp point (Entrance) to second (Exit). Player can teleport between
difference places of one section, and also player can teleport between
sections. This is a one way for enter to another section, but exclusion
is some NPCs, what can generate warp to other section.

**Physical environment area** (Water, Quicksand, etc.) - this is a special
unit which defining the physical environment inside its rectangle.

**Layers** - are a groups of items which can be used for fast access to
them by special events.

**Events** - are a special data of level which can dynamically define and
change the game process options. For example: section settings, hide/show
objects on target layers, move objects on layer, made scrolling of
section, etc.


_Level editing interface_

<ImageZoom 
  alt="005_levelEditingSpace"
  url="screenshots/LevelEditing/005_levelEditingSpace.png" 
  :border="true" 
/>

<u>**Each level should have**</u>:

* **Title of level** - The name of level which showing in the world map or in
the battle mode. You will asked for it when you will try to save level.
Or you can edit them in the "Level" -> "Properties" menu.
* **Player's start/spawn point** where player can start it's walk. Also you
can put instead of them any warps, but you will able start this level
when you was entered to them with definition of entrance warp ID! If you
will put no start points, you will haven't able to start level!
* **Exit from level**: this is aspecial NPC which triggers the exit and ends
level with successful result. Without exits player will not be able exit
from your level.
  * **Standard exits**: ends level when one of them was taken by player. In the
  SMBX64 configurations are  NPC-11(Card roulette), NPC-16 (Dungeon ball),
  NPC-41 (Crystal sphare), NPC-197 (Goal tape), NPC-97 (Star).
  * **Secret exit**: in the SMBX64 configurations is a combination of NPC-31
  (key) and BGO-35 (key hole). To activate this exit player should contact
  by carried key with key hole.
  * **Offscreen exit**: This exit is not require any special items, you need to
  enable a flag on section where player will exit from level when it will
  walk out of screen.
  * **Warp exit**: this is a warp which have alone entrance point. Level will
  be ended when player will enter into them. Also warps can be used to make
  warps between difference levels or even warp to specific world map
  coordinates. If coordinates will not be defined, player will exit from
  level into same position where player was entered into level or will exit
  from level through same warp point where it entered via hub level.
  * **End game exit**: This exit will trigger end of episode. You can call it
  via special event command.
  * **Boss fight exit**: Some NPC's can spawn exit item after defeating of them.
  In the SMBX64 standard there are NPC-15 (boom-boom) will spawn NPC-16
  (Dungeon ball), NPC-39 (Birdo) will spawn NPC-41 (Crystal sphare),
  NPC-86 (Bowser IIIrd) will activate end of episode. To enable spawning
  of exit you should enable "Set as boss" flag for this NPC!
