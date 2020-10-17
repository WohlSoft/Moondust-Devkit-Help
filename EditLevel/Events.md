# Events
## Overview
**Events** - there are automatic actions which allows you to dynamically control the game process and make dynamical changes of level, game, or settings of objects. They can be automatically started by special actions called as triggers.

To add a new event into the list, simply press to the "+" button. To remove - "-". You can duplicate current layer by clicking to "cln" **clone** button.

Event will start automatically on level start if you check an "**Autostart**" checkbox.
 
There are some built-in events which you can't remove: 
- "**Level - start**" - starts automatically on level start-up. You can use it to set an initial visibly of layers, show greeting message, start moving of spike wall, etc.
- "**P Switch - Start**" - starts if you will activate the special item called as "P-Switch". You can make, for example, a showing of layers with a surprise for your playable character.
- "**P Switch - stop**" - This event starts if P-Switch timer was end. This event can be used, for example, to hide the same layer with a surprise.

<p class="tip">
     You can drag event items in a list to change their order
</p>

<p class="tip">
    You can rename event by double click on layer name. New name of event will be applied to all items which using them without losing of connections.
</p>

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
This option list allows to change visibly of layers. I.e. visibly of all items, what is a member of target layer. 

For add layer into the list, please, select them in list, and press to "+" for add this layer for his list.

For remove layer from list, select layer in one of three lists and press "-".

<p class="warning">
    Note: If you have an SMBX64 LVL file format, you will get a limit of layers for every list in 20 entries. Layers outed from 20 items per list will not be saved in SMBX format. By SMBX 1.3 Editor it's possible to add 21 layer into each list, however, here is a bug, that makes no way to remove layers from a list. Instead, it copies the last layer entry instead of removed layer.
</p>

_Layer visibly tab_

<ImageZoom
  alt="eventsList"
  url="screenshots/LevelEditing/Events/002_layer_visibly.png"
  width="200px"
  :border="true"
/>

## Layer motion
Here you can configure the movement for solid and statical items which are members of a target layer.

Layer that is selected in a list will be moved with a specified speed in next directions: 

**Horizontal speed**:
- If <0 - move to left.
- If >0 - move to right
- If =0 - stop

**Vertical speed**:
- If <0 - move to up
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
Here you can define auto-scrolling of target section.

<p class="warning">
    <strong>Notes!</strong><br/>
    <ul>
        <li>Don't forget to define target section size in the section properties
        of same event. If you wasn't redefine of section. 
        Auto-scroll will not be working.</li>
        <li><span style="color: darkred;">If you want to use auto-scrolling in the SMBX, 
        <span style="color: red;">be careful</span>, 
        because SMBX engine has a bug: 
        Auto-scroll will work only for one section and only if this section contains a 
        start point of playable character and when event contains auto-scrolling definition
        will be triggered via special "Level - Start" event. If you will try auto-scroll
        another section, it will not work!</span></li>
    </ul>
</p>

**Horizontal speed**:
- If <0 - move to left.
- If >0 - move to right
- If =0 - stop

**Vertical speed**:
- If <0 - move to up
- If >0 - move to down
- If =0 - stop

_Layer move list_

<ImageZoom
  alt="eventsList"
  url="screenshots/LevelEditing/Events/004_autoscroll.png"
  width="200px"
  :border="true"
/>

### How to make the autoscroll of the section
1) In first step, you should to define the default section size which will be auto-scrolled.

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

3) Set the number of section which will be auto-scrolled and the speed X and speed Y values.

<p class="warning">
    Don't forget to mark this event to auto start! (requires by SMBX, if you will play same level in the PGE Engine, auto-scroll can be toggled via side event triggers (blocks or NPC's))
</p>

If you made everything correctly, the screen will start scrolling when this level will be started, when you will enter into section with defined auto-scrolling and when you will toggle auto-scroll via side event triggers.

## Change section settings
Here you can set options for each section of this level. You can define: music, background and size/position of selected section.

Inside one event, you can define options for slightly sections in one event. Also you can restore default settings of target section, what defined by section settings.

**Set settings for section...** - select the slot of settings for each sections. You can define in one event changes for multiple sections, in SMBX are available by engine, but too difficult for made by SMBX editor. Here this are fully available.

**Set size and position** - This option can dynamically re-define the section size and reset size to default.

**Change music** - This option can change music of selected section, or switch to section default.

**Change background** - This option can change the background of selected section.

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
- Play sound from list
- Start end of game algorithm: Play end of game fanfares -> show credits screen -> save game, return to main menu

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

<p class="warning">
    Keep a note that all new-line characters will be removed if you save into SMBX64 LVL format. Use extra-spaces as a workaround.
</p>


## Force player controls
Here you can control playable character to automate it's actions.

<ImageZoom
  alt="eventsList"
  url="screenshots/LevelEditing/Events/008_player_control.png"
  width="200px"
  :border="true"
/>

## Trigger another event
This feature allows to execute an another event after running of this. You also can specify a delay before to execute the target event.

<ImageZoom
  alt="eventsList"
  url="screenshots/LevelEditing/Events/009_trigger.png"
  width="200px"
  :border="true"
/>
