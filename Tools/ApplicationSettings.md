# Application settings
## Overview
Here you can configure the Editor application.

## Main
* **Autoplay music** - Automatically start music playing on file opening.
* **Animation** - Enable item animations playing.
* **Animation items limit** - Automatically disable any animations playing when level or world map gets too many elements. 
This feature should help you to avoid Editor lag on slower computers. 
* **Collision detection** - This feature enables a checking of collisions on items move.
* **Document view** - The definition of opened document layout: as sub-windows or as tabs.
* **Associate file extensions** - This feature allows direct file opening from your file manager.

<ImageZoom
  alt="AppSettingsMain"
  url="screenshots/AppSettings/AppSettings_main.png"
  :border="true"
/>

## Editor
Here you can enable or disable editing process features.

* Middle mouse button actions:
  * **Duplicate selected items into mouse position** - this means: when you press middle mouse button, all selected items will be duplicated into current mouse position relative to left-top corner.
  * **Switch placing mode of selected item** - this means: you can switch placing mode if you select one of items. This feature nearly to SMBX's selection tool which always switch placing mode of selected item.
  * **Switch to drag scroll** - if your map haven't selected items, you will switch into drag scroll mode.

* **Don't show properties box on taking item to place** - Properties box will not be shown when you take items from item boxes. To open properties dialog use the "Properties" button on the toolbar.
* **Default zoom** - Allows you to set the initial zoom state for any files.
* **Max history entries limit** - Defines how much history actions can be remembered.
* **Screen capture default size** - Defines the initial size for the yellow box when capturing the scene area for image exporting.

<ImageZoom
  alt="AppSettingsEditor"
  url="screenshots/AppSettings/AppSettings_editor.png"
  :border="true"
/>

## Defaults
Here you can redefine initial state of properties boxes when you placing elements, creating events or configuring warps.

<ImageZoom
  alt="AppSettingsDefaults"
  url="screenshots/AppSettings/AppSettings_defaults.png"
  :border="true"
/>

## View
Here you can set up some view settings. For example, tab direction of the toolboxes.
Also, here you can change the font size and interface theme from the `themes/` directory.

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_view.png"
  :border="true"
/>


## Logging 
Here you can set log file, where editor will write its work process logs.

**Log level** - is a filter which allow write or anything, or only warnings or errors. Also you can disable logging.

* **Debug** - must detail log, will be write into log any messages
* **Warning** - will be logged warnings, critical and fatal error messages
* **Critical** - will be logged critical and fatal error messages
* **Fatal** - log only fatal messages 

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_logging.png"
  :border="true"
/>

## Extra
Here you can find some special and unusual settings.

* **Enable auto-scaling on high-DPI monitors** - Enables UI scaling together with the system wide monitor scale factor.
To apply the change for this option you need to restart the Editor application.

<ImageZoom
  alt="AppSettingsView"
  url="screenshots/AppSettings/AppSettings_extra.png"
  :border="true"
/>
