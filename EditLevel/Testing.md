# Testing
## Overview
While you work on your levels, you would want to quickly run your level in action
to verify the behavior.

![testMenu](screenshots/menus/005_test.png)

Editor has a support of level testing via different runtime engines. You may use any of supported engines
and optionally change their settings by a special sub-menu.

<p class="warning">
    In a dependency from a config pack used, a different engine may be used as default runtime. 
    Also it may disable an ability to choose any other engine than default for a level testing.
</p>

To start a level testing, open the **Test** menu and select the **Test level** menu item, 
or simply press the **F5** key on your keyboard. Alternatively, you can use menu of each supported engine to run 
a level test on a different engine than used by default.

For some cases, you may want to **Test a saved file**: you will run a testing of a level file state 
currently saved on the disk. This option doesn't support an Editor integration.

You may want to **Start Game** if you want to change your game control setup or run an episode playing.

If needed, you can tune your **Testing options** to select playable characters, count of players,
enable some cheating or debug features, set a specific state of playable characters, etc.

For engines are working on Windows, Editor has a support for an IPC bridges which can work on Wine. 
Therefore, if you use Editor on a non-Windows operating system, you will find an extra menu item in menus of
LunaTester and SMBX-38A which allowing you to configure Wine usage and even choose a different Wine installation (see [Wine Settings](#wine-settings)).

## Test settings
<ImageZoom
  alt="eventsList"
  url="screenshots/Testing/test_settings.png"
  width="200px"
  :border="true"
/>

It's a dialog of generic settings which allows you to configure some features: choose 1 or 2 players game, 
select playable characters and their states, add vehicles/mounts, etc.

**There are some extra settings:**
- **God Mode** - Makes your playable character being invincible to dangerous NPCs and surfaces.
- **Unlimited Flight** - Allows your playable character to fly up by using of Alt-Jump key (PGE Engine only).
- **Bulldozer mode** - Allows your playable character to destroy any nearest objects by Alt-Run key (PGE Engine only).
- **Walk Anywhere** - Allows your playable character to walk on a world map out of paths (PGE Engine only).
- **Debug info** - Enables printing of various debug information on the screen (PGE Engine only).
- **Show frame speed** - Enables printing of FPS count at left-top corner (SMBX-38A and TheXTech only).
- **Physics debug** - Enables drawing of hit boxes of all objects include invisible (PGE Engine only).


## PGE Engine
<p class="warning">
    Be careful, Engine part is under construction, and a lots of features wasn't implemented yet.
</p>

![testMenu](screenshots/menus/005_test_pge_engine.png)

This is an own runtime engine of PGE Project. This engine has the full integration with Editor and
supports all main features. You can run testing of new-made or unsaved files on the fly. While test
is running, you can select any of elements on Editor's tileset box or item search browser and place
them into running game window directly.

It's recommended to read the manual written in the [Engine.Readme.txt](https://raw.githubusercontent.com/Wohlhabend-Networks/PGE-Project/master/Content/readmes/Engine.Readme.txt) file included with PGE Engine.

**Menu options:**
- **Test level/world** - Start a direct testing of currently loaded level data even file is unsaved.
- **Test saved level/world** - Starts a testing of currently opened level by opening it from a disk.
- **Start Game** - Start a normal game with using of a currently loaded configuration package. 

## TheXTech
![testMenu](screenshots/menus/005_test_thextech.png)

It's the full C++ port of SMBX Engine 1.3, created from the source code published on February 2, 2020. 
It's the accurate replica of vanilla SMBX engine with the full Editor integration support and 
some other PGE standard extras. You can run testing of new-made or unsaved files on the fly. While test
is running, you can select any of elements on Editor's tileset box or item search browser and place
them into running game window directly. You can pick-up elements by mouse click on elements inside of running game.
Use a middle mouse button to turn on the eraser to remove elements around.

**Menu options:**
- **Test level** - Start a direct testing of currently loaded level data even file is unsaved.
- **Test level in battle mode** - Start a level testing in battle mode.
- **Test saved level** - Starts a testing of currently opened level by opening it from a disk.
- **Graphics type** - Select a graphical sub-system for use.
  - **Default** - Graphical sub-system will be automatically detected.
  - **Software rendering** - Use a software rendering without acceleration. Use this if hardware 
  acceleration does not work, or it works incorrectly and glitchy. May work slow on some systems.
  - **Accelerated** - Use a hardware-accelerated rendering sub-system. Used by default.
  - **Accelerated with V-Sync** - Use a hardware-accelerated rendering sub-system with using of 
  vertical synchronization to make a smoother rendering. May slow-down the game process, suggested 
  to switch the monitor refresh rate into 75 hz if possible.
- **Enable magic hand** - Allows to use a mouse to pick-up elements from a working game directly. As well as 
placing new elements taken in tilesets and item browsers.
- **Enabme max FPS** - disables limit on FPS count and turns on the free rendering. In some cases may look
like Fast-Forwarding of a video cassete.
- **Enable grab all** - Allows playable character to grab any NPC without exceptions.
- **Change the path to TheXTech** - Allows you to select the executable path to make testing work. You may
choice a different assembly of TheXTech to use for some moment.  
- **Start Game** - Start a normal game with using of a currently loaded configuration package. 

## LunaTester
![testMenu](screenshots/menus/005_test_luna.png)

It's a bridge proxy which allows you to use LunaLua equipped vanilla SMBX to run level tests on it.

**Pre-requirements:**
* LunaLua 0.7.3.1 or newer is required. If you have to use SMBX2 packages, you need to have an SMBX 2.0 Beta 3 or higher.
* Windows 7 or higher, or Wine (3.0 and higher is recommended) with installed DirectX 9 or 11, MSVC2015 runtime, quartz, dsound, and VB6RUN.
* Video drivers installed in your system, otherwise, game will not work or at least will lag.

You can run testing of new-made or unsaved files on the fly.

**Menu options:**
- **Test level** - Start a direct testing of currently loaded level data even file is unsaved.
- **Test saved level/world** - Starts a testing of currently opened level or world map by opening it from a disk.
- **Reset checkpoints** - Resets state of checkpoints in a condition that background instance is running.
- **Disable OpenGL** - Enforce using of software render.
- **Keep running in background** - Game will keep running in background even you will close window to allow 
quick running of a game.
- **Terminate running process** - Kills the working background process. Use this in a condition when the game 
does not respond a long time.
- **Change the path to LunaTester** - Allows you to select the path to LunaLua-SMBX or SMBX2 data directory to make LunaTester work. 
You may choice a different assembly of LunaLua-SMBX to use for some moment.
- **[Wine settings...](#Wine-settings)** - (non-Windows operating systems only) Allows you to configure settings of Wine or choose 
a different Wine installation (for example, import from a PlayOnLinux / PlayOnMac toolchain).
- **Start Game** - Start a normal game of LunaLua-SMBX or SMBX2.


## SMBX-38A
![testMenu](screenshots/menus/005_test_38a.png)

It's a bridge proxy which allows you to use SMBX-38A engine to run level tests on it.

**Pre-requirements:**
* Windows XP or higher, or Wine (3.0 and higher is recommended) with installed DirectX 9, quartz, dsound, and VB6RUN.
* Video drivers installed in your system, otherwise, game will not work. 
* SMBX-38A v1.4.3 and higher.


**Menu options:**
- **Test level** - Start a direct testing of currently loaded level data even file is unsaved.
- **Test level in battle mode** - Start a level testing in battle mode.
- **Test saved level/world** - Starts a testing of currently opened level or world map by opening it from a disk.
- **Reset checkpoints** - Resets state of checkpoints left after the last test playing.
- **Enable magic hand** - Allows to use a mouse to pick-up elements from a working game directly. As well as 
placing new elements taken in tilesets and item browsers.
- **Don't auto-suspend game** - Makes game never suspend when game window is unfocused.
- **Change the path to SMBX-38A** - Allows you to select the path to SMBX-38A executable to make the testing work. 
You may choice a different assembly of SMBx-38A to use for some moment.
- **[Wine settings...](#Wine-settings)** - (non-Windows operating systems only) Allows you to configure settings of Wine or choose 
a different Wine installation (for example, import from a PlayOnLinux / PlayOnMac toolchain).
- **Start Game** - Start a normal game of SMBX-38A

## Wine settings
<ImageZoom
  alt="eventsList"
  url="screenshots/Testing/wine_settings.png"
  width="200px"
  :border="true"
/>

This dialog allows you to configure a work of Wine on non-Windows operating system to make 
a proper work of LunaTester and SMBX-38A engines.

**Location of Wine**

Here you should to choose which Wine installation to use: installed into your operating system, or select 
a different one (for example, one of builds installed into your PlayOnLinux/PlayOnMac toolchain).

**Enable Wine debug printing into "WineDebug" console** - allows you to get all Wine debug output messages into
Editor's development console which you can open in **Help** -> **Show development console** menu.

**Specify a custom environment (PlayOnLinux/Mac)** - allows you to configure some default locations used by Wine
(for example, a home prefix where are your c_drive and registry data stored).

**Import setup from PlayOnLinux/PlayOnMac** - a help tool which allows you to select an existing PlayOnLinux/Mac 
profile and import Wine paths and settings from it to use in Editor to run level tests and episode playing.

**Test** - a helpful utility which allows you to verify the work of selected Wine toolchain.
