# How to use custom graphics
There usually comes a time when you find the need to replace the default images with your own custom graphics. This is possible without overwriting any of the default images. Custom graphics are a great way to make your game episode unique and colorful.

The process is quite simple, but for those of you who don't know how, here is an in depth look at using custom graphics with the editor.

## Level and episode folders
When using custom graphics, it's not necessary to replace any global data, you simply have to put your graphics in the per level or per episode folder of your game. All level files of an episode are placed together in this one folder.

Level Custom Folders - are folders which have the same name as the level file. For example, the folder name for the level "Dracula.lvlx" would be "Dracula".
<ImageZoom 
  alt="tree"
  url="screenshots/Customizing/tree.png" 
  :border="true" 
/>
Placing custom graphic files with a bunch of level files together means they will be customized to all other levels in the episode, but when you put the graphics in the level custom folder, the graphics will be customized for that level only.

It's also possible to replace graphics in world maps. Accordingly, the same goes for creating a World Custom Folder, the folder which has the same name as the world map file.

<p class="tip">
	If you're going to play your episode with the SMBX game engine, you shouldn't make a world custom folder, as SMBX does not support custom folders for world maps. Instead you'll have to place the graphics in the episode folder along with the world map files.
</p>

## Customizing level graphics

To replace the blocks, you'll need to create graphic files with names such as"block-*.ext". * standing for the ID of the block you are replacing, and "ext" is an image file extension. SMBX uses the GIF format without transparency. If you want to use transparency, you will have to create a transparency mask for your image. The mask image should have a name like "block-*m.ext". An example would be "block-23.gif" for the source image and "block-23m.gif" for the mask image, which defines the transparency pixels. The filename of the target image file you're customizing, can be found in the global image directory of your config pack.
<p class="tip">
	Keep in mind that for SMBX you should use the GIF format for mask images. The blocks have three types of graphics: Static, Animated and Sizabled.
</p>
Static blocks have one static frame. You can use images with any sizes, but you have to use the same format which your game confiig uses for levels and episodes.																																								
<ImageZoom 
  alt="brick"
  url="screenshots/Customizing/brick.png" 
  :border="true" 
/>		

Animated blocks have a vertical frameset image. Each frame must have same height and your image must have same frame number as the original block.						
<ImageZoom 
  alt="brick_animated"
  url="screenshots/Customizing/brick_animated.png" 
  :border="true" 
/>						

Sizabled blocks are one image divided into 9 pieces which are called "Corners", "Sides" and "Center". Sizabled blocks can also have any size along with being resized. Sizabled blocks are displayed under most of the BGO's.																																						
<ImageZoom 
  alt="block_sizable"
  url="screenshots/Customizing/block_sizable.png" 
  :border="true" 
/>			
							
<p class="warning">
	If you're customizing a sizeabled block for SMBX, the image should have an image size of 96x96 pixels.
</p>
Background objects are the simple scenery of levels. Sceneries have only two types which are, static and animated. BGO images are similar to Blocks, but have one difference: If you're going to use your episode with SMBX, the images must have the exact same size as the original sprite. The image filenames of BGO's usually are something like "background-*.ext".
Be careful when using BGOs: the BGOs are shared by the Z-position: background-2 Z-level, which is the lowest Z-level, these BGOs are displayed under sizable blocks. Background-1 Z-level is displayed over sizable blocks, but under playable characters, NPCs, and blocks. The foregound level is a displaying over anything, but under blocks and BGO's which the "foreground-2" Z-level. Note related to SMBX: In SMBX the BGOs define their Z-position by an array data position. I.e. each BGO has its own sorting priority which defines the BGO's Z-position.																												
<ImageZoom 
  alt="level_items_layers"
  url="screenshots/Customizing/level_items_layers.png" 
  :border="true" 
/>
Non-Playable Characters have their own graphic standards. You would have to use custom graphics with the same size and animation frames as the original sprite to replace them. If you want to use custom frame numbers, custom sizes, you can define all those ( graphical settings) in the special config file called NPC.txt (read more). The image filenames of NPC's usually is a "npc-*.ext".

NPCs have multiple graphics types:
* **Statical** - you can use one image with one frame for an item.																										
<ImageZoom 
  alt="npc_static"
  url="screenshots/Customizing/npc_static.png" 
  :border="false" 
/>
* **Animated simple** - these have animated frames like blocks or BGO.																									
<ImageZoom 
  alt="npc_animated"
  url="screenshots/Customizing/npc_animated.png" 
  :border="false" 
/>
* **Animated with left-right defined direction** - allows defining images for the NPC's left and right direction.														
<ImageZoom 
  alt="npc_animated_style1"
  url="screenshots/Customizing/npc_animated_style1.png" 
  :border="false" 
/>
* **Animated with left-right-upper directions defined** - allows defining images for left and right NPC's directions, along with left and right directions for upper state.																																									
<ImageZoom 
  alt="npc_animated_style2"
  url="screenshots/Customizing/npc_animated_style2.png" 
  :border="false" 
/>
* **Animated with rotation** - Allows you to define the NPC's frames with round rotation (the NPC should be able to adhease to the celling and walls).					
<ImageZoom 
  alt="npc_animated_style3"
  url="screenshots/Customizing/npc_animated_style3.png" 
  :border="false" 
/>
* **Animated with the special animation algorithm** - the NPC has an algorithmic pre-defined frame sequence, this is not possible to redefine if you're going to use the NPC in SMBX.																																						
<ImageZoom 
  alt="npc_animated_style_alg"
  url="screenshots/Customizing/npc_animated_style_alg.png" 
  :border="false" 
/>

Playable Characters. These are a 10x10 matrix-sprite which has a size of 1000x1000 pixels and about 100 frames in total. Each frame of the playable character can have a maximum size of 100x100 pixels. When you're customizing a playable character, make sure that the frames are calibrated to the SAME physics config as the original frameset of the playable character. Note: It's not possible to edit collision (hit) boxes for the playable character's frames in SMBX, and thus you should make use of pre-defined collision box positions when drawing the sprite of your character.
Backgrounds - Are the images which are displayed under all the items in a level. Backgrounds usually have image filenames like "background-2-*.ext".

Backgrounds have mainly two types of images: statical, and animated like BGOs. Although backgrounds also have their own displaying modes, which are single-row, double-row and tiled.
* **Single-row backgrounds have one row which repeats horizontally, but which does not repeat vertically**
* **Single-row backgrounds move vertically in proportion to the section's height**
* **The image height must be greater than 600 pixels (which is the default section height)**																			
<ImageZoom 
  alt="Background_singleRow_h"
  url="screenshots/Customizing/Background_singleRow_h.gif" 
  :border="false" 
/>																																										
<ImageZoom 
  alt="Background_singleRow_vertic"
  url="screenshots/Customizing/Background_singleRow_vertic.gif" 
  :border="false" 
/>

Double-row backgrounds are composite backgrounds which use two images for each row.The double-row backgrounds do not move vertically. The summary height of both images must be greater than 600 pixels (which is the default section height).																							
<ImageZoom 
  alt="Background_doubleRow_r"
  url="screenshots/Customizing/Background_doubleRow_r.gif" 
  :border="false" 
/>

<p class="tip">
	Editor related note: Single-row and Double-row backgrounds will only be displayed at the bottom or top (according to the attachment types that have these backgrounds) with only horizontal repeating. If you want to see your background in a tiled like way, when exporting the image check the "Tiled background" box. Additionally, in the INI configs there is an available flag called "tiled in the editor", which will cause your single-row background to be tiled-like, although only in the editor, as in the game your background will be displayed in it's original state.
</p>

<p class="danger">
	Be careful when replacing single-row backgrounds as they repeat only horizontally, and in the editor you'll then only see the attached image. You can use background images in any size, but when you customize the animated background, its sprite must have the same number of frames as the original background. A background image must also have a height that is at least half the height of the screen (in SMBX the screen height is 600 pixels).
</p>

Tiled backgrounds repeat in both directions, horizontally and vertically. The image can have any size.																	
<ImageZoom 
  alt="Background_tiled"
  url="screenshots/Customizing/Background_tiled.gif" 
  :border="false" 
/>

<p class="tip">
	Some backgrounds have the magic effect, that divides the image into strips which move at different speeds.
</p>																																									
<ImageZoom 
  alt="Background_singleRow_magic"
  url="screenshots/Customizing/Background_singleRow_magic.gif" 
  :border="false" 
/>

## Customizing the world graphics
World graphics are usually placed together with the world map file, but you can place the images instead in the World Custom Directory (this is not supported by SMBX).
* **Tiles**
* **Paths**
* **Sceneries**
These graphics are similar to the BGOs used in levels. The images have two types which are, static and animated. These image files also usually have names such as "tile-*.ext", "path-*.ext" and "scene-*.ext".

* **Levels** - they have some minor differences in comparison to other images. They always attach to an item's bottom-center position, where they are used. The image files of levels are usually named something like "level-*.ext".

<p class="warning">
When customizing an animated item, make sure that your sprite has the same number of frames as in the original image.

- Remember that if the size of a custom BGO is larger than the original image you are replacing, it will be cropped in SMBX. In other words, don't use custom images larger than the image you're replacing if you intend to use them in levels created for SMBX. This also applies to Tiles, Sceneries, Paths and Levels in the World map.

- When customizing a NPC, you'll have to create the image sprite with the same image size and number of frames as the original. If you're creating a custom image size, remember to create the npc-*.txt config file for defining the properties of your custom NPC.

- Remember to be careful with how you name your files under UNIX-like operating systems, an example would be "thecat" and "TheCat", remember that both are recognized as entirely different files.
</p>	

## Graphic formats supported

| Format | Description | Values |
|---------|-------------|--------|
| GIF | CompuServe GIF, without transparency (using the masks) | |
| GIF | CompuServe GIF, with it's own transparency | SMBX will fill the transparency with black |
| BMP | Uncompressed image format (using the masks) | |
| PNG | Portable Network graphic, with alpha-channel transparency | Not supported by SMBX |