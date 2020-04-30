# Context menu

Every item has its context menu. By a righthander mouse, it can be opened by a 
right mouse button (for lefthanders - by left mouse button) while the mouse cursor 
points an item on the scene or a selected group.

By a context menu, you can change some of the basic settings of one item or of all
selected items. You can change the layer of the current item(s). Also, you will find
the ability for the quick creation of a new layer for a selected group of item(s). 
Context menu of warp points allows you to quickly jump to the opposite side of a
warp entry.

<ImageZoom
  alt="BlockContext"
  url="screenshots/LevelEditing/Items/BlockContext.png"
  width="200px"
  :border="true"
/><ImageZoom
  alt="BGO_Context"
  url="screenshots/LevelEditing/Items/BGO_Context.png"
  width="200px"
  :border="true"
/><ImageZoom
  alt="NPC_Direction"
  url="screenshots/LevelEditing/Items/NPC_Direction.png"
  width="200px"
  :border="true"
/><ImageZoom
  alt="06_change_type"
  url="screenshots/LevelEditing/Physics/06_change_type.png"
  width="200px"
  :border="true"
/><ImageZoom
  alt="WarpContextMenu"
  url="screenshots/LevelEditing/Warps/WarpContextMenu.png"
  width="200px"
  :border="true"
/>

## Common Features

### Group actions
Applying to the group of item of the same type.

- **Layer** - Displaying the current layer owner of selected item. With this sub-menu you can change layer of this item or create new for selected item group.
- **Copy** - Copy selected items into the internal clipboard (**Not supported by warp points**).
- **Cut** - Copy selected items into the internal clipboard and remove them (**Not supported by warp points**).
- **Remove** - Selected items will be removed
- **Transform into** - gives ability to replace type of item (for example one block wiht another). Available for Blocks, BGO's and NPC's, Terrain tiles, Scenery, Paths, Levels points.
- **Transform all ITEM-X into** - gives ability to replace type of all items with same ID on the map. Available for Blocks, BGO's and NPC's, Terrain , Scenery, Paths, Level points.
- **Properties** - will open the item properties' dialog for selected item group.

 
### Signle item action

Applying to the single item.

- **Resize** - Will switch into resizing mode of one seleted item. Not apply to item group, only for single item. 
Supported by some blocks (sizable blocs) and by physic environments zones.
- **Jump to Exit/Entrance** - You will jump to opposite warp point, if it already placed on the map.


## See also

[Item type specific context menu](/Editing/ContextMenu)
