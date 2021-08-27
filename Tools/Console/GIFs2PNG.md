# GIFs2PNG

![CatGIFs2PNG](screenshots/Tools/console/cat_gif2png_128.png)

**Masked GIFs to PNG Converter** (Known as GIFs2PNG) is a graphical conversion tool that converts SMBX64 GIF images 
(source image with transparency mask) to PNG images with support to alpha-channel and true color palette. 

## How it works
This is the bit-mask ready pair: the front picture with a black background, and the bit mask that defines the 
transparency level:

![src](screenshots/Tools/console/GIFs2PNG/example_src1.gif) ![srcm](screenshots/Tools/console/GIFs2PNG/example_src1m.gif)

After running the tool, the front and mask will be merged into united PNG image that has own transparency: 

![dst](screenshots/Tools/console/GIFs2PNG/example_dst1.png)

## Usage

This is a console utility. To use it you need to run the Terminal at the directory where the GIFs2PNG executable
located. Alternatively, you can use this utility from your scripts and utilities and run this utility externally.
```
USAGE:

   ./GIFs2PNG  [-C </path/to/config/pack>] [-O
               </path/to/output/directory/>] [-w] [-d] [-b] [-r] [--]
               [--version] [-h] <Input file path(s)> ...

Where: 

   -C </path/to/config/pack>,  --config </path/to/config/pack>
     Allow usage of default masks from specific Moondust config pack (Useful for
     cases where the GFX designer didn't make a mask image)

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the PNG images will be saved

   -w,  --dig-recursive-old
     Look for images in subdirectories [deprecated]

   -d,  --dig-recursive
     Look for images in subdirectories

   -b,  --ingnore-bg
     Skip all "background2-*.gif" sprites

   -r,  --remove
     Remove source images after a succesful conversion

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.

   <Input file path(s)>  (accepted multiple times)
     (required)  Input GIF file(s)
```
