# LazyFix tool
![CatGlasses](../../screenshots/Tools/console/cat_glasses_128.png ":no-zoom")

The **LazyFix Tool** is a tool that fixes masks considered invalid or improper (such as when the mask is the 
same as the front image). 

## How it works
This is an example of invalid mask (which was made with a lazy effort by a simple copying of the picture):

![lazyFront](../../screenshots/Tools/console/LazyFix/example_src1.gif ":no-zoom") ![lazyBack](../../screenshots/Tools/console/LazyFix/example_src1m.gif ":no-zoom")

After processing, you will get the next result:

![lazyFront](../../screenshots/Tools/console/LazyFix/example_src1.gif ":no-zoom") ![lazyBack](../../screenshots/Tools/console/LazyFix/example_dst1m.gif ":no-zoom")

For the proper bit-mask based sprite, the mask defines the pixel transparency level, and it should never contain the
copy of original sprite.

## Usage
This is a console utility. To use it you need to run the Terminal at the directory where the LazyFixTool executable
located. Alternatively, you can use this utility from your scripts and utilities and run this utility externally.
 
```
USAGE: 

   ./LazyFixTool  [-O </path/to/output/directory/>] [-w] [-d] [-n] [--]
                  [--version] [-h] <Input file path(s)> ...


Where: 

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the fixed images will be saved

   -w,  --dig-recursive-old
     Look for images in subdirectories [deprecated]

   -d,  --dig-recursive
     Look for images in subdirectories

   -n,  --no-backup
     Don't create backup

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.

   <Input file path(s)>  (accepted multiple times)
     (required)  Input GIF file(s)

```
