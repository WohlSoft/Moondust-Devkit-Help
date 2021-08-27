# Editor Overview

![PgeEditor](Intro/QuickStart/WhatIsPGEEditor.png)

**Moondust Editor** - is a flexible and universal editor for levels,
world maps, and NPC configurations. With them, you can build your levels,
world maps, episodes, and even whole games!

The Editor has various tools which will help you to create your levels
and worlds convenient, fast, progressive, and qualitative!

**Editor** - is the part of the Moondust Project development kit. 
Moondust focused on making of 2d side-scrolling platform games.

## How to use Editor

The Editor can sometimes be a tricky UI to navigate. If you know where to look, however, 
you will be able to find what you need fairly quickly. The Editor uses a multi-selection 
model that allows you to quickly manage elements in the scene of Level or World Map. 
You can easily find the rest of the important features on the toolbars and 
in the window menu bar. To manage elements, you will need to use a context menu. 
**[Read more about context menu here](../../Editing/ContextMenu)**.

## Important buttons and options

The following options in the editor are among the most commonly used ones.
You can learn about the functions of the buttons that are not listed by hovering over 
them for a second.

<Note type="tip">
Icons look may depend on the current theme. All represented screenshots in this manual
do use the internal icon theme of the Editor. You can change the theme via 
<a href="#/Tools/ApplicationSettings#view">Application Settings</a>.
</Note>


-----

![tilesetbox](images/icons/tileset_box.png)<br/>
The button with this icon opens the **Tileset Itembox**,
one of two main methods of adding objects to a level. Its functionality 
is further explained in a later segment.

-----

![browserLevel](images/icons/item_browser_level.png) ![browserLevel](images/icons/item_browser_world.png)<br/>
The button with this icon opens the **Item Browser / Search Browser**,
the main method of adding objects to a level. Its functionality is
further explained in a later segment.

-----

![p1](images/icons/player1_start.png)![p2](images/icons/player2_start.png)<br />
Before you can test your level, you need to place a
start point for the first player. Green Mario’s start point is
optional.

-----

![water](images/icons/draw_water.png)![sand](images/icons/draw_sand.png)<br />
These buttons are used to draw zones of water and
quicksand respectively. These zones can be moved and resized after
placement, too.

-----

![warps](images/icons/doors.png)<br />
Opens the “Warps and Doors” window, in which warps can
be configured. There are various unsupported features in this window,
all of which are further detailed in the “Unsupported Features” segment
below.

-----

![section](images/icons/section.png)<br />
Opens the “Section Settings” window, in which various
section-specific properties can be configured. Unsupported features of
this window are listed in the “unsupported Features” segment.

-----

![layers](images/icons/layers.png)![events](images/icons/events.png)<br />
Open the “Layers” and “Events” windows respectively.
Together, these can be used to create moving layers and toggle layer
visibility. Events can further be used to play sound effects, lock
player input, manipulate the section and even execute lua code (using
LunaLua’s onEvent event).

-----

![sectionBar](images/icons/sections_bar.png)<br />
The section buttons transport you to the specified
section instantly. 

<Note type="warning">
Although there is a button to the right for adding sections beyond Section 20, 
such extended sections are not currently supported by vanilla SMBX, by SMBX-38A, and by SMBX2.
Adding sections beyond Section 20 is only supported by <strong>Moondust Engine</strong> and 
by <strong>TheXTech</strong> engines.
</Note>

-----

![lock](images/icons/item_lockers.png)<br />
Enabling a lock will prevent any of the tiles of that
type to be interacted with. From left to right, the locks are: Blocks,
Background Objects, NPCs, Warps, Liquids.

![wld](images/icons/item_lockers_wld.png)<br />
The same for world map editing. From left to right, the locks are: Terrain tiles,
Scenery, Path cells, Level entrance points, Music change boxes.

-----

![snaptogrid](screenshots/focus/menu-snap-to-grid.png)<br />
“Snap to grid” and manipulation of grid size can be
used for more granular placement of elements such as blocks and
background objects. “Default by item” describes the default grid
alginment option.

-----

![animation](images/icons/animation.png)<br />
If you are starting to notice that the editor is
lagging, disabling the animation with a click of this button should
help\!

-----

![lang](screenshots/focus/menu-language.png)<br />
Changes the editor’s language. Translations may not always be perfectly accurate, 
but if English doesn’t do the job for you, hopefully you will be able to 
find your way around more easily with a different language\!

## Using item sets

Item sets are the main method of adding objects to a level or world map. 
The Editor has two different item sets that can be used for objects adding:

* ![tilesetbox](images/icons/tileset_box.png) **[Tilesets item box](../../Tools/TilesetBox)** - The organized group of item sets that gives an 
organized and sorted look at available elements. You also can make your tilesets of 
the most often used items to organize your work. We suggest using this toolbox by 
newbies who aren't familiar with the available items set. Also, this toolbox will
be useful for users who want to keep their work organized.

<ImageZoom
    alt="TilesetBox"
    url="screenshots/Tools/TilesetBox2.png"
    width="200px"
    :border="true"
/><ImageZoom
    alt="TilesetBox"
    url="screenshots/Tools/TilesetBox.png"
    width="200px"
    :border="true"
/>

* ![browserLevel](images/icons/item_browser_level.png)![browserLevel](images/icons/item_browser_world.png) 
**[Search Browser / Items Browser](../../EditLevel/ItemBrowser)** - The complete database of available elements 
for placement. It has the filtering by groups and a category, and the flexible 
search of any specific item at the whole database. We suggest using this toolbox 
by experienced users who want the full overlook of all available elements.

<ImageZoom
    alt="SearchBrowser"
    url="screenshots/Tools/SearchBrowser.png"
    width="50px"
    :border="true"
/>


## Compare to SMBX 1.3 Editor

Compare to the built-in editor of SMBX 1.3 game.

Unlike the old editor of SMBX, the Moondust Editor uses the multi-selection 
model that gives an ability to work with multiple items at the same time.
Instead of each item dragging to change their properties, you can use a 
context menu. You also can set the same properties to multiple items
at one moment! You can copy, you can paste your stuff into another level/world,
you can undo any accidental changes (and redo them too if needed). Together with
a classic placing mode, you have special tools like a line drawing, rectangular
placement, ellipse, and a flood-fill tool that makes the group item placement
easy and faster. The "Overwrite mode" allows you to replace existing elements on 
a map faster!


### Bugs of SMBX Editor absent in Moondust Editor:</u>

- you have the full freedom with using decimal values in the npc.txt files
(crash won't happen)
- you have the full freedom to use custom sceneries in range 32-65 on the world
map with a correct saving of file (SMBX Editor will crash when you try to save 
a world map having those items).

- you will don't flood with vines or with sceneries when you try
to put them on the map.

- flood-fill is safe: if you did an accidental flood fill of outer space,
the flood-filling process stops after 3 sec. You can undo this and fix your
mistake without Editor reload.

- you will never get the "overflow" message because Moondust Editor has more
space to keep all your items. If you try to save the level or world map into
the legacy format, you will get the warning message that tells you about
exciting limits. It should help you to be sure your file will be compatible
with a legacy game.
