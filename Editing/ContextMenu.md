# Context menu

Every item has its context menu. It can be opened by clicking the right mouse button (lefthander mouse - by left mouse button) while the cursor is over an item on the scene, or over a selected group.

By a context menu, you can change some of the basic settings of one item or of all selected items. You can change the layer of the current item(s). Also, you will find the ability for the quick creation of a new layer for a selected group of item(s). Context menu of warp points allows you to quickly jump to the opposite side of a warp entry.


### Block features
* **Invisible** - Make the block invisible. It will appear once it will get a hit from the bottom side. This flag useful for a place on the map secret bonuses or build barriers for a move up.
* **Slippery** - The block's top surface will be slippery.
* **Change contained NPC** - Open NPC selection dialog for change block content.
* **Resize** - available for resizable blocks only. It will switch the resizing mode for this block.

<ImageZoom
alt="BlockContext"
url="screenshots/LevelEditing/Items/BlockContext.png"
width="200px"
:border="true"
/>


### Background object features

* **Change Z-Offset** - Changes the rendering order priority of Background Objects by the relative value.
* **Change Z-Layer** - Changes the base display layer of this background object.

<ImageZoom
alt="BGO_Context"
url="screenshots/LevelEditing/Items/BGO_Context.png"
width="200px"
:border="true"
/>

### Non-playable Character features
* **Set Direction** - In this sub-menu, you can change the face direction of NPC.
* **Friendly** - NPC will don't communicate with playable characters and with other NPC's. Friendly NPC can't be killed, can't hurt player, can't be taken or grabbed. Playable characters and other NPCs can't stay on top of friendly NPCs.
* **Not movable** - NPC will be idle irrespective of its algorithm.
* **Set message** - Open the dialog where you can change the talk message of NPC.
* **Set as boss** - Enable the special boss fight algorithm available for specific NPC types. (Note: Inside the SMBX game, this option has the "Legacy Boss" name to refer to older versions of the game which hadn't layers and events support).
* **Change contained NPC** (Appears for some NPC's) - Change contained NPC of this NPC-Container.

<ImageZoom
alt="NPC_Direction"
url="screenshots/LevelEditing/Items/NPC_Direction.png"
width="200px"
:border="true"
/>

### Physic environment zone features
* **Environment type** - Change the environment type of this item.
* **Resize** - Switch to resizing of this item.

<ImageZoom
alt="06_change_type"
url="screenshots/LevelEditing/Physics/06_change_type.png"
width="200px"
:border="true"
/>

### Features of warp points
* **Jump to Entrance/Exit** - Move editor's scene camera to the opposite side of the warp connection if point placed.
* **Deny vehicles** - (Inside SMBX this option named as "No Yoshi")
* **Allow items** - (Inside SMBX this option named as "Allow NPC")
* **Locked** - Change the lock state of this warp.

<ImageZoom
alt="WarpContextMenu"
url="screenshots/LevelEditing/Warps/WarpContextMenu.png"
width="200px"
:border="true"
/>

