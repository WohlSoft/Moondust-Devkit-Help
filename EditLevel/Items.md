# Level Items

**Items** - main content and part of many levels. There is construction material, sceneries, items, characters, etc.

<u>**Avalilable item types:**</u>
* [Blocks](#blocks)
* [Background objects](#bgo)
* [Non-playable characters](#npc)
* [Warp/Door points](#warps)
* [Physical environments (Known in SMBX as Water/Quicksand)](#physical-environments)
* [Player's start points](#player-points)

## Blocks

**Blocks** - are solid objects which are tiles with shape and size. Blocks are the main construction material of which level consists. The majority of blocks interact from players on whom it can stand about which the player can hit which can be a limiting wall. There are blocks the touch to which hurt to the game character, and some are capable to kill instantly not only it but also to destroy other objects which have touched them. There are special blocks with their algorithm of interaction with the player. For example, switch, switching wall, changing its state from lock to unlock and back; switches between player characters and character limit blocks, what allows a walk through them only for one of the characters, for other characters these blocks working as normal, etc. As there is a special type of blocks which can have any size. This is a Sizable block.

_Placing of blocks_

<ImageZoom
alt="place_blocks"
url="screenshots/LevelEditing/Items/place_blocks.png"
width="200px"
:border="true"
/>


_Block context menu_

<ImageZoom
alt="BlockContext"
url="screenshots/LevelEditing/Items/BlockContext.png"
width="200px"
:border="true"
/>


### Block Properties

**Each block have flags:**

* **Invisible** - Make the block invisible. It will appear once it will get a hit from the bottom side. This flag useful for a place on the map secret bonuses or build barriers for a move up.
* **Slippery** - The block's top surface will be slippery.
* **Change contained NPC** - Open NPC selection dialog for change block content.

* **Layer** - here was defined the layer which is the owner of this block.
  All items at first are members of the "Default" layer.

**Each block have the event slots:**

* **Destroyed** - this slot activating if a block was been broken, crushed, destroyed, etc.
* **Hit** - This slot activating if blocks were being hit, kicked, beat from the side or bottom.
* **Layer is empty** - (In SMBX this slot was called "<u>No more objects in layer</u>") this slot activating when was activated the "destroyed" slot and when layer which owner of this block is haven't other objects.

_Block Properties toolbox_

<ImageZoom
alt="Props_Block"
url="screenshots/LevelEditing/Items/Props_Block.png"
width="200px"
:border="true"
/>

### Sizable blocks

It's a special type of block that can have any size. Unlike standard locks, this block placing by rectangle drawing, and its size is defining by the size of the rectangle when you release the mouse key:

_Drawing of sizable blocks_

<ImageZoom
alt="DrawSizableBlock"
url="screenshots/LevelEditing/Items/DrawSizableBlock.png"
width="200px"
:border="true"
/>


These blocks can be resized. Unlike standard blocks, these blocks displaying in the low background layer and displaying always under BGO (but some BGO in the exception can be shown under sizable blocks).

To start resizing, you should open the "Resize" context menu item and you will see a blue rectangle which a "sizer". Move corner dots or sides to define the new size of the block. When you are done resizing press the ENTER key to accept the new size, and then the block will have a new size. If you will press the ESC key you will cancel resizing and the block will keep it's current it's size.

<Note type="tip">
Note: If you wish to get more features of the resize box (green net which defined the new size of the section), click inside of them by the right mouse button.
</Note>

The context menu has actions:

* **Cut top here** - moves the top boundary of the box to the current mouse position
* **Cut left here** - moves left boundary of the box to the current mouse position
* **Cut right here** - moves the right boundary of the box to the current mouse position
* **Cut bottom here** - moves the bottom boundary of the box to the current mouse position
* **Don't snap to grid** - disables grid snapping on moving of box boundaries
* **Disable minimal size limit** - gives the ability to set size less than minimally available size

_Resizing of sizable blocks_

<ImageZoom
alt="ResizeBlock2"
url="screenshots/LevelEditing/Items/ResizeBlock2.png"
width="200px"
:border="true"
/>

## BGO

**Background objects** - is a sceneries. But some BGO can have special features: platform movement paths will define movement paths for moving "platforms", reverse block, which will revert the platform's speed. Some BGO allows climbing on them. BGO can be background and foreground. Foreground BGO placing over all other level items.

_Placing of BGO_

<ImageZoom
alt="PlacingBGO"
url="screenshots/LevelEditing/Items/PlacingBGO.png"
width="200px"
:border="true"
/>


_BGO Context menu_

<ImageZoom
alt="BGO_Context"
url="screenshots/LevelEditing/Items/BGO_Context.png"
width="200px"
:border="true"
/>

### BGO Properties

Each BGO now has only two options:

* **Layer** - here defined the layer, what is the owner of this BGO. All items at first are members of the "Default" layer.

* **Z-Layer** - defining the displaying priority: over or under other items. (Available only for LVLX format)
* **Z-Offset** - This is a helpful value that allows to order of BGOs which displaying over/under each other. (Available only for LVLX format)

* **Sorting priority** - The special option using only for SMBX64-LVL file format saving process as a workaround, but not save into them.

This option can be used only as a hack of SMBX to force display background BGO as foreground. This option doesn't define Z-value, which is the real render priority value. This option defining the sequence of array items for BGO in the file.

_BGO Properties toolbox_

<ImageZoom
alt="BGO_Context"
url="screenshots/LevelEditing/Items/Props_BGO.png"
:border="true"
/>

### Hack: Z-Order in SMBX

Legacy SMBX Engine doesn't support customization of Z-order natively. However, it's possible with a workaround. This working ONLY if you saving into SMBX file format. And will not saving in them. After reopening the same file you need to define this value again.


**1)** All data, include BGOs, in files written in defined sequence:

![Pseudo-foregroundBGO-1](screenshots/LevelEditing/Items/bgo_hack/Pseudo-foregroundBGO-1.png)

**2)** When we using the sort priority value, we will tell to BGO's place, at the beginning, middle, or at the end of the array:

![Pseudo-foregroundBGO-2](screenshots/LevelEditing/Items/bgo_hack/Pseudo-foregroundBGO-2.png)

SMBX render algorithm displaying BGOs by special groups - layers, and BGO order is very important for this case. So, if we are will do a change of the order, we are will let a first BGO, which marked as "Foreground", to make all next BGOs be foreground too, even if there is hasn't a "foreground" flag. Knowing this thing is possible to force display any background BGOs as foreground.

**3)** To allow this feature work, you must place to the map any of true "Foreground" BGO in any position (if your level has no those BGO's, place one of them out of the section to get it on the level space). This trick requires one of foreground BGO under our BGO's which we are want to make foreground too.

<ImageZoom
alt="001_bgo_hack"
url="screenshots/LevelEditing/Items/bgo_hack/_001_bgo_hack.png"
width="200px"
:border="true"
/>


<Note type="warning">
Don't forget, that if you saving the file into SMBX1...64 LVL format, on
next, open this file you must to redefine the sorting priority value
again, because it doesn't save into SMBX level file. Backup saved into
LVLX file format is suggested.
</Note>


**Result of BGO hack in action**
__(bush in the right drawn over playable characters)__

<ImageZoom
alt="Foreground_BGO"
url="screenshots/LevelEditing/Items/bgo_hack/Pseudo-Foreground_BGO.png"
width="200px"
:border="true"
/>

## NPC
**Non-playable characters** - is the main game unit that building the game process: there are enemies, friends, items, power-ups, sceneries, etc. Each NPC has it's an algorithm and can be programmed.

_Placing of NPC's_

<ImageZoom
alt="PlacingNPC"
url="screenshots/LevelEditing/Items/PlacingNPC.png"
width="200px"
:border="true"
/>


_Context menu of NPC_

<ImageZoom
alt="NPC_Direction"
url="screenshots/LevelEditing/Items/NPC_Direction.png"
width="200px"
:border="true"
/>

### NPC Properties

Each NPC has switches and flags:

* Default direction - NPC will start its movement in a defined direction. The direction option can have other names and values, for example, the name "Activation state" and values "On"/"Off", etc. Dependent on the algorithm and global settings.
* Friendly - NPC won't communicate with playable characters and with other NPC's. Friendly NPC's can't be killed, can't hurt player, can't be taken or grabbed. Playable characters and other NPC's can't stay on top of the friendly NPCs.
* Not movable - NPC will be idle irrespective of its algorithm.
* Set as boss - (inside of SMBX this option calling as "Legacy Boss") This is a special flag that automatically enables special events for some bosses which supports them. For example: if NPC has the activated "Boss" flag, will be changed background music to the boss's theme and when the boss will be defeat, will be spawned a special bonus item or the game will be completed.
* Talk message - The message which will be displayed when a player will try to talk with this NPC. After displaying this message will be activated event slot.
* Generator - Making NPC generator. From the one point will be spawned new NPC's every each defined time delay.
  * Generator type - Warp - NPC will be smoothly warped. Projectile - NPC will be appeared by sharply shoot.
  * Generator direction - defining the direction of the spawn of NPC

_Message box editing_

<ImageZoom
alt="MessageBox"
url="screenshots/LevelEditing/MessageBox.png"
width="200px"
:border="true"
/>

<Note type="tip">
Note: Don't forget: all new-line characters will not work correctly 
with SMBX Engine (but will work in Moondust Engine natively).
As a workaround for SMBX Engine, use the extra-spaces to cause a words wrap.
</Note>


Some NPCs can have a special value:

* **Contents** - this option has an ID of other NPC included in this NPC. Available for NPCs which marker as "containers".
* **Spinbox with numeric value** - Some NPCs can have the numeric special value, for example, the position of the fire-bar segment.
* **Special combo-box** - some NPCs can have switchable algorithms that can set individual NPCs algorithm from the list.

* **Layer** - here is defined the layer which is an owner of this NPC. All items at first are members of the "Default" layer.
* **Attach layer** - This is a special option: all static items are members of an attached layer, will move together with this NPC.


Each NPC has the event slots:

* **Activate** - This slot activating then NPC will appear on the player's visible zone.
* **Death** - This slot activating then NPC will be defeat, destroyed, kicked, or taken (coins, power-ups, etc).
* **Talk** - This slot activating them player was talked with this NPC.
* **Layer is empty** - (In SMBX this option is named as "No more objects in layer") this slot activating when activated the "Death" slot and when on the same layer which is an owner if this NPC no more has any members.


_NPC Properties toolbox: Generator, NPC-Container, NPC-Container with spin box special value_

<ImageZoom
alt="Props_NPC_generator"
url="screenshots/LevelEditing/Items/Props_NPC_generator.png"
width="100px"
:border="true"
/><ImageZoom
alt="Props_NPC_Container"
url="screenshots/LevelEditing/Items/Props_NPC_Container.png"
width="100px"
:border="true"
/><ImageZoom
alt="Props_NPC_Container_Second"
url="screenshots/LevelEditing/Items/Props_NPC_Container_Second.png"
width="100px"
:border="true"
/>



### NPC-Containers

Everyone who worked with Legacy SMBX Engine, knows the "Egg", "Buried", "Bubble" and "Lakuti" flags. These flags packing selected items into the special NPC which calling as Container. The container can have included into them NPC's which can be extracted when the container will be destroyed or will be spawned by the container before it will be destroyed.

In the SMBX we are pressing the "Bubble=Yes" or "Buried=Yes" to place "Packed into the herb" or "Packet into the bubble" NPC.

In Moondust Editor you can edit Containers. And therefore, for example, Herb will be more useful in the SMB2 group, because "The Lakutus are throwing Lakitus!" in the SMBX - is a secret tab that needs a lot of actions to open. Even in the Moondust Editor same "tab" is a non-secret "group". To place "burred" items, we should select the "herb" item and set its content before we will place them or you can set contents to already placed items by editing its properties. In the Moondust Project secrets are absent - all Free and Open Source!

If we will pick up any NPC from the "Containers" category and they will be placed on the map with empty contents:

<ImageZoom
alt="001_placed_containers"
url="screenshots/LevelEditing/Items/NPC-Container/001_placed_containers.png"
width="200px"
:border="true"
/>

But how to place them with contents?

For already placed containers we can select alone or a group of NPC-Containers
and open the "Properties" item of the context menu:

<ImageZoom
alt="002_Open_props"
url="screenshots/LevelEditing/Items/NPC-Container/002_Open_props.png"
width="200px"
:border="true"
/>

Now we should click to the **\[empty\]** button to select target NPC as "content"
of this container(s):

<ImageZoom
alt="003_choice_included"
url="screenshots/LevelEditing/Items/NPC-Container/003_choice_included.png"
width="200px"
:border="true"
/>

Here you can select the necessary NPC which will be included in our container(s):

<ImageZoom
alt="004_select_contain"
url="screenshots/LevelEditing/Items/NPC-Container/004_select_contain.png"
width="200px"
:border="true"
/>

Done, now the Bubble has the gold key as content:

<ImageZoom
alt="005_NPC_included"
url="screenshots/LevelEditing/Items/NPC-Container/005_NPC_included.png"
width="200px"
:border="true"
/>

Same operations to set Butterfly's bullets:

<ImageZoom
alt="008_lakitu_with_contains"
url="screenshots/LevelEditing/Items/NPC-Container/008_lakitu_with_contains.png"
width="200px"
:border="true"
/>

And same to set the content of egg:

<ImageZoom
alt="009_egg"
url="screenshots/LevelEditing/Items/NPC-Container/009_egg.png"
width="200px"
:border="true"
/>

But how to place the container with already included content?

**1)** Take necessary NPC from the item toolbox:<br/>
<ImageZoom
alt="006_placing_container"
url="screenshots/LevelEditing/Items/NPC-Container/006_placing_container.png"
width="200px"
:border="true"
/>

**2)** Set in the opened Properties window contents of NPC and after place them
to the map:
<ImageZoom
alt="007_herb_with_contains"
url="screenshots/LevelEditing/Items/NPC-Container/007_herb_with_contains.png"
width="200px"
:border="true"
/>

### Generators

Generator flag in the Properties dialog will make generator (or re-spawning
point) of selected NPC

<ImageZoom
alt="Props_NPC_generator"
url="screenshots/LevelEditing/Items/Props_NPC_generator.png"
width="200px"
:border="true"
/>

* **NPC** will be appeared every time delay by two methods: warp and projectile.
* **Warp** - NPC will appear smoothy and will start its regular movement on appearance.
* **Projectile** - NPC will be sharply shooted from the generator.


In SMBX Editor generators haven't markers. In Moondust Editor each generator have
their own marker as generator direction arrow:


_Generator types_

<ImageZoom
alt="Generator_types"
url="screenshots/LevelEditing/Items/NPC-Generator/Generator_types.png"
width="200px"
:border="true"
/>

_Generators in action_

<ImageZoom
alt="Generators_in_action"
url="screenshots/LevelEditing/Items/NPC-Generator/Generators_in_action.png"
width="200px"
:border="true"
/>


## Warps

**Warps** - are special units that giving to the player ability to teleport
from the first warp point (Entrance) to the second (Exit). The player can teleport between different places of a single section, but also the player can teleport between different sections. This is one way to enter another section, but exclusion is some NPCs that can spawn a warp to another section.

_Warps and Doors toolbox_

<ImageZoom
alt="001_warpList"
url="screenshots/LevelEditing/Warps/001_warpList.png"
width="200px"
:border="true"
/>

All warp entries are shown in the special list:

In the SMBX all warps entries are hidden, and you can't see them. 
In the Moondust Editor is possible to get a full list of warps:

<ImageZoom
alt="LevelGlobalWarpList"
url="screenshots/LevelEditing/Warps/LevelGlobalWarpList.png"
width="200px"
:border="true"
/>

_Context menu of warp point_

<ImageZoom
alt="WarpContextMenu"
url="screenshots/LevelEditing/Warps/WarpContextMenu.png"
width="200px"
:border="true"
/>

### Properties

**Warps have next flags:**

* **No Vehicles** - (In SMBX this option was named as "No Yoshi") When a playable character will enter into this warp, he/she will exit without a vehicle (Vehicle will be returned when a player will exit from this level).
* **Allow items** - (In SMBX this option was named as "Allow NPC") With this flag playable character can get the carried item through this warp. Without this flag, items will be automatically dropped at the entrance of this warp.
* **Locked** - This flag will close the door with a lock. To open this warp player should take a key. When the key was applied, the warp will be opened for entering.
* **Need a bomb** - This flag will close the door with a lock. To open this warp need to explode lock with any explosive projectile, bomb, etc. When an explosion happens around, a warp will be opened for entering.
* **Special state only** - This flag will disallow entering of players in any states except one special (which defined in the configuration)
* **Two-way warp** - Allows players entering into this warp from both sides.
* **Needs floor** - Player will be able to enter this warp when they are standing on a floor.

**Special flags**

* **Level entrance** - this option allows to use a single point. With this flag impossible to enter into this warp, this warp can be used just for entrance into this level, for example, from a world map or another level with the definition of target warp ID.
* **Level exit** - this option allows to use a single point. When the playable character enters into this warp, level exiting will be caused.

**Values and options**

Stars lock. Stars - are a collectible conventional units which are identifies entrance permissions to specific warps / rooms / sections / levels. There are can be used to make games more interested in a quest to find those units. In various games, stars are has a different name. For example, in the A2XT game,
there are leeks.

* **Stars needed** - This is a limit of star number. The player can enter into this warp when he/she collect a defined number of stars.
* **Need a stars message** - Show this message in an attempt to enter into this warp without a necessary number of stars.
* **Don't show stars number** - if this warp follows to another level, several stars on the target level are will not be shown.
* **X** and **Y** - This is an exit to the world map with target coordinates. If coordinates are defined, this warp will be an exit into the world map with teleporting to the target point by coordinates.
* **Warp type** - Definition of the warp type: Instant, Pipe, Door, or Portal.
* **Transition effect** - Definition of the transition effects: None, Scroll, Fade, Circle fade, Flip horizontal, and Flip vertical.
* **Pipe directions** - This is a direction of the warp, which can be used for "pipe" warp type only.
* **Warp type** - Definition of the warp type: Instant, Pipe, or Door.
* **Pipe directions** - This is a direction of the warp, which can be used for "pipe" warp type only.
* **Cannon shoot exit** - Allows the player to fly out of the other end of the pipe, simulating a cannon shot.
* **Level file name** - This is a definition of the entrance into another level file to make a warp into them.
* **Door #** - (In the SMBX this option was named as "Warp to"). If the value is 0 (Normal entrance) player will start the target level from his(her) default start point, else the player will enter into level by target warp point by ID.

<Note type="tip">
Note: If you were removed some warp entry (entries), to re-count warp IDs you should reload level (press F8 key)!
</Note> 


### Warp types

The warps have three types: Instant, Pipe, Door, and Portal **(which is not available in SMBX 1.3)**.

<ImageZoom
alt="006_WarpTypes"
url="screenshots/LevelEditing/Warps/006_WarpTypes.png"
width="200px"
:border="true"
/>

**Instant or Portal** - Player will immediately teleport once they touch the warp entrance point. The difference between "Instant" and "Portal" types:
* The "Instant" warp resets the X speed after teleport.
* The "Portal" warp keeps the same motion/flying speed after teleport.

<ImageZoom
alt="008_Instants"
url="screenshots/LevelEditing/Warps/008_Instants.png"
width="200px"
:border="true"
/>

**Door** - The player can enter into this warp only when it is contacted with the entrance point and when a player will press the UP key.

<ImageZoom
alt="007_Doors"
url="screenshots/LevelEditing/Warps/007_Doors.png"
width="200px"
:border="true"
/>


**Pipe** - this is a directional warp. To enter into this warp player need to contact the entrance warp point and press the key equal to the defined direction. The player will be exited from the exit point with a defined exit direction.

<ImageZoom
alt="009_Pipes1"
url="screenshots/LevelEditing/Warps/009_Pipes1.png"
width="200px"
:border="true"
/><ImageZoom
alt="011_Pipes3"
url="screenshots/LevelEditing/Warps/011_Pipes3.png"
width="200px"
:border="true"
/><ImageZoom
alt="010_Pipes2"
url="screenshots/LevelEditing/Warps/010_Pipes2.png"
width="200px"
:border="true"
/>


### Transition effects
<Note type="warning">
This feature is available for <strong>SMBX-38A</strong> and <strong>TheXTech</strong> only
</Note>

This option allows to set one of different transition effects which will be performed when player enters a warp.

<Note type="tip">
If you click the combo-box by a Right Mouse Button (Left if you are lefty), you can open the context menu and choose the "Apply to all" action to quickly make all warps on the level to use the same transition effect as currently selected.
</Note>

**None** - The screen will be changed immediately without any transition effects (except for a very short fade happen between level sections).

_None transition effect in action:_<br/>
<ImageZoom
alt="transit_01-none"
url="screenshots/LevelEditing/Warps/transit_01-none.gif"
width="200px"
:border="true"
/>

**Scroll** - The screen will smoothly move between the entrance to exit points. Has no effect when going between different sections.

_Scroll transition effect in action:_<br/>
<ImageZoom
alt="transit_02_scroll"
url="screenshots/LevelEditing/Warps/transit_02_scroll.gif"
width="200px"
:border="true"
/>

**Fade** - The screen will smoothly go into darkness, and then go from it.

_Fade transition effect in action:_<br/>
<ImageZoom
alt="transit_03_fade"
url="screenshots/LevelEditing/Warps/transit_03_fade.gif"
width="200px"
:border="true"
/>

**Circle fade** - The screen will smoothly go into darkness through a black circular overlay, and then go from it.

_Circle fade transition effect in action:_<br/>
<ImageZoom
alt="transit_04_circle"
url="screenshots/LevelEditing/Warps/transit_04_circle.gif"
width="200px"
:border="true"
/>

**Flip horizontal** - The screen will smoothly go into darkness through two black rectangular overlays closing the screen at the top and bottom sides, and then go from it.

_Flip hotizontal fade transition effect in action:_<br/>
<ImageZoom
alt="transit_05_fliph"
url="screenshots/LevelEditing/Warps/transit_05_fliph.gif"
width="200px"
:border="true"
/>

**Flip vertical** - The screen will smoothly go into darkness through two black rectangular overlays closing the screen at the left and right sides, and then go from it.

_Flip vertical fade transition effect in action:_<br/>
<ImageZoom
alt="transit_06_flipv"
url="screenshots/LevelEditing/Warps/transit_06_flipv.gif"
width="200px"
:border="true"
/>




### Create the warp entry

Each warp has its entry. At first, you need to add a new warp entry into the list:

![002_addWarp](screenshots/LevelEditing/Warps/002_addWarp.png)

Or you can make a duplicated copy of the current warp entry with all settings but entrance and exit points placements:

![002_dupeWarp](screenshots/LevelEditing/Warps/002_dupeWarp.png)

And now, you can place points (or you can define warp options before).

To place an entrance or exit point, you should press the "Set Entrance" to place or jump to, if already placed, the entrance point

<ImageZoom
alt="003_setEntrance"
url="screenshots/LevelEditing/Warps/003_setEntrance.png"
width="200px"
:border="true"
/>

and "Set Exit" to place or jump to, if already placed, exit point.

<ImageZoom
alt="004_setExit"
url="screenshots/LevelEditing/Warps/004_setExit.png"
width="200px"
:border="true"
/>

<Note type="tip">
If the grayed checkbox at the left side of the button is set, that means the entrance/exit point has already been placed. The press on the button will result in the camera jump to the location of the placed point.
</Note>

_Placing of the Exit warp point to the map_

<ImageZoom
alt="005_setExit"
url="screenshots/LevelEditing/Warps/005_setExit.png"
width="200px"
:border="true"
/>


<Note type="warning">
Don't forget to set up warp settings!
</Note>

<Note type="tip">
Note: the warp entry must have both placed points or warp entry will
be marked as broken and will not be saved into the file.
Exclusion: You can have single-point warp entries when they are have
one of those flags: "Level Exit" or "Level entrance".
</Note>


### Two-way warp

This is a warp entry that allows player to go through it at both sides. To make two-way warps just use a "Two-side warp" check box, and the player will be able to enter this warp from both sides.

<Note type="warning">
Legacy SMBX Engine and 38A older than 1.4.3 doesn't support that. If you targeting your levels to the legacy engines, you should make a second warp entry with opposite point placements:
</Note>

<ImageZoom
alt="012_two-way_doors"
url="screenshots/LevelEditing/Warps/012_two-way_doors.png"
width="200px"
:border="true"
/>


### Locked warp

Locked warp - is a warp with a closed entrance which possible to open with a key:

![018_locked_door](screenshots/LevelEditing/Warps/018_locked_door.png)

To make a locked door, you need to set the "Locked" flag into the 'checked' state:

<ImageZoom
alt="019_Locked_door"
url="screenshots/LevelEditing/Warps/019_Locked_door.png"
width="200px"
:border="true"
/>

### Star limited warp

To enter into this warp you must have a specified number of stars!

_Locked door_

<ImageZoom
alt="020_Stared_door"
url="screenshots/LevelEditing/Warps/020_Stared_door.png"
width="200px"
:border="true"
/>


To lock warp entrance with stars, you must set the count of stars value, needed for the ability to enter into this warp:

<ImageZoom
alt="021_Stared_door"
url="screenshots/LevelEditing/Warps/021_Stared_door.png"
width="200px"
:border="true"
/>


### Level entrance and exit

There are special flags that allowing to place alone warp point.

**Level entrance** - allows placing alone exit point. Set this flag if you wish to use this warp as an entrance into this level. With this flag, the warp will have no entrance point.

<ImageZoom
alt="014_entrance_to_level"
url="screenshots/LevelEditing/Warps/014_entrance_to_level.png"
width="200px"
:border="true"
/>

**Level Exit** - allows placing alone entrance point. The level will be exited
when a player will enter into this warp.

<ImageZoom
alt="013_Exit_from_level"
url="screenshots/LevelEditing/Warps/013_Exit_from_level.png"
width="200px"
:border="true"
/>


### Warp to another level


The player will be entered into another level if he(she) enter into this warp.

You should simply define the level filename in the Level file field. You also can browse the level file and select the necessary file from the list

![016_target_warp_ID](screenshots/LevelEditing/Warps/016_target_warp_ID.png)

The number of the door will show: where the player must be entered. If the value is a zero - the player will start the level from his(her) default start point.

_Level file list of the same folder which contains editing level file_

<ImageZoom
alt="015_warp_to_another_level"
url="screenshots/LevelEditing/Warps/015_warp_to_another_level.png"
width="200px"
:border="true"
/>


### Warp to the world map

You also can create the exit to specified coordinates of the world map. You need to simply define the world map coordinates to make the exit point into the world map:

You also can press the "Set" button and select a target point on the world map in interactive mode!

![017_World_map_coordinates](screenshots/LevelEditing/Warps/017_World_map_coordinates.png)

_World map point selection dialog_

<ImageZoom
alt="GotoWorldMap"
url="screenshots/WorldEditing/GotoWorldMap.png"
width="200px"
:border="true"
/>


## Physical environments
**Physical environments** (Water, Quicksand, etc.) - there are a special
units that defining the physical environment inside of their rectangular area.

**Available environment types:**
* **Water** - a swimmable liquid environment.
* **Quicksand** - is a loose substance environment. Everything stuck inside it with a low ability to jump. To escape from it, need to apply any effort to jump.
* **Gravitational field** - **\[WIP\]** neutral environment (which keeps global environment or environment of other environment rectangles) which slows or redirects a gravitation coefficient.
* **Touch event (Once)** - **\[WIP\]** neutral environment which once triggers a specific event when the playable character touches this environment.
* **Touch event (Every frame)** - **\[WIP\]** neutral environment which triggers event every game loop while playable character keeps contact with this environments.
* **NPC Touch event (Once)** - **\[WIP\]** neutral environment which once triggers a specific event when any NPC touches this environment.
* **NPC Touch event (Every frame)** - **\[WIP\]** neutral environment which triggers event every game loop while any NPC keeps contact with this environments.
* **Mouse click event** - **\[WIP\]** neutral environment that triggers an event when a player will click it with a mouse pointer.
* **Collision script** - **\[WIP\]**
* **Mouse click script** - **\[WIP\]** neutral environment which executes a script function when a player will click it with a mouse pointer.
* **Collision event** - **\[WIP\]**
* **Air chamber** - Air environment which overrides other physical environments with air environment.

<Note type="warning">
Important: Legacy SMBX Engine, TheXTech, and SMBX2 has the support for only two types of physical environments: Water and Quicksand. SMBX 1.3 and SMBX2 doesn't support other physical environment types. Only Moondust Engine and SMBX-38A.
</Note>

Because the Physical environment zone is a sizable element, the placing process is going by rectangle drawing. To place them, you need to select on toolbar one of two icons:

![DW](screenshots/LevelEditing/Physics/draw_water.png) ![DQ](screenshots/LevelEditing/Physics/draw_sand.png)

<span style="color: blue;">Blue</span> - draw water zone,
<span style="color: #fde910;">Yellow</span> - draw quicksand zone.

Placed physical environment rectangles: Green - water, Yellow - quicksand

<ImageZoom
alt="05_paced_areas"
url="screenshots/LevelEditing/Physics/05_paced_areas.png"
width="200px"
:border="true"
/>

You can change the environment type of the placed rectangle by a context menu:

<ImageZoom
alt="06_change_type"
url="screenshots/LevelEditing/Physics/06_change_type.png"
width="200px"
:border="true"
/>


Also, you can easily resize an environment rectangle:

To start resizing, you should open the "Resize" context menu item and you will see a yellow rectangle which a "sizer". Move corner dots or sides to define the new size of the block. When you are done resizing press the ENTER key to accept the new size, and then the block will have a new size. If you will press the ESC key you will cancel resizing and the block will keep it's current it's size.

<Note type="tip">
Note: If you wish to get more features of resizer box (green net which defined
new size of the section), click inside of them by right mouse button.
</Note> 

**The context menu has actions**
* **Cut top here** - moves the top boundary of the box to the current mouse position
* **Cut left here** - moves left boundary of the box to the current mouse position
* **Cut right here** - moves the right boundary of the box to the current mouse position
* **Cut bottom here** - moves the bottom boundary of the box to the current mouse position
* **Don't snap to grid** - disables grid snapping on moving of box boundaries
* **Disable minimal size limit** - gives the ability to set size less than minimally available size

<ImageZoom
alt="PhysEnvResizing"
url="screenshots/LevelEditing/Physics/PhysEnvResizing.png"
width="200px"
:border="true"
/>

## Player points

This is a point that defines an initial position of a playable character on the level. Every time you starting a level, the playable character will appear at this point.

To place a player point, you need to click one of the toolbar buttons (![P1](screenshots/LevelEditing/players/player1_start.png) or ![P2](screenshots/LevelEditing/players/player2_start.png)): where is red - it's for a 1'st player and the green for 2'nd.

In the editor start points will be shown as flags (They are may look different with a dependence on a currently used UI theme):

![PlayerPoints](screenshots/LevelEditing/Items/Player_startPoints_2.png)

If points will not be defined, the level will automatically end, because it hasn't available playable characters on the level. Also, you can use doors as the player's start points, but you need to define the array index of this door in the world map or on another level.
