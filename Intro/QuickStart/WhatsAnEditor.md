# Editor Overview

![PgeEditor](Intro/QuickStart/WhatIsPGEEditor.png)

**Moondust Editor** - is a flexible, universal editor for levels,
world maps and NPC configurations. With them you can create own levels,
world maps, episodes and even whole games!

The Editor has various tools which will help you to create your levels
and worlds convenient, fast, progressive and qualitative!

Editor - is the part of the Moondust Project development kit. 
Moondust focused on making of 2d side-scrolling platform games.

_Moondust Editor designed to have the rest features in menus and on the
toolbar:_ you can switch between sections (separated sub-areas or rooms);
place player start/spawn points, take placing of physical environments
(water, quicksand); lock or unlock items of target type to keep them in
safe; show/hide some toolboxes - helpful boxes which contains the rest of
settings of items, section, etc. Also, you can copy selected items or
paste them from clipboard back. PGE Editor have a status bar where
you can see some difference messages. When you will work with items
on the level and on the world map, to have access to their properties
you have the context menu to use. **[Context menu](../../Editing/ContextMenu)** is a useful menu
with settings and features which can be opened by right (or left for
left-handedness mouse) mouse button click\].

Moondust Editor has the set of advanced tools you can find in the "Tools" menu
where you will find some graphics and audio converters together with 
fixing and cleanup wizards which will help you to fix various mistakes in
your stuff. 

<Note type="tip">
If you don't like to use the Item Browser (a.k.a. Search Browser), you can
use the Tilesets Item Box which gives you the organized palette of available 
items for use. You also can make your own tilesets to keep your often used 
elements over your hand.
</Note>

## Compare to SMBX 1.3 Editor

Compare to built-in editor of SMBX 1.3 game.

Unlike the old editor of SMBX, the Moondust Editor uses a multi-selection
concept which gives an ability to work with multiple items at same time.
Instead of each item dragging to change their properties, you can use a 
context menu. You also can set the same properties to multiple items
at one moment! You can copy, you can paste your stuff into another 
level/world, you can undo any accidental changes (and redo them too 
if needed). Together with a classic placing mode, you have the special tools 
like a line drawing, rectangular placement, ellipse, and a flood-fill tool 
which makes the group item placement easier and faster.
The "Overwrite mode" allows you to quickly replace existing elements on 
a map faster!

### Bugs of SMBX Editor absent in Moondust Editor:</u>

- you have the full freedom with using of decimal values in the npc.txt files
(crash won't happen)
- you have the full freedom to use custom sceneries in range 32-65 on the world
map with correct saving of file (SMBX Editor will crash when you will try to save a 
world map having those items).

- you will don't flood with vines or with sceneries when you try
to put them to map.

- flood-fill is safe: when you had to accidentally flooded an outer space,
flood-filling process will be automatically aborted after 3 sec. You are able
to undo this and fix your mistake without Editor reload.

- you will never get the "overflow" message because Moondust Editor 
have the wider space to keep all your items. If you will try to save the level 
or world map into legacy format, you will get the warning message that tells you 
about excited limits. It should help you to be sure your file will be compatible
with a legacy game.


