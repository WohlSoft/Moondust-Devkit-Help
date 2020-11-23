# Custom data helper tools
Custom data tools are allows you to automatize some processes with a custom data and graphics.

## Clear unused custom data
Moves away a custom files which are never used in the levels. All files are will be moved into new-made sub-folder.

## Custom graphics import
Copies custom data files from chosen folder into level/world custom folder. You also can drag & drop 
folder with a graphics into level/world editing sub-window to import data from it.

## Fixing broken masks
Fixes all broken or [lazily-made](/Customizing/BitMasks#lazily-made-masks) masks in the custom folder of a level or a world map.

## Clean-up of junk NPCs after place bug at SMBX 1.3
This feature detects junk vine/ladder NPCs and removes them.
 
Some levels may contain an anomaly big quantity of NPC objects: classic SMBX Editor had the bug which results the spam
of vine or ladder NPCs while placing: because of no anti-overlap protection worked on those NPCs, if user had enabled
auto-aligning option, at the same place the dozen of NPCs will be placed. In result, instead of 18 NPCs, you'll place 
~161 at one moment. You can [watch the video](https://www.youtube.com/watch?v=d6qbuY6VVCY) that shows this bug in action.

