# PNG2GIFs

![CatPGE2GIFs](screenshots/Tools/console/cat_png2gif_128.png)

**PNG to masked GIFs converter** (Known as PNG2GIFs) is a graphical conversion tool that converts a transparent 
PNG image into a SMBX64 compatible GIF with the transparency mask format. This tool allows you to save a lot of time
when creating a transparency masks for use in the SMBX game engine.

## How it works

This is a common PNG image with own transparency: 

![src](screenshots/Tools/console/GIFs2PNG/example_dst1.png)


After running the tool, the front and it's mask will be generated:

![dst](screenshots/Tools/console/GIFs2PNG/example_src1.gif) ![dstm](screenshots/Tools/console/GIFs2PNG/example_src1m.gif)

Result can be freely used with the vanilla SMBX game and will work properly.


## Usage
This is a console utility. To use it you need to run the Terminal at the directory where the PNG2GIFs executable 
located. Alternatively, you can use this utility from your scripts and utilities and run this utility externally.

```
USAGE: 

   ./PNG2GIFs  [-O </path/to/output/directory/>] [-w] [-d] [-r] [--]
               [--version] [-h] <Input file path(s)> ...


Where: 

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the converted images will be saved

   -w,  --dig-recursive-old
     Look for images in subdirectories [deprecated]

   -d,  --dig-recursive
     Look for images in subdirectories

   -r,  --remove
     Remove source images after successful conversion

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.

   <Input file path(s)>  (accepted multiple times)
     (required)  Input PNG file(s)
```
