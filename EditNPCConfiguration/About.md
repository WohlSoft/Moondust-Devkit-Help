# What is NPC.txt?
## Overview
NPC.txt is a custom configuration file which have name like npc-12.txt, npc-46.txt and contains the some parameters for custom NPC. The NPC.txt came from SMBX 1.3 and this is a part of SMBX64 standard.
## Parameters
The NPC.txt have limited options for using, and Moondust can use more options than SMBX. Unknown options will be ignored by SMBX.

| SMBX64 Standard Parameters | Description | Values |
|---------|-------------|--------|
| gfxoffsetx | Moves the graphic in the x direction | [+/- numbers] |
| gfxoffsety | Moves the graphic in the y direction | [+/- numbers] |
| width | NPC's width | [+numbers] | 
| height | NPC's height | [+numbers] |
| gfxwidth | NPC's graphics width | [+numbers] | 
| gfxheight | NPC's graphics height | [+numbers] |
| score | Score you get by killing: 0 10 100 200 400 800 1000 2000 4000 8000 1up 2up 3up 5up | [0-13] |
| playerblock | Makes NPCs act like blocks to the players | [1,0] |
| playerblocktop | Makes the player able to stand on the NPC | [1,0] |
| npcblock | Makes the NPC act like a block to other NPCs | [1,0] |
| npcblocktop | Makes NPCs able to stand on the NPC | [1,0] |
| grabside | Gives the player the ability to grab NPCs from the side | [1,0] |
| grabtop | Gives Mario the ability to grab NPC's like shy guys | [1,0] |
| jumphurt | If set to 1, the player gets hit from landing on the enemy | [1,0] |
| nohurt | If set to 1, the NPC doesn't hurt you |[1,0] |
| noblockcollision | If set to 1, the NPC doesn't interact with blocks | [1,0] |
| cliffturn | If set to 1, enemy turn on a cliff | [1,0] |
| noyoshi | If set to 1 you can't eat the NPC | [1,0] |
| foreground | If set to 1, the NPC is in front of everything | [1,0] |
| speed | Speed multiplier: how fast the NPC moves (the number is what the speed is multiplied by: 0 = no speed, 1 = default, 2 = twice as fast as default, 3 = thrice as fast etc. Negative values make it move backwards | [+/-numbers] |
| nofireball | If set to 1, the NPC can't be killed by fireballs | [1,0] |
| noiceball | If set to 1, enemy can't freeze when an ice ball touches it | [1,0] |
| nogravity | If set to 1, the NPC walks in the air | [1,0] |
| frames | Sets the number of frames the NPC should have | [+number] |
| framespeed | Frame speed modificator: how fast the NPC animates (0-7 are eighths of the default speed, 8 is the default speed and 9 and bigger are the default speeds multiplied | [+numbers] |
| framestyle | Names the style the frames should switch | [0-2] |

| Framestyle | Description |
|---------|-------------|
| framestyle=0 |Acts like a goomba, means, both left and right movement use the same sprite |
| framestyle=1 |The NPC have sprites for both left and right, the first half of the sprite sheet is for left movement, the later half is for the right movement |
| framestyle=2 |NPC has both left and right movement, and upside down movement for when the NPC is grabbed (such as the SMB2 enemies) |

| Extended Parameters (doesn't work in smbx) | Description | Values |
|---------|-------------|--------|
| nohammer |If set to 1, enemy can't be killed by hammer |[1,0] |
| noshell |If set to 1, enemy can't be killed by shell or other NPCs |[1,0] |
| name |Defines the NPC's name which will be used in the editor |["string"] |
| health |Defines the health value of NPC. Useful for creation of powerful enemies or bosses |[+numbers] |
| grid |Re-defines alignment grid size for this NPC in the editor |[+numbers] |
| gridoffsetx |Defines horisontal offset at aligned by grid coordinate value in the editor |[+/-numbers] |
| gridoffsety |Defines vertical offset at aligned by grid coordinate value in the editor |[+/-numbers] |
| gridalign |Defines align mode in the editor: 0 - at center of the global cell, 1 - at edge of the global cell |[0,1] |
| image |Defines the sprite image file name in the editor. Allows to have a custom image file names |["string"] |
| script |Custom NPC-AI Algorithm script in Moondust |["string"] |

<Note type="warning">
Original SMBX have a bug: do not use decimal values in NPC codes if you want use them with SMBX.
It causes crashing of SMBX for some people. In the Moondust, TheXTech, SMBX2, and SMBX-38A this bug is absence,
and you have a full freedom for use decimal values. But if you want use decimal values for vanilla SMBX,
you must have in the "International standards" settings the dot "." character instead a comma "," character 
as decimal separator.
</Note>
