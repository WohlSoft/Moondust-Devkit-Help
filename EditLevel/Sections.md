# Sections

## About sections

**Section** - is the separated sub-area of a level. It has its settings such as background music, background images, physics, etc. A player can move between sections by the special points called warps. All sections are in the united space, and you can see many sections at the same time, however, you can change settings of only one section at one time.

_Section switch panel. here you can quickly switch to another section_

<ImageZoom
alt="Section_Switch"
url="screenshots/LevelEditing/Section_Switch.png"
:border="true"
/>

If you list in huge level space, you can immediately return to the left-bottom, left-top, right-top, or right-bottom corner of the current section. While switching between different sections, your last position will be kept. Оnce you switch the previous section back the last position will be restored at the same coordinates.

## Change settings

<u>Each section have next individual settings</u>:

- **Music** - Choose background music for this section.
- **Custom music file** - Choose an external music file to use as background music.
- **Background** - It's a picture that will appear at the back of this section.
- **Connect left-right sides (Level Warp)** - All objects gone out of section boundaries horizontally will come back from the opposite side of this section.
- **Offscreen exit** - Gives the ability player exit from the level by walking off boundaries.
- **One-way scrolling (No turn back)**: allows moving player only to the right direction. The camera will don't scroll left.
- **Underwater**: sets the default physical environment of the section to be water. When this option is unchecked, the default physical environment of the section is air.

To open the section settings toolbox, click the icon on the toolbox or `View -> Section settings` menu item.

Here you can change all section settings and resize the section.

_Section settings toolbox_

<ImageZoom
alt="0toolbox_section"
url="screenshots/LevelEditing/Section/0toolbox_section.png"
:border="true"
/>

You can set background music from the list, or you can use your custom music files. You must place these files into the same folder with the level file of any sub-directory inside directory with your level file.

_Music list window (Displaying all music files, even inside sub-directories)_

<ImageZoom
alt="0toolbox_section_musiclist"
url="screenshots/LevelEditing/Section/0toolbox_section_musiclist.png"
:border="true"
/>


**Custom** checkbox will be automatically enabled when you select the "Custom" item at the music list. Then, when you enable the "custom" checkbox, the "Custom" entry at the music list will automatically appear.

**Custom music** field must contain the filename of custom music. You can use relative paths, but recommend using the "/" separator instead of "\\".

_Custom music field_

![0toolbox_section_musicPath](screenshots/LevelEditing/Section/0toolbox_section_musicPath.png)

## Resizing

Sections can have any size. You can resize the section from the section properties toolbox by clicking the "Resize" button. After this, the big green rectangle will appear. Drag and move it by its corners to set the necessary size. Once you completed the resizing, press the ENTER key to accept the resizing or ESC key to cancel resizing (same buttons on the section settings toolbox).

The <u>minimal default section size</u> is 800x600. This value may depend on the configuration package settings.

<Note type="tip">
Note: If you want to get more features from the resizer box (green net which defined the new size of the section), click it by the right mouse button.
</Note>

The context menu has the next actions:
* **Cut top here** - move the top boundary of the box to the current mouse position.
* **Cut left here** - move the left boundary of the box to the current mouse position.
* **Cut right here** - move the right boundary of the box to the current mouse position.
* **Cut bottom here** - move the bottom boundary of the box to the current mouse position.
* **Don't snap to grid** - disables grid snapping on moving of box boundaries.
* **Disable minimal size limit** - gives the ability to set size less than minimally available size.

_Section resizing process_

<ImageZoom
alt="0toolbox_section_resize"
url="screenshots/LevelEditing/Section/0toolbox_section_resize.png"
:border="true"
/>
