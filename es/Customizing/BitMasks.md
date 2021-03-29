# Transparency bit masks
When targeting graphics for the vanilla SMBX engine, you should use the special pair of graphics that contains the front
and mask pictures ready for usage with the Bit Blit algorithm. The [PNG2GIFs](/Tools/Console/PNG2GIFs) utility can be used to simplify the
conversion of images.


## Generic bit masks
In computer science, a mask or bitmask is data that is used for bitwise operations, particularly in a bit field. 
Using a mask, multiple bits in a byte, nibble, word etc. can be set either on, off or inverted from on to off 
(or vice versa) in a single bitwise operation. 

## Image masks
In computer graphics, when a given image is intended to be placed over a background, the transparent areas can be 
specified through a binary mask. This way, for each intended image there are actually two bitmaps: the actual 
image, in which the unused areas are given a pixel value with all bits set to 0s, and an additional mask, in which 
the correspondent image areas are given a pixel value of all bits set to 0s and the surrounding areas a value of all
bits set to 1s. In the sample at right, black pixels have the all-zero bits and white pixels have the all-one bits.

At run time, to put the image on the screen over the background, the program first masks the screen pixel's bits with
the image mask at the desired coordinates using the bitwise AND operation. This preserves the background pixels of the
transparent areas while resets with zeros the bits of the pixels which will be obscured by the overlapped image.

Then, the program renders the image pixel's bits by combining them with the background pixel's bits using the
bitwise OR operation. This way, the image pixels are appropriately placed while keeping the background surrounding
pixels preserved. The result is a perfect compound of the image over the background. 

![src](screenshots/Tools/console/GIFs2PNG/example_src1.gif) ![srcm](screenshots/Tools/console/GIFs2PNG/example_src1m.gif)

This technique is used for painting pointing device cursors, in typical 2-D videogames for characters, bullets and
so on (the sprites), for GUI icons, and for video titling and other image mixing applications.

Although related (due to being used for the same purposes), transparent colors and alpha channels are techniques
which do not involve the image pixel mixage by binary masking. 

## Lazily-made masks

Lazily-made / Noob-made / noob drawing / result of lazy effort - These are pairs of an image and mask, created
via simple copies of the original image, with a white color.

![lazyFront](screenshots/Tools/console/LazyFix/example_src1.gif) ![lazyBack](screenshots/Tools/console/LazyFix/example_src1m.gif)

This is a bad method that it's not recommended for sprite making. Instead, use the [PNG2GIFs](/Tools/Console/PNG2GIFs) 
utility to convert PNG image into the valid bit-mask ready front and mask pair. If you have a dozen of lazily-made
graphics, you can fix the by using the special [LazyFix Tool](/Tools/Console/LazyFixTool) utility.


## Links 
* [Wikipedia article about bit masks](https://en.wikipedia.org/wiki/Mask_(computing)#Image_masks)
* [Bit Blit explanation](https://en.wikipedia.org/wiki/Bit_blit)
