# Events
## Overview
**Events** - there are automatic actions that allow you to dynamically control the game process and make dynamic changes of level, game, or settings of objects. They can be automatically started by special actions called triggers.

To add a new event to the list, simply press the "+" button. To remove - "-". You can duplicate the current layer by clicking to "Create a copy of the event" button.

The event will start automatically on level start if you check an "**Autostart**" checkbox.

There are some built-in events that you can't remove:
- "**Level - start**" - starts automatically on level start-up. You can use it to set an initial visibly of layers, show greeting message, start moving of spike wall, etc.
- "**P Switch - Start**" - starts if you will activate the special item called "P-Switch". You can make, for example, a showing of layers with a surprise for your playable character.
- "**P Switch - stop**" - This event starts if the P-Switch timer was the end. This event can be used, for example, to hide the same layer with a surprise.

<Note type="tip">
You can drag event items in a list to change their order
</Note>

<Note type="tip">
You can rename an event by double click on the layer name. The new name of the event will be applied to all items which using them without loss of connections.
</Note>

_Events toolbox_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/001Events_list.png"
width="200px"
:border="true"
/>

* [Layer visibility](#layer-visibility)
* [Layer motion](#layer-motion)
* [Auto-scroll sections](#auto-scroll-sections)
* [Change section settings](#change-section-settings)
* [Common event actions](#common-actions)
* [Force player controls](#force-player-controls)
* [Trigger another event](#trigger-another-event)

## Layer visibility
This options list allows for changing the visibility of layers. I.e. visibly of all items which are members of the target layer.

To add a layer to the list, please, select them in the list, and press "+" to add this layer to its list.

To remove a layer from the list, select layer in one of three lists and press "-".

<Note type="warning">
Note: If you have an SMBX64 LVL file format, you will get a limit of layers for every list in 20 entries. Layers outed from 20 items per list will not be saved in SMBX format. By SMBX 1.3 Editor it's possible to add 21 layers into each list, however, here is a bug, that makes no way to remove layers from a list. Instead, it copies the last layer entry instead of the removed layer.
</Note>

_Layer visibly tab_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/002_layer_visibly.png"
width="200px"
:border="true"
/>

## Layer motion
Here you can configure the movement for solid and statical items that are members of a target layer.

Layer that is selected in a list will be moved with a specified speed in the next directions:

**Horizontal speed**:
- If <0 - move to left.
- If >0 - move to the right
- If =0 - stop

**Vertical speed**:
- If <0 - move up
- If >0 - move to down
- If =0 - stop

_Layer move list_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/003_moveLayer.png"
width="200px"
:border="true"
/>


## Auto-scroll sections
Here you can define auto-scrolling of the target section.

<Note type="warning">
<strong>Notes!</strong><br/>
<ul>
    <li>Don't forget to define target section size in the section properties
    of same event. If you wasn't redefine of section. 
    Auto-scroll will not be working.</li>
    <li><span style="color: #af0000;">If you want to use auto-scrolling in the SMBX, 
    <span style="color: red;">be careful</span>, 
    because SMBX engine has a bug: 
    Auto-scroll will work only for one section and only if this section contains a 
    start point of playable character and when event contains auto-scrolling definition
    will be triggered via special "Level - Start" event. If you will try auto-scroll
    another section, it will not work!</span></li>
</ul>
</Note>

**Horizontal speed**:
- If <0 - move to left.
- If >0 - move to the right
- If =0 - stop

**Vertical speed**:
- If <0 - move up
- If >0 - move to down
- If =0 - stop

_Layer move list_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/004_autoscroll.png"
width="200px"
:border="true"
/>

### How to make the auto-scroll of the section
1) In the first step, you should define the default section size which will be auto-scrolled.

2) Open in the same event the "section settings" tab and then mark "define new" and set a size of auto-scrollable part of screen. You can click "Capture" button to define size of the scrollable part of the section in the interactive mode:
   <br/><ImageZoom
   alt="eventsList"
   url="screenshots/LevelEditing/Events/006_capture_size.png"
   width="200px"
   :border="true"
   />
   <br/>There are examples of auto-scrolling areas:
   <br/><ImageZoom
   alt="eventsList"
   url="screenshots/LevelEditing/Events/Autoscroll_examples.png"
   width="200px"
   :border="true"
   />

3) Set the number of a section that will be auto-scrolled and the speed X and speed Y values.

<Note type="warning">
Don't forget to mark this event to auto start! (requires by SMBX, if you will play the same level in the Moondust Engine, auto-scroll can be toggled via side event triggers (blocks or NPC's))
</Note>

If you made everything correctly, the screen will start scrolling when this level will be started, when you will enter into a section with defined auto-scrolling, and when you will toggle auto-scroll via side event triggers.

## Change section settings
Here you can set options for each section of this level. You can define: music, background, and size/position of the selected section.

Inside one event, you can define options for slightly sections one event. Also, you can restore the default settings of the target section, defined by section settings.

**Set settings for section...** - select the slot of settings for each section. You can define in one event changes for multiple sections, in SMBX are available by the engine, but too difficult for made by SMBX editor. Here this is fully available.

**Set size and position** - This option can dynamically redefine the section size and reset the size to default.

**Change music** - This option can change the music of the selected section, or switch to section default.

**Change background** - This option can change the background of the selected section.

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/005_section_settings.png"
width="200px"
:border="true"
/>

_Capturing of new size what will be defined by event_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/006_capture_size.png"
width="200px"
:border="true"
/>

## Common actions
Here you can:
- Display message box
- Play sound from the list
- Start the end of a game algorithm: Play end of game fanfares -> show credits screen -> save game, return to the main menu

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/007_common.png"
width="200px"
:border="true"
/>

_Message box editing_

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/MessageBox.png"
width="200px"
:border="true"
/>

<Note type="warning">
Keep a note that all new-line characters will be removed if you save them into SMBX64 LVL format. Use extra-spaces as a workaround.
</Note>


## Force player controls
Here you can control a playable character to automate its actions.

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/008_player_control.png"
width="200px"
:border="true"
/>

## Trigger another event
This feature allows the execution of another event after running this. You also can specify a delay before executing the target event.

<ImageZoom
alt="eventsList"
url="screenshots/LevelEditing/Events/009_trigger.png"
width="200px"
:border="true"
/>
