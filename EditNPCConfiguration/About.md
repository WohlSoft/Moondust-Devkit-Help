# What is NPC.txt?
## Overview
NPC.txt is a custom key-value configuration file to adjust properties of NPCs came from the SMBX-64 standard. These
files intended to easily configure a custom NPC placed at episodes and levels where you can adjust parameters such as
graphics sizes, number of frames and the animation. These files typically named like "npc-12.txt", "npc-42.txt", etc.
The number in a file name is an ID of the NPC type in the game that you want to override.

The Moondust Engine primarily uses settings of the different INI format that supports more features and different types of
values, however, to support old content these files still supported. Use these files primarily to target _original SMBX
engine_, **TheXTech**, and the **SMBX2**, but if you make a new content fo the **Moondust Engine**, the [INI format](https://wohlsoft.ru/pgewiki/NPC_Entry_INI_config_(Config_pack)) is suggested.

## Parameters
The NPC.txt have a limited set of options that you can use. Engines such as Moondust, TheXTech, SMBX-38A, and the SMBX2 
supports much more custom fields than original SMBX offers. If you attempt to use these fields for the original SMBX
engine, they will make no effect as SMBX by default ignores any unknown fields.

> **Note:** There are some fields for the SMBX2 shown, but the set is incomplete. If you want to make a config for the SMBX2, please [read the official documentation](https://docs-codehaus.wohlsoft.ru/#/features/npc-config).

Parameters are stored in a simple format of key=value form:
```ini
width=42
height=32
frames=2
framestyle=1
```

### General config

#### Animation

| Name           |           Type            | Description                                                                   |   Default   |   Supported engines    |
|----------------|:-------------------------:|-------------------------------------------------------------------------------|:-----------:|:----------------------:|
| **frames**     |     unsigned integer      | Sets the number of frames the NPC should have                                 |    1[^1]    |        **All**         |
| **framespeed** |     unsigned integer      | Frame speed modificator: 8 default, 0-7 faster, 9+ slower                     |      8      |        **All**         |
| **framestyle** |   frame style: 0, 1, 2    | Names the style the frames should switch (See table below)                    |    0[^1]    |        **All**         |
| **gfxwidth**   |     unsigned integer      | The width of the NPC's graphical frame.                                       |   32[^1]    |        **All**         |
| **gfxheight**  |     unsigned integer      | The height of the NPC's graphical frame.                                      |   32[^1]    |        **All**         |
| **gfxoffsetx** |      signed integer       | Moves the graphic in the x direction                                          |    0[^1]    |        **All**         |
| **gfxoffsety** |      signed integer       | Moves the graphic in the y direction                                          |    0[^1]    |        **All**         |
| **foreground** | boolean (0 false, 1 true) | If set to 1, the NPC is in front of everything                                |      0      |        **All**         |
| image          |          string           | Defines the sprite image file name in the editor and the Moondust Engine.[^2] | "npc-*.png" | Moondust Editor/Engine |

* [^1]: Value may be different depending on a type (id) of NPC.
* [^2]: Moondust Editor and Moondust Engine allows you to name the NPC's image sprite's filename with any given name, like "bomb.png" or something also. **This feature only works in the Moondust Editor and Moondust Engine, it does NOT works at any other engines including TheXTech and SMBX2.**

| Framestyle   | Description                                                                                                                                     |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| framestyle=0 | Acts like a goomba, means, both left and right movement use the same sprite                                                                     |
| framestyle=1 | The NPC have sprites for both left and right, the first half of the sprite sheet is for left movement, the later half is for the right movement |
| framestyle=2 | NPC has both left and right movement, and upside down movement for when the NPC is grabbed (such as the SMB2 enemies)                           |

#### Collision
| Name                 |           Type            | Description                                       | Default | Supported engines |
|----------------------|:-------------------------:|---------------------------------------------------|:-------:|:-----------------:|
| **width**            |     unsigned integer      | NPC's width                                       | 32[^1]  |      **All**      |
| **height**           |     unsigned integer      | NPC's height                                      | 32[^1]  |      **All**      |
| **noblockcollision** | boolean (0 false, 1 true) | If set to 1, the NPC doesn't interact with blocks |  0[^1]  |      **All**      |
| **npcblock**         | boolean (0 false, 1 true) | Makes the NPC act like a block to other NPCs      |  0[^1]  |      **All**      |
| **npcblocktop**      | boolean (0 false, 1 true) | Makes NPCs able to stand on the NPC               |  0[^1]  |      **All**      |
| **playerblock**      | boolean (0 false, 1 true) | Makes NPCs act like blocks to the players         |  0[^1]  |      **All**      |
| **playerblocktop**   | boolean (0 false, 1 true) | Makes the player able to stand on the NPC         |  0[^1]  |      **All**      |

* [^1]: Value may be different depending on a type (id) of NPC.

#### Interaction
| Name                 |           Type            | Description                                                                  | Default | Supported engines |
|----------------------|:-------------------------:|------------------------------------------------------------------------------|:-------:|:-----------------:|
| **jumphurt**         | boolean (0 false, 1 true) | If 1, the player gets hit from landing on the enemy.                         |  0[^1]  |      **All**      |
| **nohurt**           | boolean (0 false, 1 true) | If 1, the NPC doesn't hurt you.                                              |  0[^1]  |      **All**      |
| spinjumpsafe         | boolean (0 false, 1 true) | If 1, it's safe to jump on NPC with a spin.                                  |    0    |       SMBX2       |
| **grabside**         | boolean (0 false, 1 true) | If 1, Player gets an ability to grab an NPC from the side                    |  0[^1]  |      **All**      |
| **grabtop**          | boolean (0 false, 1 true) | If 1, Player gets an ability to grab an NPC while standing on in             |  0[^1]  |      **All**      |
| harmlessgrab         | boolean (0 false, 1 true) | If 1, the NPC is unable to hit other NPCs while held.                        |    0    |       SMBX2       |
| harmlessthrown       | boolean (0 false, 1 true) | If 1, the NPC is unable to hit other NPCs while thrown.                      |    0    |       SMBX2       |
| ignorethrownnpcs     | boolean (0 false, 1 true) | If 1, the NPC is unaffected by thrown NPCs.                                  |    0    |       SMBX2       |
| **noyoshi**          | boolean (0 false, 1 true) | If 1 you can't eat the NPC                                                   |  0[^1]  |      **All**      |
| **nofireball**       | boolean (0 false, 1 true) | If 1, the NPC can't be burned by fireballs                                   |  0[^1]  |      **All**      |
| **noiceball**        | boolean (0 false, 1 true) | If 1, the NPC can't be frozen by touching ice balls                          |  0[^1]  |      **All**      |
| nohammer             | boolean (0 false, 1 true) | If 1, an NPC will be resistant to hammers                                    |    0    |  Moondust Engine  |
| noshell              | boolean (0 false, 1 true) | If 1, an NPC will be resistant to running shells                             |    0    |  Moondust Engine  |
| nogliding            | boolean (0 false, 1 true) | If 1, the NPC ignores gliding blocks.                                        |    0    |       SMBX2       |
| linkshieldable       | boolean (0 false, 1 true) | If 1, the NPC can be shielded by Link.                                       |    0    |       SMBX2       |
| noshieldfireeffect   | boolean (0 false, 1 true) | If 1, there will be no fire effect spawned when the NPC is shielded by Link. |    0    |       SMBX2       |
| notcointransformable | boolean (0 false, 1 true) | If 1, collecting a goal will not transform the NPC into coins.               |    0    |       SMBX2       |
| nopowblock           | boolean (0 false, 1 true) | Disables the NPC's reaction to a POW effect.                                 |    0    |       SMBX2       |
| nowalldeath          | boolean (0 false, 1 true) | Prevents the NPC from dying when released in a wall.                         |    0    |       SMBX2       |
| falloffvineonstomp   | boolean (0 false, 1 true) | If true, climbing players will stop climbing after the stomping on the NPC.  |    0    |       SMBX2       |
| useclearpipe         | boolean (0 false, 1 true) | Whether the NPC is able to enter clear pipes.                                |    0    |       SMBX2       |
| clearpipegroup       | boolean (0 false, 1 true) | Registers the NPC to one of several clear pipe interaction groups.[^2]       |    0    |       SMBX2       |

* [^1]: Value may be different depending on a type (id) of NPC.
* [^2]: Registers the NPC to one of several clear pipe interaction groups. Currently supported are: "fireballs", "iceballs" and "iceblocks". Interactions determine death and ID transformation on collision, mirroring what would happen if an ice ball hit a Goomba outside a clear pipe.

#### Behaviour
| Name          |           Type            | Description                                                                                |   Default   |   Supported engines    |
|---------------|:-------------------------:|--------------------------------------------------------------------------------------------|:-----------:|:----------------------:|
| **cliffturn** | boolean (0 false, 1 true) | If 1, enemy turn on a cliff                                                                |    0[^1]    |        **All**         |
| **speed**     |      Decimal number       | Speed multiplier: how fast the NPC moves.[^2]                                              |     1.0     |        **All**         |
| usedefaultcam | boolean (0 false, 1 true) | NPC will be activated in a scope of 800x600 area around player playable character.[^3]     |      1      |        TheXTech        |
| **nogravity** | boolean (0 false, 1 true) | If set to 1, the NPC walks in the air                                                      |    0[^1]    |        **All**         |
| **score**     |     Score type: 0-13      | Score reward on taking/defeating: 0 10 100 200 400 800 1000 2000 4000 8000 1up 2up 3up 5up |    1[^1]    |        **All**         |
| health        |     unsigned integer      | Defines the health value of NPC. Useful for creation of powerful enemies or bosses[^4]     |    1[^1]    | Moondust Engine, SMBX2 |
| script        |          string           | Custom NPC-AI Algorithm script for the Moondust Engine                                     | "npc-*.lua" |    Moondust Engine     |

!> **Important:** Original SMBX Engine have a bug: decimal values (like 1.5 or 1,5) in text files may cause a crash of
the SMBX Engine when using comma (1,5) or dot (1.5) as a decimal separator without matching to the system locale.
In the Moondust Engine, TheXTech, SMBX2, and SMBX-38A this bug is not presented, and you are safe to use decimal values,
both comma and dot works as a decimal separator with no matter on the system locale. But if you want to use decimal
values in the original SMBX Engine, you should set in the "International standards" settings the dot "." character
instead a comma "," character as decimal separator, or use comma or dot in your text files to match the already
configured standard.

* [^1]: Value may be different depending on a type (id) of NPC.
* [^2]: Speed multiplier: how fast the NPC moves (the number is what the speed is multiplied by: 0 = no speed, 1 = default, 2 = twice as fast as default, 3 = thrice as fast etc. Negative values make it move backwards.
* [^3]: When game runs with a resolution different from the 800x600, player's camera may affect them earlier as well as too late, or in some cases NPC becomes unreachable for a camera that might lead a softlock or a glitchy activation of boss battles. You may want to require your NPC to be interacted with a player's 800x600 area that will keep the same behaviour with no matter what the size of player's camera is.
* [^4]: Sets the health of the NPC. By default only supported by boss NPCs (Boom Boom, Birdo, Big Boo, Bowser III, Bowser I, Wart, Mother Brain, Mouser, Larry, Ludwig, Fry Guy), Clawgrip, but can be used by your own NPCs for the purposes of handling customizable HP. Extended per-npc uses are specified per ID in the specifics section below.

#### Editor-only

| Name        |       Type       | Description                                                                                        | Default |   Supported engines    |
|-------------|:----------------:|----------------------------------------------------------------------------------------------------|:-------:|:----------------------:|
| name        |      string      | Defines the NPC's name which will be used in the editor                                            | ""[^1]  | Moondust Editor/Engine |
| grid        | unsigned integer | Re-defines alignment grid size for this NPC in the editor                                          |   32    | Moondust Editor/Engine |
| gridoffsetx |  signed integer  | Defines horisontal offset at aligned by grid coordinate value in the editor                        |    0    | Moondust Editor/Engine |
| gridoffsety |  signed integer  | Defines vertical offset at aligned by grid coordinate value in the editor                          |    0    | Moondust Editor/Engine |
| gridalign   | align type: 0, 1 | Defines align mode in the editor: 0 - at center of the global cell, 1 - at edge of the global cell |  0[^1]  | Moondust Editor/Engine |

* [^1]: Value may be different depending on a type (id) of NPC.
