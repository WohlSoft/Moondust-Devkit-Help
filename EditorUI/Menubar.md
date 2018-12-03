# Menu bar

## File
![fileMenu](screenshots/menus/001_file.png)


* **Creation of a new file** - Create a new file.

* **Open exist file** - Open file

* **Saving file** - Save current data into opened file. If file is
created, will be asked for save file.


* **Open folder of current file** - Opens a folder where current
file is saved

 

* **Open custom data folder** - Opens a custom data folder (folder
with name equal to current file name and stored in the same place)

* **Export to image** - This option will save selected fragment of
level or world map into image file (will be saved in PNG format).

* **Export section to image** - This option will save whole level
section into image file (will be saved in PNG format).


## Edit

![editMenu](screenshots/menus/002_edit.png)

* **History**
  * **Undo** - Cancel recent action.
  * **Redo** - Repeat canceled action.

* **Clipboard**
  * Copy - Selected items will be stored in special buffer. Data
  can be pasted in other file.
  * Cut - Selected itemss will be stored in special buffer and
  deleted from working space.
  * Paste - Switch editing mode to "Paste". Cursor will be changed
  and you must select point of working space, for paste items from
  buffer.
* **Snap to grid** - Switch automatic alignment of placed or moved
elements
* **Set align grid size** - Allows you to override default grid
alignment size. To restore default choose the "Default by item"

* **Prevent overlap** - Prevents similar items from overlapping
each other. Objects will not be able to be placed on top of each
other, and attempting to do so will result in the selected object
returning to its original position. If this flag is disabled, you
will be able to move elements over each other with no limitation.
Objects will never be allowed to overlap when placing new objects,
unless you are duplicating or pasting from the clipboard, which
will always allow overlapping.
_You can disable this option for move items over each other
without limits._

* **Align selected** - Align each selected item to grid.
* **Rotate left/right** - Rotate item's coordinates inside
selection rectangle
* **Flip horizontal/vertical** - Invert item's coordinates
relative to selection rectangle


## Level

![levelMenu](screenshots/menus/003_level.png)

* **Change current section** - In this menu you can switch current section to other.

* **Section modifications**
  * **Clone section to...** - giving able copy all items of selected sections with section settings and size into another section and into another file.
  * **Delete section** - removes all items of current section and de-initializes it.
  * **Rotate left/right** - will rotate coordinates rectangle of section with all items in them.
  * **Flip horizontal/vertical** - will invert coordinates of items in the section.

* **Current section options**
  * **Connect left and right sides (Level Warp)** - Moved out off screen items/characters will be entered from opposite side of section.
  * **Offscreen exit** - Allows to player exit from level by go out off screen.
  * **One-way scrolling (No turn back)** - Character can move only from left to right.
  * **Underwater** - Force underwater physics to full section area.

* **Properties** - Change level title. Here you can set the level title, what will be displayed on trying of level debug.

## Test

_Variant of menu on Linux and macOS_

![testMenu1](screenshots/menus/005_test.png)


_Variant of menu on Windows with Integration config pack_

![testMenu1](screenshots/menus/005_test_win.png)]

* **Run testing** - will run testing of current level in Engine.
Will be available interprocessing.
<p class="tip">Note: when you have used Integration config pack,
"Run Testing" may be redefined to start LunaTester. In this case
you still be able to run PGE Engine by opening it in the
"PGE Engine" menu</p>

* **Run testing of saved file** - will start testing of saved file
without interprocessing.

* **LunaTester** - (_Windows only_) will start testing in the
legacy SMBX Engine (it must have pre-installed LunaLua and you
must use the Integration config pack which points folder of
LunaLua-SMBX Engine).

* **Start Engine** - Starts PGE Engine in normal mode with current
configuration package.

* **Testing options** - provides ability to set preferences of
testing process.



## View

![viewMenu](screenshots/menus/006_view.png)

* **Show/Hide toolboxes** - Here you can show or hide exists
toolboxes
* **Fullscreen** - Enabling displaying of main window in fullscreen
mode. This feature is useful for tablets.
* **Snap to grid** - Enable or disable the aligning of items
by grid.
* **Animation on/off** - Enable or disable item animations.
This option will not be work, if on level map placed too many
items.<p class="tip">You can disable this option for speed up.</p>



## Configuration

![configMenu](screenshots/menus/Configuration.png)

* **Current configuration status** - This option displaying the
global configuration status window. You will see list of all
loaded items and you can see all errors, what appeared in config
loading process, what will help for find error in game config files.
* **Reload configuration pack** - This option start to completely
reload of all global configuration data without restart of editor.
* **Run configure tool...** - Some configuration packs has own
configure tool which can set extra properties of config pack
(for example, integration config packs are using it to setup
the LunaLua-SMBX directory).
* **Change configuration pack** - This option giving able to
switch into another config pack



## Tools

![toolsMenu](screenshots/menus/010_tools_configs.png)

* **Refresh menus** - This option will reset menubar options. This option will help, if toolbars are inactive.

* **Reload current file** - Current file will be reloaded with his data, as custom grahics.

* **External tools** - Contains the GUIs and links to additional tools:
  * LazyFix tool
  * GIFs2PNG
  * PNG2GIFs
  * SoX Audio Converter

* **Palletes and tilesets**
Create and edit the global tilesets configuration for current game config.

* **Custom data**
  * **Clear unused data** - will remove custom files which are never using with PGE and SMBX.
  * **Import** - giving able to apply pack of custom data directly into level/world directlry.
  * **Fix wrong masks** - will fix all wrongly made masks. Use it when you have problems with rendering of graphics.

* **Application settings** - This action will open the application settings window, where you can change animation item limits, set autoplay music, etc.
Here you can define logging properties, set log file or disable logging.

## Window

Here displaying all opened documents. You can switch to any, you can arrage the, or close.


## Help

![helpMenu](screenshots/menus/011_help.png)

This menu contains the links to help information and links to special tools.

* **Developement Console** - This is a special tool which displaying
everything information which appearing while editor process is
going.
Also this console allow to send special commands to the engine part
while debug test is runned.

* **Legacy GUI** - This menuitem will switch editor's GUI into
classic design with sub-windows mode and with tileset items box.
* **Modern GUI** - This menuitem will switch editor's GUI into
modern design with tab-view mode and with default filter-search
items box.


