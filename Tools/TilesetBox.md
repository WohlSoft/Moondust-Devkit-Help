# Tileset item box
## Overview
This is universal and editable item toolbox.

 

It is a good additional feature to regular item toolbox:
- regular item toolbox which available by default have a filter search and search by ID which helps you to find
necessary item by name or by ID. Also, with them you can place any items, even secret and super-secret.
- tileset item box is more convenient for create combinations of similar tiles and more visually, this is the best 
choice for use a compound item, (like ground tiles with slopes). You can create own tilesets for your custom 
graphics which will be saved in the episode or level specific folder.

Tabs at the top row are **categories**, and the tabs at the second row are <u>tileset groups</u>.

<ImageZoom
  alt="TilesetBox"
  url="screenshots/Tools/TilesetBox.png"
  :border="true"
/>

## Custom tilesets
The **Custom category** - is a special tab, where are current level and episode specific tilesets which 
saving together with level or world or in the custom level/world directory.

<ImageZoom
  alt="CustomTilesetBox"
  url="screenshots/Tools/TilesetBox_custom.png"
  :border="true"
/>

## Global tilesets
You can edit its global set in the `Tools -> Tilesets and palletes` menu:

The tileset editor gives an ability to create a new tileset by a drag and drop items from global list of selected item type.

* To add item, simply drag it from the `Items` list and drop at any free cell in the white grid.
* To remove item from the grid, click it by the `right mouse button`.
* You can arrange items in the grid as you want by simple dragging.
* Every tileset allows you to put items of same type only. You can't mix items of different types in the same tileset.
* The **Show custom only** check box will hide all elements aren't customised by any sort of local setup or custom graphics.
* The **Show default only** will show only items aren't customised by any sort of local setup or custom graphics.
* The **Current Level/World specific** checkbox will tell Tileset Editor to store tileset in the level/world local directory. 
That means, the tileset will not be accessible from other level and world map files. 

<ImageZoom
  alt="GlobalTilesetEditor"
  url="screenshots/Tools/TileSet_Editor.png"
  :border="true"
/>


## Global groups
Also, you can create the groups of tilesets which will always be displayed in the tileset box.

<p class="tip">
Note: If you want create a category, simply save tileset group with new category name, 
and this category will be automatically created.
</p>

<ImageZoom
  alt="GlobalTilesetGroupEditor"
  url="screenshots/Tools/TileSet_Group_Editor.png"
  :border="true"
/>
