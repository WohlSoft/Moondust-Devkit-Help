# Level Items

**Items** - main content and part of any levels. There are a construction
material, sceneries, items, characters, etc.


<u>**Avalilable item types:**</u>
* [Blocks](#Blocks)
* [Background objects](#Background objects)
* [Non-playable characters](#Non-playable characters)
* [Warp/Door points](#Warps and doors)
* [Physical environment zones (Inside SMBX the Water/Quicksand)](#Physical environments)
* [Player's start points](#Player start points)


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
  :border="true" 
/>


_Block context menu_

<ImageZoom 
  alt="BlockContext"
  url="screenshots/LevelEditing/Items/BlockContext.png" 
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
  :border="true" 
/>





## Background objects

**Background objects** - is a sceneries. But some BGO can have special features:
platform movement paths, will define movement paths for moting "platforms",
reverser, what will revert platform's speed back. Some BGO allows to clibmb
on them. BGO can be background and foreground. Foreground BGO placing over all
other level items.

_Placing of BGO_

<ImageZoom 
  alt="PlacingBGO"
  url="screenshots/LevelEditing/Items/PlacingBGO.png" 
  :border="true" 
/>


_BGO Context menu_

<ImageZoom 
  alt="BGO_Context"
  url="screenshots/LevelEditing/Items/BGO_Context.png" 
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
  :border="true" 
/>


## Non-playable characters
WIP


## Warps and doors
WIP


## Physical environments
WIP

## Player start points
WIP
