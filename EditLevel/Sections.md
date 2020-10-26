# Sections

## About sections

**Section** - separated sub-area of level which have his own settings: music, background, physics, etc. Player can move between sections by special points - warps. All sections placed in a single space, and you can see many sections, but you can set settings only for current section.
 
_Section swith panel. here you can quickly switch to another section_

<ImageZoom 
  alt="Section_Switch"
  url="screenshots/LevelEditing/Section_Switch.png" 
  :border="true" 
/>

If you list in huge level space, you have possible to instant return to left-bottom, left-top, right-top, or right-bottom current section's corner. On switching between sections, your last position will be saved, and on switching back will be restored in same coordinates.

## Change settings

<u>Each section have next individual settings</u>:

- **Music**: on this section will be played selected music
- **Custom music file**: here you will define custom music file, what allows to use music not from staff list.
- **Background**: it is a picture, what will be shown in back of this section.
- **Connect left-right sides (Level Warp)**: all outed off screen objects will be appeared and entered from opposite side of this section.
- **Offscreen exit**: allows to player exit from level on go out from screen of this section
- **One-way scrolling (No turn back)**: allows to move player only to right side. Camera will not be scrolled to left.
- **Underwater**: sets the default physical environment of section be water. When this option is unchecked, the default physical environment of the section is an air.

For show section settings toolbox, simply press on special icon on toolbox, or menuitem \[View -> Section settings\]

Here you can edit all section settings and resize the section.

_Section settings toolbox_

<ImageZoom 
  alt="0toolbox_section"
  url="screenshots/LevelEditing/Section/0toolbox_section.png" 
  :border="true" 
/>

You can set music from list, or you can use your custom music files. You must place this files into same folder with level file of into any sub-directory inside directory with your level file.

_Music list window (Displaying all music files, even inside sub-directories)_

<ImageZoom 
  alt="0toolbox_section_musiclist"
  url="screenshots/LevelEditing/Section/0toolbox_section_musiclist.png" 
  :border="true" 
/>


**Custom** checkbox will be set automatically if you select in the music list the "Custom". And then you check the custom checkbox, "Custom" field in the music list will be selected automatically.

**Custom music** field must content the filename of custom music. You can use relative paths, but recommend using the "/" separator instead "\".

_Custom music field_

![0toolbox_section_musicPath](screenshots/LevelEditing/Section/0toolbox_section_musicPath.png)

## Resizing

Sections can have any size. You can resize section, if you will open Section properties toolbox and click on the "Resize" button. After them, will be appeared big green rectangle. Drag and move his corners, for set necessary size. After you made resize, please, press to ENTER key for accent resize, or ESC for cancel resizing (same buttons on the section settings toolbox).

The <u>minimal section size</u> is a 800x600, but later will be implemented special setting for change this limit, for example, create games with NES/SNES screen size.

<p class="tip">Note: If you wish to get more features of resize box (green net which
defined new size of section), click inside of them by right mouse button.
</p>

The context menu has actions:
* **Cut top here** - moves top boundary of box to current mouse position
* **Cut left here** - moves left boundary of box to current mouse position
* **Cut right here** - moves right boundary of box to current mouse position
* **Cut bottom here** - moves bottom boundary of box to current mouse position
* **Don't snap to grid** - disables grid snapping on moving of box boundaries
* **Disable minimal size limit** - gives ability to set size less than minimally available size

_Section resizing process_

<ImageZoom 
  alt="0toolbox_section_resize"
  url="screenshots/LevelEditing/Section/0toolbox_section_resize.png" 
  :border="true" 
/>
