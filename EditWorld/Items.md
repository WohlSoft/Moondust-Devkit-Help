# Items
## Overview
Main content and part of any world maps. There are a construction material, sceneries, level entrances, paths, etc.
## Terrain tiles
The main design units which are used for creation of terrian design of the world map. Terrain tiles aren't communicating with other elements, there are always static. (except water terrain tiles)

<ImageZoom
  alt="wld_tiles"
  url="screenshots/WorldEditing/Items/wld_tiles.png" 
  :border="true" 
/>
## Sceneries
The second design unit. Sceneries are can be hidden when player did an opened of the path which placed over them.

<ImageZoom
  alt="wld_sceneries"
  url="screenshots/WorldEditing/Items/wld_sceneries.png" 
  :border="true" 
/>
## Paths
Allow to player move between level points and map locations. Usually paths are hidden and appearing when player pass the level which placed nearly to them.

<ImageZoom
  alt="wld_paths"
  url="screenshots/WorldEditing/Items/wld_paths.png" 
  :border="true" 
/>
## Level entrances ([Properties](LevelEntranceProperties))
There are a special units, which are allowing you to enter into defined level or teleport player to other map coorditates. Levels can have multiple entrances, but can have difference warp points inside a level. Also level point using as game start point. If point is not defined, player will start from 0x0 coordinates.

<ImageZoom 
  alt="wld_levels"
  url="screenshots/WorldEditing/Items/wld_levels.png" 
  :border="true" 
/>
### Level Entrance Properties
<ImageZoom 
  alt="wld_levels"
  url="screenshots/WorldEditing/LevelItemProps.png"
  :border="false"
/>

**Position** - Displaying current coordinated of selected item.

**Level ID** - ID of level item which defined in the global configuration.

**Array ID** - the connection indes of selected item.

**Background path** - under level point image will be displayed path image

**Big Background path** - under level point image will be displayed same path image, but with larger size

**Always visible** - with this option the level point will be displayed always. If this flag disabled, level point will be shown only when player open path to them.

**Game start point** - the important option which needed for definition of the player initial position on game begin. This point must exist on the world map if you creating the world map based episode (if you creating hub-based episode, this point is not need).

**Level file** - defining the target level file.

**Level Title** - This is a level title which will be displayed in the game process when player stand over this level item.

**Enter to door #** - defining the warp Array ID, where player will be entered after start level. If value is 0, the player start level from it's default start point.

**Open paths by exits** - defining the <span class="ref_result">condition for open path per each side of level point.</span>

**Goto coorditanes** - If these values are set, this point will teleport playable character to defined location. Also you can select target point in the interactive mode when you press the "Set" button.

## Music Boxes
There are a special units which are switching playing music when player character stand on them.

<ImageZoom
  alt="wld_musicboxes"
  url="screenshots/WorldEditing/Items/wld_musicboxes.png" 
  :border="true" 
/>