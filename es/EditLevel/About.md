# About levels

**Levels** - is the total space available to players during the completing a discrete objective.

Here you can make levels for your game.

The main level unis is a **section**. Section - is a separated sub-area of a level which have their settings: music, background, physics, etc. A player can move between different sections through the special points called warps (doors, pipes, or instant teleports). All level sections are in a single space, and you can see many sections at one moment, however, you can set settings only for the current section.

**Blocks** - are solid objects which are tiles with shape and size. Blocks are the main construction material of which level consists. The majority of blocks interact from players on whom it can stand about which the player can hit which can be a limiting wall. There are blocks the touch to which hurt to the game character, and some are capable to kill instantly not only it but also to destroy other objects which have touched them. There are special blocks with their algorithm of interaction with the player. For example, switch, switching wall, changing its state from lock to unlock and back; switches between player characters and character limit blocks, what allows a walk through them only for one of the characters, for other characters these blocks working as normal, etc. As there is a special type of blocks which can have any size. This is a Sizable block.

**Background objects** - are a sceneries. But some BGO can have special features: platform movement paths (rails) will define movement paths for moving "platforms," a reverse block that will revert the platform's speed. Some BGO allows climbing on them. BGO can be background and foreground. Foreground BGO placing over all other level items.

**Non-playable characters** - are the main game unit, what building the game process: there are enemies, friends, items, power-ups, scenery, etc. Each NPC has an algorithm and can be programmed.

**Warps** - are special units, which allows a player to teleport from the first warp point (Entrance) to the second (Exit). The player can teleport between different places of one section, and also the player can teleport between sections. This is one way to enter another section, but exclusion is some NPCs which can generate warp to other section.

**Physical environment area** (Water, Quicksand, etc.) - this is a special unit that defining the physical environment inside its rectangle.

**Layers** - are groups of items that can be used for fast access to them by special events.

**Events** - are special data of level which can dynamically define and change the game process options. For example, section settings, hide/show objects on target layers, move objects on a layer, made scrolling of section, etc.


_Level editing interface_

<ImageZoom
alt="005_levelEditingSpace"
url="screenshots/LevelEditing/005_levelEditingSpace.png"
:border="true"
/>

<u>**Each level should have**</u>:

* **Title of level** - The name of the level which showing on the world map or in the battle mode. You will be asked for it when you will try to save the level. Or you can edit them in the `Level -> Properties` menu.
* **Player's start/spawn point** where the player can start its walk. Also, you can put instead of them any warps, but you will able to start this level
  when you have entered them with the definition of entrance warp ID! If you will put no start points, you will haven't able to start level!
* **Exit from level**: this is a special NPC that triggers the exit and ends the level with a successful result. Without exits, the player will not be able to exit from your level.
  * **Standard exits**: ends level when one of them was taken by the player. In the SMBX64 configurations are  NPC-11(Card roulette), NPC-16 (Dungeon ball), NPC-41 (Crystal sphere), NPC-197 (Goal tape), NPC-97 (Star).
  * **Secret exit**: in the SMBX64 configurations is a combination of NPC-31 (key) and BGO-35 (asshole). To activate this exit player should contact by carried a key with a keyhole.
  * **Off-screen exit**: This exit is not required any special items, you need to enable a flag on the section where the player will exit from the level when it will walk out of the screen.
  * **Warp exit**: this is a warp that has alone entrance point. The level will be ended when a player will enter into them. Also, warps can be used to make warps between different levels or even warp to specific world map coordinates. If coordinates will not be defined, the player will exit from the level into the same position where the player was entered into level or will exit from the level through the same warp point where it entered via hub level.
  * **End game exit**: This exit will trigger the end of the episode. You can call it via special event command.
  * **Boss fight exit**: Some NPC's can spawn exit item after defeating them. In the SMBX64 standard, there are NPC-15 (boom-boom) will spawn NPC-16 (Dungeon ball), NPC-39 (Birdo) will spawn NPC-41 (Crystal sphere), NPC-86 (Bowser IIIrd) will activate end of the episode. To enable spawning of the exit you should enable the "Set as boss" flag for this NPC!
