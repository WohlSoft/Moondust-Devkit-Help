# Opasity Masks
The SMBX come with opacity mask images using. For correctly work with old files and also for creating the new graphics for old SMBX engine, you must use the opacity mask images. If you will use the images in the PGE, recommended to use PNG graphics with own transparency without any mask images.

## What is a Mask?
A mask is an Alpha-channel coding image. Each Pixel of the mask defining the level of opacity of the same pixel on the source image:
Each Pixel of a mask - is a value of opacity for each pixel of the source image:

<ImageZoom 
  alt="What_is_a_mask"
  url="screenshots/Tools/console/LazyFix/What_is_a_mask.png" 
  :border="true" 
/>


## Valid example
This is the example of a valid front+mask pair.

<ImageZoom 
  alt="validMaskPair"
  url="screenshots/Tools/console/LazyFix/valid_smile_tst.gif" 
  :border="true" 
/><ImageZoom 
    alt="validMaskPair"
    url="screenshots/Tools/console/LazyFix/valid_smile_tstm.gif" 
    :border="true" 
  />


_And target image will be valid:_

<ImageZoom 
    alt="validMaskPair"
    url="screenshots/Tools/console/LazyFix/valid_smile_tst_targ.png" 
    :border="true" 
  />


## Lazily-made invalid example
However, if you will use the invalid (a.k.a. Lazily-made) mask:

<ImageZoom 
  alt="validMaskPair"
  url="screenshots/Tools/console/LazyFix/invalid_smile_tst.gif" 
  :border="true" 
/><ImageZoom 
    alt="validMaskPair"
    url="screenshots/Tools/console/LazyFix/invalid_smile_tstm.gif" 
    :border="true" 
  />

_You will get the broken image:_

<ImageZoom 
 alt="validMaskPair"
 url="screenshots/Tools/console/LazyFix/invalid_smile_tst_targ.png" 
 :border="true" 
/>

 This means - the colors of the mask applied on the image as alpha-channel values,

and you got the broken image.

 
<p class="warning">
Be careful while you creating the masked images manually!
</p>
