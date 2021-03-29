# Tileset item box
## Overview
This is the universal and customizable item set, the main container for almost all elements.

<ImageZoom
  alt="TilesetBox"
  url="screenshots/Tools/TilesetBox.png"
  :border="true"
/>

By switching between the different tabs, you are able to navigate to the items you want to place in your level.

Tabs at the top row are **categories**, and the tabs at the second row are <u>tileset groups</u>.

## Custom tilesets
Even though quick access to all features is nice, there is still a lot of clicking involved in 
order to get to the items you want to access. This is where the “**Custom**” tab is helpful.

<ImageZoom
  alt="CustomTilesetBox"
  url="screenshots/Tools/TilesetBox_custom.png"
  :border="true"
/>

![newTileset](screenshots/Tools/TilesetBox_customNew.png)<br />
With a press of this button, you will be brought into a Tileset Editor, 
in which you can create your own tilesets of any kind.

The editor features a search bar, with which you can search by an item’s name, 
as well as its ID. You can also filter tiles in order to only show sprites with 
custom assets, or sprites without. After giving the tileset a name and hitting "**Save**", 
it will be saved into the level folder, and the tileset will automatically be 
displayed as part of the "**Custom**" tab in the Tileset Itembox.

<ImageZoom
  alt="CustomTilesetEditor"
  url="screenshots/Tools/TileSet_EditorCustom.png"
  width=200px
  :border="true"
/><ImageZoom
  alt="GlobalTilesetEditor"
  url="screenshots/Tools/TileSet_Editor.png"
  width=200px
  :border="true"
/>


<Note type="warning">
Note for SMBX2 users: Certain features have been specifically removed from the 
Tileset Itembox for this build. This is because these NPCs, Blocks, BGOs, etc. are 
unfinished and likely to behave unexpectedly, or cause crashes or errors. If an NPC you 
are looking for is not in the Tileset Itembox, please avoid using it in your levels, as
it is very likely to behave differently in future releases.
</Note>


More about Tileset Editor features:
 
* To add an item, do drag it from the `Items` list and drop at any free cell in the white grid.
* To remove an item from the grid, click it by the `right mouse button`.
* You can arrange items in the grid as you want by simple dragging.
* Every tileset allows you to put items of the same type only. You can't mix objects 
of different types on the same tileset.
* The **Show custom only** check box will hide all elements that weren't customized by 
any way of local setup or custom graphics.
* The **Show default only** will show only items that weren't customized by any way of 
local setup or custom graphics.
* The **Current Level/World specific** checkbox will tell Tileset Editor to store 
tileset in the level/world local directory. That means the tileset will not be 
accessible from other levels and world map files.


## Global tilesets
If you want to modify any config pack global tilesets, you can edit them through 
the `Tools -> Tilesets and pallets` menu.

## Global groups
Also, you can create the groups of tilesets which will always be displayed in the tileset box.

<Note type="tip">
Note: If you want to create a category, do save the tileset group with a new category name, 
typed manually: it will appear automatically.
</Note>

<ImageZoom
  alt="GlobalTilesetGroupEditor"
  url="screenshots/Tools/TileSet_Group_Editor.png"
  :border="true"
/>
