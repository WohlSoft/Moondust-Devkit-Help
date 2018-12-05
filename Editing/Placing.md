# Placing items

Placing of new elements on the level or world map can be done with multiple various ways.

**Available placing ways**
- **Brush placing** - the standard placing tool. Individual items are placing
by mouse click or by "drawing" curves while moving mouse cursor with a held
button.
- **Rectangle** - the tool which placing the items by filling of rectangle
zones. This useful for draw big walls or fill lot of holes.
- **Circle** - the tool which placing the items by filling of round zones.
Works similar to Rectnalgle.
- **Line** - the tool which allow draw line of items. This tool useful for
draw slopes, colomns, and long platforms.
- **Flood fill** - the tool which allow fill closed range of random shape.
This tool useful if you need to fill with items the zone of random-shape.
- **Overwrite mode** - This feature giving able to replace items already
placed on the map.


![PI](screenshots/LevelEditing/Items/PlacingTools.png)


## Rectangle placing

This is a special tool, which can be used for speed place of item group
on the map.

This feature available for BGO and Blocks. And in the world map editor
available for any items.

For use this feature, you must press on the "Rectangle" icon, and for
place item group, you must draw the rectangle on the map and it will be
filled with selected item.

_Placing items with rectangle tool_

<ImageZoom
  alt="demo-place-rect"
  url="demos/demo-place-rect.gif"
  width="200px"
  :border="true"
/>


## Circle placing

This is a special tool, which can be used to place item group to the
map quickly.

This feature available for BGO and Blocks. And in the world map editor
available for any items.

_Placing blocks with circle tool_

<ImageZoom
  alt="demo-place-circle"
  url="demos/demo-place-circle.gif"
  width="200px"
  :border="true"
/>


## Line placing

This is a special tool, which can be used to place item group to the
map quickly.

This feature available for BGO, Blocks and for NPCs. And in the world
map editor available for any items.

For use this feature, you must press on the "Line" icon, and for place
item group, you must draw the line on the map and it will be filled with
selected item.

_Placing items with line tool_

<ImageZoom
  alt="demo-place-line"
  url="demos/demo-place-line.gif"
  width="200px"
  :border="true"
/><ImageZoom
  alt="place_blocks_line2"
  url="screenshots/LevelEditing/Items/place_blocks_line2.png"
  width="200px"
  :border="true"
/>


## Flood fill

This is a special tool which will fill closed shape of items.

This feature available for BGO and for Blocks. And in the world map
editor available for any items but no music boxes.
 
For use this feature, you must press on the "Fill" icon, and for place
item group, you must draw the line on the map and it will be filled
with selected item.

Notes:

-For safety reasons flood filling process will be aborted after 3 seconds.
If you acidentally filled whole map, you can undo them.

-You can limit flood-fill with section boundaries if you will enable
flag in the  \[Edit -> Don't fill out of section\].

_Filling with blocks_

<ImageZoom
  alt="demo-place-flood"
  url="demos/demo-place-flood.gif"
  width="200px"
  :border="true"
/>


## Overwrite mode

This feature allow replace items, placed on the map. For use them, switch
the "Overwrite mode" icon on the toolbar and when you place some item on
the map, all colliding items will be removed.

_Draw with overwrite mode_

<ImageZoom
  alt="demo-override-mode"
  url="demos/demo-override-mode.gif"
  width="200px"
  :border="true"
/>
