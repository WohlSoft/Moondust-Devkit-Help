# Menu bar

Editor's menu bar provides full access to almost all supported features of Editor. This article contains an explanation for the most useful menu items and something also.

## File
![fileMenu](screenshots/menus/001_file.png)

* **New** - Create a new file.

* **Open** - Open an exist file.

* **Save** - Save current data into opened file. If file is created, will be asked for a save file.

* **Open folder of current file** - Opens a folder where file saved.

* **Open custom data folder** - Opens a folder for a level or world file specific custom data (with the same name as the file itself except the suffix).

* **Export to image** - This option will save a selected fragment of level or world map into an image file (into PNG format).

* **Export section to image** - This option will save the whole level section into an image file (into PNG format).


## Edit

![editMenu](screenshots/menus/002_edit.png)

* **History**
  * **Undo** - Cancel recent action.
  * **Redo** - Repeat canceled action.

* **Clipboard**
  * **Copy** - Copy items into clipboard.
  * **Cut** - Copy items into the clipboard and remove them from the scene.
  * **Paste** - Select the location and insert elements stored in the clipboard.
* **Snap to grid** - Switch automatic alignment of placed or moved elements.
* **Set grid align size** - Gives you an ability to override default grid alignment size. To restore a default choose the "Default by item".

* **Prevent overlap** - Prevents similar items from overlapping each other. Attempt to move objects over others will cause the rejection of the move: all moved items will return their initial position. If this flag is disabled, you will be able to move elements over each other with no limitation. Objects will never be allowed to overlap when placing new items unless you are duplicating or pasting from the clipboard, which will always allow the overlapping. _You can disable this option to move your items over to each other without limits._

* **Align selected** - Align each selected item to grid.
* **Rotate left/right** - Rotate item's coordinates inside selection rectangle.
* **Flip horizontal/vertical** - Invert item's coordinates relative to selection rectangle.


## Level

![levelMenu](screenshots/menus/003_level.png)

* **Change current section** - In this menu, you can switch the current section to another.

* **Section modifications**
  * **Clone section to...** - Copy all items and properties of a source section into another. You can copy the whole level section between files.
  * **Delete section** - removes all items of the current section and de-initializes it.
  * **Rotate left/right** - will rotate the section with all items in it.
  * **Flip horizontal/vertical** - will invert coordinates of items in the section.

* **Current section options**
  * **Connect the left-right sides (Level Warp)** - Items or characters moved out off the screen will enter back from the opposite side of the section.
  * **Off-screen exit** - Allows the player to exit from level by going out off-screen.
  * **One-way scrolling (No turn back)** - Character can move only from left to right.
  * **Underwater** - Force underwater physics to full section area.

* **Properties** - Change level title and some other level-wide properties.


## Test

![testMenu1](screenshots/menus/005_test.png)

* **Run testing** - will run testing of current level with the default Engine of current config pack. Inter-processing integration will work. It allows you to perform a hot-placing of items into the running level directly if the engine supports the integration.

* **Run testing of the saved file** - will start testing of the saved file. Inter-processing integration will not work.

* **Moondust Engine** (formerly PGE Engine) - The sub-menu of extra actions and features related to the Moondust Engine - the default and main engine of a Moondust Project.

* **TheXTech** - The sub-menu of extra actions and features related to the X-Tech engine - the modern port of SMBX Engine.

* **TheXTech** - The sub-menu of extra actions and features related to the X-Tech engine - the modern port of SMBX Engine.

* **LunaTester** - Will start testing in the legacy SMBX Engine equipped with LunaLua hacking library, or in the SMBX2 runtime system, directly based on the LunaLua project.

* **Testing options** - provides the ability to set preferences of the testing process.



## View

![viewMenu](screenshots/menus/006_view.png)

* **Show/Hide toolboxes** - You can show or hide exists toolboxes.
* **Fullscreen** - Enabling displaying of the main window in fullscreen mode. This feature is useful for tablets.
* **Snap to grid** - Enable or disable the aligning of items by the grid.
* **Animation on/off** - Enable or disable item animations. This option will not be work if on the level map placed too many items.

<Note type="tip">
You can disable the animation option if you feel that Editor works laggy.
</Note>



## Configuration

![configMenu](screenshots/menus/Configuration.png)

* **Current configuration status** - Open the dialog that displays the global configuration status window. You will see a list of all loaded items, and you can see all errors that occurred during the loading process.
* **Reload configuration pack** - This option starts the complete reload of all global configuration data without restart of the editor.
* **Run configure tool...** - Some configuration packs have their own configure tool that can change extra properties of config pack (for example, integration config packs are using it to set up the LunaLua-SMBX directory).
* **Change configuration pack** - This option giving able to switch into another config pack.



## Tools

![toolsMenu](screenshots/menus/010_tools_configs.png)

* **Refresh menus** - This option will reset menubar options.

* **Reload current file** - Reload the file and its content from the disk.

* **External tools** - Contains the GUIs and links to additional tools:
  * LazyFix tool
  * GIFs2PNG
  * PNG2GIFs
  * SoX Audio Converter

* **Palletes and tilesets**
  Create and edit the global tilesets configuration for the current game config.

* **Custom data**
  * **Clear unused data** - remove all not used custom files at your level.
  * **Import** - giving able to apply a pack of custom data directly into level/world.
  * **Fix wrong masks** - will fix all wrongly made bitmasks in your level. Use it when you have problems with the rendering of graphics.

* **Application settings** - This action will open the application settings window, where you can change animation item limits, set autoplay music, etc. Here you can define logging properties, set log file, or disable logging.


## Window

Here are displaying all opened documents. You can:
* Switch between documents.
* Arrange sub-windows.
* Close them.


## Help

![helpMenu](screenshots/menus/011_help.png)

This menu contains links to helpful information and links to special tools.

* **Development Console** - The tool that displays all information that appears during the editor running. Also, this console allows sending special commands to the engine part while the debug test is running.

* **Legacy GUI** - This menu item will switch the editor's GUI into the classic design with sub-windows mode and tileset items box being default items pallet.
* **Modern GUI** - This menu item will switch the editor's GUI into a modern design with tab-view mode and with default filter-search items box.
