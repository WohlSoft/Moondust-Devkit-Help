# Testing
## Overview
While you work on your levels, you would want to quickly run your level in action
to verify the behavior.

**TODO: Clarify this page better**

![testMenu](screenshots/menus/005_test.png)

Editor has a support of level testing via different runtime engines. You may use any of supported engines
and optionally change their settings by a specific sub-menu.

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

If needed, you can tune your **Testing options** to select a playable characters, count of players,
enable some cheating or debug features, set a specific state of playable characters, etc.


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

## TheXTech
![testMenu](screenshots/menus/005_test_thextech.png)

It's the full C++ port of SMBX Engine 1.3, created from the source code published on February 2, 2020. 
It's the accurate replica of vanilla SMBX engine with the full Editor integration support and 
some other PGE standard extras. You can run testing of new-made or unsaved files on the fly. While test
is running, you can select any of elements on Editor's tileset box or item search browser and place
them into running game window directly. You can pick-up elements by mouse click on elements inside of running game.
Use a middle mouse button to turn on the eraser to remove elements around.

## LunaTester
![testMenu](screenshots/menus/005_test_luna.png)

It's a bridge proxy which allows you to use LunaLua equipped vanilla SMBX to run level tests on it.

Pre-requirements:
* LunaLua 0.7.3.1 or newer is required. If you have to use SMBX2 packages, you need to have an SMBX 2.0 Beta 3 or higher.
* Windows 7 or higher, or Wine (3.0 and higher is recommended) with installed DirectX 9 or 11, MSVC2015 runtime, quartz, dsound, and VB6RUN.
* Video drivers installed in your system, otherwise, game will not work or at least will lag.

You can run testing of new-made or unsaved files on the fly.
 

## SMBX-38A
![testMenu](screenshots/menus/005_test_38a.png)

It's a bridge proxy which allows you to use SMBX-38A engine to run level tests on it.

Pre-requirements:
* Windows XP or higher, or Wine (3.0 and higher is recommended) with installed DirectX 9, quartz, dsound, and VB6RUN.
* Video drivers installed in your system, otherwise, game will not work. 
* SMBX-38A v1.4.3 and higher.
