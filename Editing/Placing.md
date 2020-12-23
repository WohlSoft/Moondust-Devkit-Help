# Items placing

Placing new elements on the level or world map can be done in multiple various ways.

**Available placing ways**
- **Brush placing** - the standard placing tool. Individual items are placing by mouse click or by "drawing" curves while moving the mouse cursor with a hold button.

- **[Rectangle](#rectangle)** - the tool which places items by filling rectangle zones. This tool is useful for drawing big walls or fill a lot of holes.

- **[Circle](#circle)** - the tool which placing the items by filling circular zones. It works like a rectangular placing.

- **[Line](#line)** - the tool which allows draw line of items. This tool useful for slope drawing, columns, and long platforms.

- **[Flood fill](#flood-fill)** - this tool gives you the ability to fill a closed range of random shapes. This tool useful if you need to fill with items in the zone of random-shape.

- **[Overwrite mode](#overwrite-mode)** - This feature gives an ability to replace items already placed on the map.


![PI](screenshots/LevelEditing/Items/PlacingTools.png)


## Rectangle

It's a tool that allows quick placing of item groups on the map.

This feature available for BGO and Blocks. And in the world map editor available for any items.

To use this feature, you need to press on the "Rectangle" icon, and to place item groups, you need to draw the rectangle on the map. Once you release your mouse button, the selected area will be filled with an item group.

_Placing items by rectangle tool_

<ImageZoom
  alt="demo-place-rect"
  url="demos/demo-place-rect.gif"
  :border="true"
/>


## Circle

It's a tool that allows quick placing of item groups on the map.

This feature available for BGO and Blocks. And in the world map editor available for any items.

To use this feature, you need to press on the "Circle" icon, and to place item groups, you need to draw the circle on the map. Once you release your mouse button, the selected area will be filled with an item group.

_Placing blocks with circle tool_

<ImageZoom
  alt="demo-place-circle"
  url="demos/demo-place-circle.gif"
  :border="true"
/>


## Line

It's a tool that allows quick placing of item groups on the map.

This feature available for BGO, Blocks, and NPCs. And in the world map editor available for any items.

To use this feature, you need to press on the "Line" icon, and to place item groups, you need to draw the circle on the map. Once you release your mouse button, the linear area will be filled with an item group.

_Placing items with line tool_

<ImageZoom
  alt="demo-place-line"
  url="demos/demo-place-line.gif"
  :border="true"
/>

## Flood fill

It's a tool that allows the filling of closed areas built by items.

This feature available for BGO and Blocks. And in the world map editor available for any items.

To use this feature, you need to press on the "Fill" icon, and to place item groups, you need to click on the empty area you want to fill.

**Notes:**
- For safety reasons, the flood filling process will stop after 3 seconds. If you accidentally filled the whole map, you can undo them.
- You can limit flood-fill with section boundaries if you will enable flag in the `Edit -> Don't fill out of section` menu.

_Filling with blocks_

<ImageZoom
  alt="demo-place-flood"
  url="demos/demo-place-flood.gif"
  :border="true"
/>


## Overwrite mode

This feature allows you to replace items placed on the map. To use them, switch the "Overwrite mode" icon on the toolbar. All new-placed items will cause a removal of all collided items which was placed at the position place before.

_Draw with overwrite mode_

<ImageZoom
  alt="demo-override-mode"
  url="demos/demo-override-mode.gif"
  :border="true"
/>
