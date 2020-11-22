# Application settings
## Overview
Here you can change settings of the Editor application.

## Main
* **Autoplay music** - Always start music playing when opening any file.
* **Animation** - Enable item animations playing.
* **Animation items limit** - How many elements on the scene allowed to have animations work.
This feature should help you to avoid the lag of the Editor on slower computers. 
* **Collision detection** - If checked, the overlapping of objects allowed when move existing elements.
* **Window layout** - The type of the workspace layout: as sub-windows (like the classic SMBX editor) or as tabs 
like in the browser.
* **Associate file extensions** - Register supported file types and assign them with the Editor: you can open those
files in the Editor directly from a file manager.

<ImageZoom
  alt="AppSettingsMain"
  url="screenshots/AppSettings/AppSettings_main.png"
  :border="true"
/>

## Editor
Here you can enable or disable editing process features.

* Middle mouse button (a wheel pressed as a button) actions:
  * **Duplicate selected items into mouse position** - this means: if you press a middle mouse button while some 
  group of elements selected, all selected items will be duplicated into current mouse position at left-top corner.
  * **Switch placing mode of selected item** - this means: if you have one element selected, the pressing of a middle 
  mouse button will pick up the selected element, and you can place more of it, almost same as with the classic SMBX Editor.
  * **Switch to drag scroll** - if you press the middle mouse button with no elements selected, the drag-scroll 
  mode will be switched.

* **Don't show properties box on taking item to place** - Item properties toolbox will don't appear when you take items
for the placing. Then, if you want to open the properties toolbox, use the "Properties" button on the toolbar.
* **Default zoom** - Choose the initial zoom value state.
* **Max history entries limit** - Defines the actions' history depth: how many actions can be remembered by the history.
* **Screen capture default size** - Defines the initial size for the yellow box for the scene area capturing to export 
it to the image file.

<ImageZoom
  alt="AppSettingsEditor"
  url="screenshots/AppSettings/AppSettings_editor.png"
  :border="true"
/>

## Defaults
Here you can redefine initial state of properties boxes when you place new elements, creating events or configuring warps.

* **NPC Settings** - Default properties for new NPCs.
* **Warps and Doors** - Default properties for new warp entries.
* **Classic Events tabs to auto-expand** - Choose which event actions blocks need to keep always expanded with
no matter are they match their default states or not.

<ImageZoom
  alt="AppSettingsDefaults"
  url="screenshots/AppSettings/AppSettings_defaults.png"
  :border="true"
/>

## View
Here you can set up some view settings. For example, tab direction of the toolboxes.
Also, here you can change the font size and interface theme from the `themes/` directory.

* **Level Item Toolbox** - The type tabs orientation for the Level Items Search Browser.
* **World Mao Item Toolbox** - The type tabs orientation for the World Map Items Search Browser.
* **Tileset Item Toolbox** - The type tabs orientation for the Tilesets Item Toolbox.
* **Font** - UI Font settings.
  * **Use default** - Prefer the system default font settings.
  * **Font size** - Change the UI font size.
* **Theme** - Change the Editor UI look.
  * **Theme** - Select the icons and cursors theme from the list.
  * **Palette** - Select the UI color palette.
  
<Note type="warning">
Palette change will be properly applied after the Editor application restart.
</Note>

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_view.png"
  :border="true"
/>


## Logging 
Here you can set log file, where editor will write its work process logs.

**Log level** - A filter that allows you to write specific message types into the log file.
* **Debug** - The most detailed log, all messages will be written.
* **Warning** - Warnings, errors, and fatal errors only will be written.
* **Critical** - Errors and fatal errors only will be written.
* **Fatal** - Fatal errors only will be written.
* **System messages** - Some system messages will be written.
* **Disable logging** - Don't write any messages into log files.

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_logging.png"
  :border="true"
/>

## Extra
Here you can find some special and unusual settings.

* **Enable auto-scaling on high-DPI monitors** - Enables UI scaling together with the system wide monitor scale factor.

<Note type="warning">
To apply the change for this option you need to restart the Editor application.
</Note>

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_extra.png"
  :border="true"
/>
