# About

## Moondust
_A Platform Game Engine by Wohlstand_

_This project is distributed under [GNU GNLv3](../license.html)._


**So what exactly is this?** It's a free/open-source game engine and
toolkit which gives the ability to create games of the platforming genre.

The basic idea of this project is to make it possible for every user
to create platformers with existing or self-drawn sprites. This idea I
found in the SMBX fan game, but the main drawback of SMBX is a strict data
standard and it's attachment to Nintendo's "Super Mario" franchise.

The Engine will be compatible with SMBX. It's main components would be a
(SMBX compatible) game engine and a tool-kit for creating games.

I've been working on this project since at least December 2013.

## History

### Beginning
In December 2013 I had the desire to create a [SMBX](WhatIsSMBX.md)-compatible
game engine, and in doing so, give it a new life. The game that inspired me is
called [Hedgewars](http://hedgewars.org/), a clone of the game
"Worms" by the company Team17. I decided to create a new game engine,
with the source-code being open under the GPLv3 License.

One of the most important parts of this project in my opinion is the
NAME. Because of the NAME he gave SMBX, Redigit was confronted with legal
consequences by Nintendo, and was forced to take the game down. Therefore,
the engine which I will publish won't be named after "Mario", or any other
Nintendo properties.
Despite this, it will be fully compatible with SMBX, meaning it
IS possible to use SMBX files with my engine.

For the project I decided to use [Qt](http://qt.io) and
[SDL libraries](http://libsdl.org) with C++. I want to make the engine
cross-platform: for Windows, GNU/Linux, and Mac OS. The project will
live if it is free, libre, open-source.

### The Birth of the Editor
My introduction wasn't met well by the SMBX community, as they thought it 
was one another fake and the scum, until the time later. After completing
the initial research, I started the actual development of the Editor
on March 24th, 2014. The Editor project started as a part of my 
SMBX Research Works that started some months before. 
On April 28th, 2014, Kevsoft joined the PGE Project, and shortly 
afterwards, Editor version 0.0.7-Alpha was released. The first
fully-featured version with the ability to read/write files, a history
manager, and full support of NPC rendering was 0.0.8-Alpha, which
was released on July 13th, 2014. On October 20th of 2014, after
a long time of development, the first stable and fully-featured
build of the editor was released with the ability to read/write
levels, worlds and interactive NPC editor files etc. This version
had a multi-configuration system which allowed the use of different
content packages without needing to overwrite existing content files.

### Founding the Engine
In October 2014, I started the first sketch for the Engine. It was a simple SDL2 
application with the use of Box2D physics and OpenGL rendering. The time
later, I made it able to play levels with simple graphics. The playable
character was just a blue rectangle. Gradually, I implemented the support
for the rest of the graphics, sound, world maps, menus, screens, etc.
I made playable characters been correctly rendered. Bye-bye, the blue rectangle!
The initial Lua scripting system was added to start making NPCs to act as intended. 
Later, I was found that Box2D doesn't give me what I need.
Therefore, I desired to code my own physics from scratch.
The last version of Engine with Box2D physics was 0.0.11-pre-alpha. Since the 0.1-Alpha,
the brand-new own-coded physical engine was used. Then, the world map gets more
functionality and introduced the working path-opener. Since that moment, 
the world map engine is completed and working.

### The founding of the SMBX2 and my procrastination
Since Super Mario Bros. X2 was founded at the end of 2015, I joined the
team to support the several components on it by invitation of Horikawa Otane.
Everything was fine. However, the year later, I got a lot of tasks at the Editor
that took a lot of my time. I had no desire to work so much at Editor as
I already announced that it's already fine as-is for the current usage.
I wanted to develop Engine as I see it's one most important part of the
PGE Project. The team wanted more and more features in the Editor. I was
worked on that a lot. The SMBX2 team didn't saw any perspectives against
PGE Engine, and instead, they were focused on the LunaLua development.
In 2016'th year, I have explained the nature of SMBX2 as the "Biggest
workaround in the Universe". Horikawa Otane agreed with me. She supported
my development of the Engine. However, a time later, the SMBX2 team was
majorly changed after Horikawa Otane left the project because of her
personal reasons. After the 2016'th year, I started to procrastinate
and switch to other projects. That was my biggest mistake that I care
about SMBX2 development a lot. After the time, at the end of 2019,
I finally considered reducing the attention to SMBX2 and focus on
my own development process.

### SMBX source code was published, founding TheXTech
By great luck, since February 2, 2020, the source code for the original
SMBX game is finally open. That gives a huge potential and the help to
the engine development. One month later, I built a new project called
TheXTech via a porting of original source code into C++ that turns the
old Windows-only game into a cross-platform and functional project.

I desired to keep two different engines for two purposes:
- TheXTech for the playing of old episodes and giving the full compatibility
to original SMBX game include bugs and specifics of physics.
- New PGE Engine for new projects focused on modern functionality and don't
inheriting old bugs of SMBX Engine.

### Epilogue

**The Project is still Currently Under Construction**, as of now, the Editor
and Development kit is currently available as a standalone application. 
The source code is publishing on the GitHub repository.

Development of a game engine requires much responsibility and hard
work, therefore sufficient time and motivation is necessary for this
goal to be achieved. At the moment of 2020'th year, the development is still
active, I have the goal to build the Engine, and I will go forward!

## Join us
Does this project sound interesting to you? You can show your
support and [join us](http://wohlsoft.ru/forum/) at the Forum!

We also at Discord: https://discord.gg/qPBsvMy
