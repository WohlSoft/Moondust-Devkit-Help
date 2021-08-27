# Music and sound formats support

The Moondust supports next audio-formats:

| Format (Common) | Description |
|---------|-------------|
| WAV | Microsoft PCM, Uncompressed audio (hardcoded), has loop support (by SMPL chunk). |
| VOC | Creative Labs Audio File (hardcoded). Supported for SFX only. |
| MP3 | MPEG-1/2 Layer 3, Lossy data compressed audio.<br>**Usage of MP3 is DEPRECATED.** This format is inconvenient, damages the quality, does the compression ineffectively, doesn't support loop points at all. Suggested to use OGG format instead. Use the Maintainer utility to convert your old MP3 files into OGG Vorbis. |
| OGG | OGG Vorbis, Lossy data compressed audio (libOGG, libVorbis), has loop support (by LOOPSTART/LOOPEND/LOOPLENGTH meta tags, also LOOP_START and LOOP_END). |
| OPUS | OPUS, Lossy data compressed audio (libOpus) (Support was added Since June 18, 2018), has loop support (by LOOPSTART/LOOPEND/LOOPLENGTH meta tags, also LOOP_START and LOOP_END). |
| FLAC | Free Lossless Audio Codec, Loss-less compressed (libFLAC), has loop support (by LOOPSTART/LOOPEND/LOOPLENGTH meta tags, also LOOP_START and LOOP_END (Support for FLAC loop was added Since November 17, 2019)). |
| MIDI | Music Instrument Digital Interface, commands list (libADLMIDI, Timidity (hardcoded), Fluidsynth (Usually not built with SDL Mixer X, but possible to use it) ), has loop support (by loopStart/loopEnd markers and by CC111 like RPG Maker). |

| Format (Extra) | Description |
|---------|-------------|
| XMI | MIDI-like format used in AIL library and was widely used in many DOS games. Can be played by ADLMIDI and OPNMIDI synthesizers only. Has loop support (by CC116 and CC117). |
| MUS | MIDI-like format used in DMX library and known by Doom and Raptor game series are used DMX sound library. Can be played with ADLMIDI and OPNMIDI synthesizers only. |
| IMF | Id-Software Music File (will work only if ADLMIDI MIDI device will be toggled). Supported IMF-files which are has length chunk in begin and uses 700Hz of the ticks rate. (Tip: If your IMF-files are playing with wrong tempo or rejecting as invalid files, you have to use this utility to convert frequency and automatically add length chunk into file begin). |
| CMF | Creative Music Format, A MIDI file mixed with OPL2 FM instruments, widely used in many DOS games. Can be played with ADLMIDI synthesizer only. |

| Format (Modules music formats) | Description |
|---------|-------------|
| 669 | Composer 669, Unis 669 |
| AMF | DSMI Advanced Module Format |
| AMF | ASYLUM Music Format V1.0 |
| APUN | APlayer |
| DSM | DSIK internal format |
| FAR | Farandole Composer |
| GDM | General DigiMusic |
| IT | Impulse Tracker |
| IMF | Imago Orpheus |
| MOD | 15 and 31 instruments |
| MED | OctaMED |
| MTM | MultiTracker Module editor |
| OKT | Amiga Oktalyzer |
| S3M | Scream Tracker 3 |
| STM | Scream Tracker |
| STX | Scream Tracker Music Interface Kit |
| ULT | UltraTracker |
| UNI | MikMod |
| XM | FastTracker 2 |

| Format (Game Music Emulators formats) | Description |
|---------|-------------|
| AY | ZX Spectrum/Amstrad CPC |
| GBS | Nintendo Game Boy |
| GYM | Sega Genesis / Mega Drive |
| HES | NEC TurboGraphx-16 / PC Engine |
| KSS | MSX Home Computer / Other Z80 systems (not supported FM Sound) |
| NSF | Nintendo NES/Famicom (with VRC 6, Namco 106) |
| NSFE | Nintendo NES/Famicom (with FME-7) |
| SAP | Atari systems using POKEY sound chip |
| SPC | Super Nintendo / Super Famicom |
| VGM | Sega Master System / MarkIII / Sega Genesis / Mega Drive / BBC Micro. |
| VGZ | Sega Master System / MarkIII / Sega Genesis / Mega Drive / BBC Micro. (Pre-compressed with GnuZIP) |
| IMF | Id-Software Music File, raw AdLib commands sequence. Required ADLMIDI be toggled! |
