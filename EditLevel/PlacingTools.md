# Placing tools

There are tools to help place items easier.

Available tools:

- **[Rectangle](#rectangle)** - the tool which places items by filling of rectangle zones. This tool is useful for drawing big walls or fill a lot of holes.

- **[Circle](#circle)** - the tool which places items by filling round zones. Works like a Rectangle.

- **[Line](#line)** - the tool which allows to easier place line of items. This tool useful for draw slopes, columns, and long platforms.

- **[Fill](#fill)** - the tool which allows filling a closed range of random shape. This tool useful if you need to fill with items in the zone of random-shape.

- **[Override mode](#override-mode)**. This feature giving able to replace items already placed on the map.

![Pseudo-foregroundBGO-1](screenshots/LevelEditing/Items/PlacingTools.png)

## Rectangle

This is a special tool, which can be used for speed place of item group on the map.

This feature available for BGO and Blocks. And in the world map editor available for any items.

For use this feature, you must press on the "Rectangle" icon, and for place item group, you must draw the rectangle on the map, and it will be filled with selected item.

_Placing items with rectangle tool_

<ImageZoom 
  alt="rect_tool_in_action"
  url="demos/demo-place-rect.gif"
  width="200px"
  :border="true" 
/>

## Circle

This is a special tool, which can be used to place item group to the map quickly.

This feature available for BGO and Blocks. And in the world map editor available for any items.

_Placing blocks with circle tool_

<ImageZoom 
  alt="circle_tool_in_action"
  url="demos/demo-place-circle.gif"
  width="200px"
  :border="true" 
/>

## Line

This is a special tool, which can be used to place item group to the map quickly. This feature available for BGO, Blocks and for NPCs. And in the world map editor available for any items.

For use this feature, you must press on the "Line" icon, and for place item group, you must draw the line on the map and it will be filled with selected item.

_Placing items with line tool_

<ImageZoom 
  alt="line_tool_in_action"
  url="demos/demo-place-line.gif"
  width="200px"
  :border="true" 
/>

<ImageZoom 
  alt="line_tool"
  url="screenshots/LevelEditing/Items/place_blocks_line2.png"
  width="200px"
  :border="true" 
/>

## Fill

This is a special tool which will fill closed shape of items.

This feature available for BGO and for Blocks. And in the world map editor available for any items but no music boxes.

For use this feature, you must press on the "Fill" icon, and for place item group, you must draw the line on the map and it will be filled with selected item.

**Notes**:

- For safety reasons flood filling process will be aborted after 3 seconds. If you accidentally filled whole map, you can undo them.

- You can limit flood-fill with section boundaries if you will enable flag in the **Edit -> Don't fill out of section**.

_Filling with blocks_

<ImageZoom 
  alt="fill"
  url="demos/demo-place-flood.gif"
  width="200px"
  :border="true" 
/>

## Override mode

This feature allow replace items, placed on the map. For use them, switch the "Overwrite mode" icon on the toolbar and when you place some item on the map, all colliding items will be removed.
 
_Draw with overwrite mode_

<ImageZoom 
  alt="override"
  url="demos/demo-override-mode.gif"
  width="200px"
  :border="true" 
/>
