# Debugger
## Overview

Debugger, is a small informative toolbox which displaying some debug information, for example, mouse coordinated. 
Also, with debugger tool you can jump into specific X:Y position (relative to view's center).

Also in the debugger you will see counters of placed items on the level or on the world map. 

To show the debugger box, open the `View -> Debugger` menuitem.

<ImageZoom
  alt="DebugBox"
  url="screenshots/Tools/DebuggerBox.png"
  :border="true"
/>


## Custom counters

This is a special feature which allow count all items of target bunch of ID's.

You can add and remove any counters in this list by your wish. **To edit or remove counter use the context menu**.

<Note type="tip">
Note: Due to performance reasons custom counters don't updating automatically. You should refresh custom counters 
manually by a "refresh" button!
</Note>


_Custom counter editor dialog_

<ImageZoom
  alt="DebugCCEdit"
  url="screenshots/Tools/DebuggerBoxCustomCounterEditor.png"
  :border="true"
/>
