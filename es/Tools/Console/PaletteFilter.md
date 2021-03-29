# Palette Filter
![PalleteFilter](screenshots/Tools/console/pallete_filter_128.png)

**Palette filter** - a tool for color adjuction of images into the pallete of a reference picture.

## How it works

This utility can be used to adjust the palette of any images you have into the given reference picture that
contains the set of colors of your palette.

This is an example of the reference image that defines the target palette:

![Ref](screenshots/Tools/console/PalleteFilter/reference_example.png)

This is the source image before the filtering:

![Ref](screenshots/Tools/console/PalleteFilter/example_src.png)

After you run the utility, you will get the next result:

![Ref](screenshots/Tools/console/PalleteFilter/example_dst.png)


## Usage
This is a console utility. To use it you need to run the Terminal at the directory where the PaletteFilter executable
located. Alternatively, you can use this utility from your scripts and utilities and run this utility externally.
```
USAGE: 

   ./PaletteFilter  [-O </path/to/output/directory/>] -P <pallete.png> [-w]
                    [-d] [-n] [--] [--version] [-h] <Input file path(s)>
                    ...


Where: 

   -O </path/to/output/directory/>,  --output </path/to/output/directory/>
     path to a directory where the fixed images will be saved

   -P <pallete.png>,  --pallete <pallete.png>
     (required)  Path to the reference PNG or GIF image file for a role of
     a pallete

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
     (required)  Input PNG file(s) (GIFs are not supported by this tool)
```

