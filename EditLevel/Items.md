# Level Items

**Items** - main content and part of any levels. There are a construction
material, sceneries, items, characters, etc.


<u>**Avalilable item types:**</u>
* [Blocks](#Blocks)
* [Background objects](#BGO)
* [Non-playable characters](#NPC)
* [Warp/Door points](#Warps)
* [Physical environments (Known in SMBX as Water/Quicksand)](#physical-environments)
* [Player's start points](#Player-points)


## Blocks

**Blocks** - the a solid objects which are tiles with his shape and size.
The main construction material of which level consists. The majority of
blocks interacts from players on whom it can stand about which the player
can hit which can be a limiting wall. There are blocks the touch to which
hurt to the game character, and some are capable to kill instantly not only
it, but also to destroy other objects which have touched them. There are
special blocks with own algorithm of interaction with the player.
For example: switch, switching wall, what changing his state from lock to
unlock and back; switches between player characters and character limit
blocks, what allows walk throught them only for one of characters, for
other characters theese blocks working as normal, etc. As there is a
special type of blocks which can have any size. This is a Sizable blocks.

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

* **Invisible** - The block will be invisible and will appear only on hit it. This flag useful for place some secret bonuses or make one way holes.
* **Slippery** - The block's top surface will be slippery.
* **Contained NPC** - NPC which will appear from block when player hit it.
Block can contain the some number of coins, or one of NPC.

* **Layer** - here was defined the layer which is owner of this block.
All items at first are a members of the "Default" layer.

**Each block have the event slots:**

* **Destroyed** - this slot activating if block was be breaked, crashed, destroyed, etc.
* **Hit** - This slot activating if blocks was be hit, kicked, beated from side or bottom.
* **Layer is empty** - (In SMBX this slot was  called as "<u>No more objects in layer</u>")
this slot activating when was activated the "destroyed" slot and when layer which
owner of this block is haven't other objects.

_Block Properties toolbox_

<ImageZoom 
  alt="Props_Block"
  url="screenshots/LevelEditing/Items/Props_Block.png"
  width="200px" 
  :border="true" 
/>

### Sizable blocks

This is a special block type which can have any sizes. Unlike standard blocks,
this block placing by rectangle drawing and it's size is defining by size of
rectangle when you release mouse key:

_Drawing of sizable blocks_

<ImageZoom 
  alt="DrawSizableBlock"
  url="screenshots/LevelEditing/Items/DrawSizableBlock.png"
  width="200px"
  :border="true" 
/>



This blocks can be resized. Unlike standard blocks, these blocks displaying
in the low background layer and displaying always under BGO (but some BGO in
the exception can be shown under sizable blocks).

To start resizing, you should open the "Resize" context menu item and you
will see a blue rectangle which a "sizer". Move corner dots or sides to
define new size of block. When you done resizing press the ENTER key to
accept new size, and then block will have a new size. If you will press
the ESC key you will cancel resizing and block will keep current it's size.

<p class="tip">
    Note: If you wish to get more features of resizer box (green net which
    defined new size of section), click inside of them by right mouse button.
</p>

The context menu has actions:

* **Cut top here** - moves top boundary of box to current mouse position
* **Cut left here** - moves left boundary of box to current mouse position
* **Cut right here** - moves right boundary of box to current mouse position
* **Cut bottom here** - moves bottom boundary of box to current mouse position
* **Don't snap to grid** - disables grid snapping on moving of box boundaries
* **Disable minimal size limit** - gives ability to set size less than minimally available size

_Resizing of sisable blocks_

<ImageZoom 
  alt="ResizeBlock2"
  url="screenshots/LevelEditing/Items/ResizeBlock2.png"
  width="200px"
  :border="true" 
/>





## BGO

**Background objects** - is a sceneries. But some BGO can have special features:
platform movement paths, will define movement paths for moting "platforms",
reverser, what will revert platform's speed back. Some BGO allows to clibmb
on them. BGO can be background and foreground. Foreground BGO placing over all
other level items.

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

Each BGO now have only two options:

* **Layer** - here defined the layer, what is owner of this BGO. All items at first are a members of "Default" layer.

* **Z-Layer** - defining the displaying priority: over or under other items.
(Avaialbe only for LVLX format)
* **Z-Offset** - Is a helpful value which allow to order BGO's which
displaying over/under each other. (Avaialbe only for LVLX format)

* **Sorting priority** - The special option using only for SMBX LVL file format
saving process as workaround, but not save into them.

This option can be used only as hack of SMBX to force display background BGO as
foreground. This option don't defining Z-value, which a real foreground/background
position index. This option defining the sequence of array items for BGO in file.

_BGO Properties toolbox_

<ImageZoom 
  alt="BGO_Context"
  url="screenshots/LevelEditing/Items/Props_BGO.png" 
  :border="true" 
/>



### Hack: Z-Order in SMBX

Legacy SMBX Engine doesn't supports customization of Z-order natively. However,
it's possible with a workaround. This working ONLY if you saving into SMBX file
format. And will not saving in them. Aftter reopen same file you need to
define this value again.


1) All data, include BGOs, in files written in defined sequence: 

![Pseudo-foregroundBGO-1](screenshots/LevelEditing/Items/bgo_hack/Pseudo-foregroundBGO-1.png)

2) When we using the sort priority value, we will tell to BGO's place in the
begin, middle or in the end of array:

![Pseudo-foregroundBGO-2](screenshots/LevelEditing/Items/bgo_hack/Pseudo-foregroundBGO-2.png)

SMBX render algorithm displaying BGOs by special groups - layers, and BGO order
is very important for this case. So, if we are will do a change of the order,
we are will let a first BGO, which marked as "Foreground", to made all next
BGOs to be foreground too, even if there are hasn't a "foreground" flag.
Knowing this thing is possible to force display any background BGOs as foreground.

3) To allow this feature work, you must to place to the map any of
true "Foreground" BGO in the any position (if your level has no those BGO's,
place one of them out of section to get it on the level space). This trick
requires a one of foreground BGO under our BGO's which we are want to make
foreground too.

<ImageZoom 
  alt="001_bgo_hack"
  url="screenshots/LevelEditing/Items/bgo_hack/_001_bgo_hack.png"
  width="200px" 
  :border="true" 
/>


<p class="warning">
    Don't forget, that if you saving file into SMBX1...64 LVL format, on
    next open of this file you must to redefine the sorting priority value
    again, because in doesn't saving into SMBX level file. Backup saved into
    LVLX file format is suggested.
</p>


**Result of BGO hack in action**
__(bush in the right drawn over playable characters)__

<ImageZoom 
  alt="Foreground_BGO"
  url="screenshots/LevelEditing/Items/bgo_hack/Pseudo-Foreground_BGO.png"
  width="200px"
  :border="true"
/>


## NPC
**Non-playable characters** - is a main game unit which building the game
process: there are enemies, friends, items, power-ups, sceneries, etc.
Each NPC have it's algorithm, and can be programmed.

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

Each NPC have switches and flags:

* Default direction - NPC will start it's movement with defined direction. Direction option can have other name and values, for example, name "Activation state" and values "On"/"Off", etc. Dependent to the algorithm and global settings.
* Friendly - NPC won't communicate with playable chatacters and with other NPC's. Friendly NPC's can'e be killed, can't hurt player, can't be taken or grabbed. Playable characters and other NPC's can't stay on top of the friendly NPCs.
* Not movable - NPC will be idle irrespective of its algorithm.
* Set as boss - (inside of SMBX this option calling as "Legacy Boss") This is a special flag which automatically enable special events for some bosses which supports them. For example: if NPC have the activated "Boss" flag, will be changed background music to the boss's own theme and when boss will be defeat, will be spawned a special bonus item or game will be completed.
* Talk message - The message which will be displayed when player will try to talk with this NPC. After displaying of this message will be activated event slot.
* Generator - Making NPC generator. From the one point will be spawned new NPC's every each defined time delay.
  * Generator type - Warp - NPC will be smoothly warped. Projectile - NPC will be appeared by sharply shoot.
  * Generator direction - defining the direction of spawn of NPC

_Message box editing_

<ImageZoom 
  alt="MessageBox"
  url="screenshots/LevelEditing/MessageBox.png"
  width="200px" 
  :border="true" 
/>

<p class="tip">
    Note: Don't forget: all new-line characters will not work correctly 
    with SMBX Engine (but will work in Moondust Engine natively).
    As workaround for SMBX Engine, use the extra-spaces to cause a words wrap.
</p>


Some NPCs can have a special values:

* **Contents** - this option have an ID of other NPC which included into this NPC. Available for NPCs which marker as "containers".
* **Spin box with numeric value** - Some NPCs can have the numeric special value, for example, position of firebar segment.
* **Special combo-box** - some NPCs can have switchable algorithms which cab set individual NPCs algorithm from the list.

* **Layer** - here is defined the layer which is an owner of this NPC. All items at first are a members of the "Default" layer.
* **Attach layer** - This is a special option: all membered statical items of attached layer will move together with this NPC.


Each NPC have the event slots:

* **Activate** - This slot activating then NPC will appear on the player's visible zone.
* **Death** - This slot activating then NPC will be defeat, destroyed, kicked or taked (coins, power-ups, etc).
* **Talk** - This slot activating them player was talked with this NPC.
* **Layer is empty** - (In SMBX this option named as "No more objects in layer") this slot activating when activated the "Death" slot and when on the same layer which is an owner if this NPC no more another objects.


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

Everyone who worked with Legacy SMBX Engine, know the "Egg", "Buried", "Bubble"
and "Lakuti" flags. These flags packing selected item into the special NPC
which calling as Container. Container can have included into them NPC's which
can be extracted when container will be destroyed, or will be spawned by
container before it will destroyed.

In the SMBX we are pressing the "Bubble=Yes" or "Buried=Yes" to place "Packed
into the herb" or "Packet into the bubble" NPC.

In PGE-Editor you can edit Containers. And therefore, for example, Herb will be
more useful in the SMB2 group, because "The Lakutus are throwing Lakitus!" in
the SMBX - is a secret tab which need for a lot of actions to open them. Even
in the PGE-Editor same "tab" is a non-secret "group". To place "burred" items,
we should select "herb" item and set its content before we will place them or
you can set contents to already placed items by editing it's properties. In
the PGE secrets are absence - all Free and Open Source!

If we will pick up any NPC from the "Containers" cathegory and they will be
placed to the map with empty contents:

<ImageZoom
  alt="001_placed_containers"
  url="screenshots/LevelEditing/Items/NPC-Container/001_placed_containers.png"
  width="200px"
  :border="true"
/>

But how to place them with contents?

For already placed containers we can select alone or a group of NPC-Containers
and open "Properties" item of context menu:

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

Here you can select necessary NPC which will be included into our container(s):

<ImageZoom
  alt="004_select_contain"
  url="screenshots/LevelEditing/Items/NPC-Container/004_select_contain.png"
  width="200px"
  :border="true"
/>

Done, now Bubble have gold key as content:

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

And same to set content of egg:

<ImageZoom
  alt="009_egg"
  url="screenshots/LevelEditing/Items/NPC-Container/009_egg.png"
  width="200px"
  :border="true"
/>

But how to place container with already included content?

1) Take necessary NPC from the item toolbox:<br/>
<ImageZoom
  alt="006_placing_container"
  url="screenshots/LevelEditing/Items/NPC-Container/006_placing_container.png"
  width="200px"
  :border="true"
/>

2) Set in the opened Properties window contents of NPC and after place them
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
* **Warp** - NPC will appear smoothy and will start it's regular movement on appear.
* **Projectile** - NPC will be sharply shooted from the generator.


In SMBX Editor generators haven't markers. In PGE Editor each generator have
his marker as generator direction arrow:


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

**Warps** - are a special units which giving to player ability to teleport
from first warp point (Entrance) to second (Exit). Player can teleport
between difference places of single section, but also player can teleport
between different sections. This is a one way for enter to another section,
but exclusion is some NPCs which can spawn a warp to another section.

_Warps and Doors toolbox_

<ImageZoom
  alt="001_warpList"
  url="screenshots/LevelEditing/Warps/001_warpList.png"
  width="200px"
  :border="true"
/>

All warp entries shown in the special list:

In the SMBX all warps entries are hidden and you can't see them. In the
PGE-Editor is possible to get full list of warps:

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

**Warps have a standard flags**

* **No Vehicles** - (In SMBX this option was named as "No Yoshi") When playable character will enter into this warp, he/she will exit without vehicle (Vehicle will be returned back when player will exit from this level).
* **Allow items** - (In SMBX this option was named as "Allow NPC") With this flag playable character can get carryed item through this warp. Without this flags item will be leaven about entrance of this warp.
* **Locked** - This flag will close door with a lock. To open this warp player should take a key. When key was applied, warp will be opened for entering.
* **Need a bomb** - This flag will close door with a lock. To open this warp need to explode lock with any explosive projectile, bomb, etc. When explosion happen arround, warp will be opened for entering.
* **Special state only** - This flag will disallow entering of players in any states excpept one special (which defined in the configuration)
* **Two-way warp** - Allows player entering into this warp from both sides.

**Special flags**

* **Level entrance** - this option allows to use alone point. With this flag impossible to enter in this warp, this warp can be used just for entrance into this level, for example, from world map or from another level with definition of target warp ID.
* **Level exit** - this option allows to use alone point. When playable character enter into this warp, level exiting will be caused.

**Values and options**

Stars lock. Stars - are a collectable conventional units which are identifies
entrance permissions to specific warps / rooms / sections / levels. There are
can be used to make games be more interested with a quest to find those units.
In various games stars are has different name. For example, in the A2XT game,
there are leeks.

* **Stars needed** - This is a limit of star number. Player can enter into this
warp when he/she collect a definied number of stars.
* **Need a stars message** - Show this message on attempt to enter into this
warp without necessary number of stars.
* **Don't show stars number** - if this warp follows to another level, number
of stars on target level are will not be shown.
* **X** and **Y** - This is an exit to world map with target coordinates. If
coordinates are defined, this warp will be an exit into the world map with
teleporting to target point by coordinates.

* **Warp type** - Definition of the warp type: Instant, Pipe or Door.
* **Pipe directions** - This is a directions of warp, which can be used for
"pipe" warp type only.

* **Warp type** - Definition of the warp type: Instant, Pipe or Door.
* **Pipe directions** - This is a directions of warp, which can be used for
"pipe" warp type only.

* **Level file name** - This is a definition of the entrance into another
level file to make a warp into them.
* **Door #** - (In the SMBX this option was named as "Warp to"). If value
is 0 (Normal entrance) player will start target level from his(her) default
start point, else player will entered into level by target warp point by ID.

<p class="tip">
    Note: If you was removed some warp entry(ies), to re-count warp ID's you
    should reload level (press F8 key)!
</p> 


### Warp types

The warps have a three types: Instant, Pipe, Door and Portal **(which is not
available in SMBX 1.3)**.

<ImageZoom
  alt="006_WarpTypes"
  url="screenshots/LevelEditing/Warps/006_WarpTypes.png"
  width="200px"
  :border="true"
/>

**Instant or Portal** - Player will be instantly teleported on any contact
with entrance warp point. Different between Instant and Portal is that
Instant zeroes X speed after teleport, but when player entered into the
Portal, player keeps same motion/flying speed.

<ImageZoom
  alt="008_Instants"
  url="screenshots/LevelEditing/Warps/008_Instants.png"
  width="200px"
  :border="true"
/>

**Door** - Player can enter into this warp only when it contacted with
entrance point and when player will press up key.

<ImageZoom
  alt="007_Doors"
  url="screenshots/LevelEditing/Warps/007_Doors.png"
  width="200px"
  :border="true"
/>


**Pipe** - this is a directional warp. To enter into this warp player need
to contact with entrance warp point and press the key equal to defined
direction. Player will be exited from exit point with defined exit direction.

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

### Create the warp entry

Each warp have an own entry. At first you need to add a new warp entry
into the list:

![002_addWarp](screenshots/LevelEditing/Warps/002_addWarp.png)

And now, you can place points (or you can define warp options before).

To place entrance or exit point, you should to press the "Set Entrance"
to place or jump to, if already placed, entrance point

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

<p class="tip">
    Note: If adjacent checbox is checked - this point is already placed,
    and you will jump to placed point when you press a point button.
</p>

_Placing of the Exit warp point to the map_

<ImageZoom
  alt="005_setExit"
  url="screenshots/LevelEditing/Warps/005_setExit.png"
  width="200px"
  :border="true"
/>


<p class="warning">
    Don't forget to set up warp settings!
</p>

<p class="tip">
    Note: the warp entry must have both placed points or warp entry will
    be marked as broken and will not be saved into the file.
    Exclusion: You can have single-point warp entries when they are have
    one of those flags: "Level Exit" or "Level entrance".
</p>


### Two-way warp

To make a two-way warps just use a "Two-side warp" check box, and player
will be able enter to this warp from both sides. However Legacy
SMBX Engine (both official and 38A (older than 1.4.3) released) doesn't
supports that, and if you making levels to play on it, you should to
make a second warp entry with opposite point placements:

<ImageZoom
  alt="012_two-way_doors"
  url="screenshots/LevelEditing/Warps/012_two-way_doors.png"
  width="200px"
  :border="true"
/>


### Locked warp

Locked warp - is a warp with closed entrance which possible to open with a key:

![018_locked_door](screenshots/LevelEditing/Warps/018_locked_door.png)

To make a locked door, you need to set the "Locked" flag into the 'checked' state:

<ImageZoom
  alt="019_Locked_door"
  url="screenshots/LevelEditing/Warps/019_Locked_door.png"
  width="200px"
  :border="true"
/>

### Star limited warp

To enter into this warp you must have a specified number of the stars!

_Locked door_

<ImageZoom
  alt="020_Stared_door"
  url="screenshots/LevelEditing/Warps/020_Stared_door.png"
  width="200px"
  :border="true"
/>


To lock warp entrance with stars, you must set a number of stars which
needed for ability to enter into this warp:

<ImageZoom
  alt="021_Stared_door"
  url="screenshots/LevelEditing/Warps/021_Stared_door.png"
  width="200px"
  :border="true"
/>


### Level entrance and exit

There are a special flags which allowing to place alone warp point.

**Level entrance** - allows to place alone exit point. Set this flag if you
wish to use this warp as entrance into this level. With this flag warp will
have no entrance point.

<ImageZoom
  alt="014_entrance_to_level"
  url="screenshots/LevelEditing/Warps/014_entrance_to_level.png"
  width="200px"
  :border="true"
/>

**Level Exit** - allows to place alone entrance point. The level will be exited
when player will enter into this warp.

<ImageZoom
  alt="013_Exit_from_level"
  url="screenshots/LevelEditing/Warps/013_Exit_from_level.png"
  width="200px"
  :border="true"
/>


### Warp to another level


Player will be entered into another level if he(she) enter into this warp.

You should simply define the level filename in the Level file field. You also
can browse the level file and select necessary file from list

![016_target_warp_ID](screenshots/LevelEditing/Warps/016_target_warp_ID.png)

The number of door will show: where player must be entered. If value is a
zero - player will start level from his(her) default start point.

_Level file list of same folder which contains editing level file_

<ImageZoom
  alt="015_warp_to_another_level"
  url="screenshots/LevelEditing/Warps/015_warp_to_another_level.png"
  width="200px"
  :border="true"
/>

    
### Warp to world map

You also can create the exit to specified coordinates of the world map.
You need to simply define the world map coordinates to make exit into
the world map:

You also can press the "Set" button and select target point on the world
map in interactive mode!

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
* **Qucksand** - is a loose substance environment. Everything stucks inside it
with low ability to jump. To escape from it, need to apply many effort to jump.
* **Gravitational field** - **\[WIP\]** neutral environment (which keeps global
environment or environment of other environment rectangles) which slows or
redirects a gravitation coefficient.
* **Touch event (Once)** - **\[WIP\]** neutral environment which once triggers
specific event when playable character touches this environment.
* **Touch event (Every frame)** - **\[WIP\]** neutral environment which triggers
event every game loop while playable character keeps a contact with this
environments.
* **NPC Touch event (Once)** - **\[WIP\]** neutral environment which once
triggers specific event when any NPC touches this environment.
* **NPC Touch event (Every frame)** - **\[WIP\]** neutral environment which
triggers event every game loop while any NPC keeps a contact with this
environments.
* **Mouse click event** - **\[WIP\]** neutral environment which triggers event
when player will clicks it with a mouse pointer.
* **Collision script** - **\[WIP\]**
* **Mouse click script** - **\[WIP\]** neutral environment which executes a
script function when player will clicks it with a mouse pointer.
* **Collision event** - **\[WIP\]**
* **Air chamber** - Air environment which overrides other physical environments
with air environment.

<p class="warning">
    Important: Legacy SMBX Engine supports only two types of physical
    environments: Water and Quicksand. Other physical environment types are not
    supported by Legacy SMBX Engine. Only PGE Engine and SMBX-38A.
</p>

Because Physical environment zone is a sizable element, placing process is
going by rectangle drawing. To place them, you need to select on toolbar one
of two icons:

![DW](screenshots/LevelEditing/Physics/draw_water.png) ![DQ](screenshots/LevelEditing/Physics/draw_sand.png)

<span style="color: blue;">Blue</span> - draw water zone,
<span style="color: #fde910;">Yellow</span> - draw quicksand zone.

Placed physical environment rectangles:
Green - water, Yellow - quicksand

<ImageZoom
  alt="05_paced_areas"
  url="screenshots/LevelEditing/Physics/05_paced_areas.png"
  width="200px"
  :border="true"
/>

You have an ability to change environment type of the placed rectangle by a context menu:

<ImageZoom
  alt="06_change_type"
  url="screenshots/LevelEditing/Physics/06_change_type.png"
  width="200px"
  :border="true"
/>


Also, you can easily resize an environment rectangle:

To start resizing, you should open the "Resize" context menu item and you will
see a yellow rectangle which a "sizer". Move corner dots or sides to define new
size of block. When you done resizing press the ENTER key to accept new size,
and then block will have a new size. If you will press the ESC key you will
cancel resizing and block will keep current it's size.

<p class="tip">
    Note: If you wish to get more features of resizer box (green net which defined
    new size of section), click inside of them by right mouse button.
</p> 

**The context menu has actions**
* **Cut top here** - moves top boundary of box to current mouse position
* **Cut left here** - moves left boundary of box to current mouse position
* **Cut right here** - moves right boundary of box to current mouse position
* **Cut bottom here** - moves bottom boundary of box to current mouse position
* **Don't snap to grid** - disables grid snapping on moving of box boundaries
* **Disable minimal size limit** - gives ability to set size less than
minimally available size

<ImageZoom
  alt="PhysEnvResizing"
  url="screenshots/LevelEditing/Physics/PhysEnvResizing.png"
  width="200px"
  :border="true"
/>



## Player points

This is a point that defines an initial position of a playable character on the level. 
Every time you starting a level, the playable character will appear at this point.

To place a player point, you need to click one of the toolbar buttons (![P1](screenshots/LevelEditing/players/player1_start.png) or ![P2](screenshots/LevelEditing/players/player2_start.png)): 
where is red - it's for a 1'st player and the green for 2'nd.

In the editor start points will be shown as flags (They are may look
differently with a dependence on a currently used UI theme):

![PlayerPoints](screenshots/LevelEditing/Items/Player_startPoints_2.png)

If points will not be defined, the level will automatically end, because
it hasn't available playable characters on the level. Also, you can use doors
as player's start points, but you need to define the array index of this door
in the world map or on another level.

