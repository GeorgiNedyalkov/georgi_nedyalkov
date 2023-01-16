# CSS

Cascading Style Sheets

The language we use to design our webpage.

Layouts:

- Flexbox
- Grid
- Box Model

Viewport.

CSS is about how to content is organized.

Flexbox and Grids.

## Box Model

display property specifies the type of box for a given html element.
display: inline, block;

## Flexbox

Flexbox is short for flexible box model.

Flexbox is one dimentional and grid is 2 dimentional.

Flexbox is a type of container. It can overcome limitations caused by containers like block and inline.
It provides more control as we can, grow, shrink and align the items inside the flex container.

Flexbox is single-dimentional, you can either align items in a row or a column.
By default items are aligned in a row. There are two axes, the main and cross-axis.
When the flex-direction is a row the main axis is the horizontal axis and the vertical axis is the cross-axis.
Vice versie if a flex-direction is a column the main axis is vertical and the cross is horizontal.
The start and end is either top-left moving to along the horizontal in a flex direction of a roll.
The properties we choose help better control alignment, spacing, direction and eventually styling.

### _Alignment Properties_

There are four main properties used to align the flex container:

1. Main axis alignment is controlled with _justify content_ property.
2. Vertical axis alignment is controlled with _align items_ property.
3. _Align self_ for unique items on cross axis.
4. _Align content_ used for packing flex lines and control over space.

_Flex Wrap_ by default flex items are arranged in a single line. If there is no space
we can specify if the next item can appear on next or previous row or column.
There are several properties: _nowrap_ (default), _wrap_: flex items wrap on multiple lines.
_wrap-reverse_ same a wrap but reversed.

_gap_ property is used to create space between the items on the main axis.

### _Children Properties_ (Flex Items)

- _Order_

The order property contains the order in which items appear on the page.

- _flex-grow_

The ability for a flex item to grow if necessary. It dictates what amount of the
available space inside the flex container the item should take up.

- _flex-shrink_

The ability for a flex item to shrink if necessary.

- _flex-basis_

- _flex_

Shorthand property for flex-grow, flex shrink and flex basis combined.

- _align-self_

## CSS units of measurement

A webpage is two-dimentional, it has width and height.
Another property is its size which can be static or dynamic.

There are two categories for units of measurements:

- ### _Absolute units_

Absolute units have a fixed size and are constant accross different devices.
They are used when the size of the webpage is known and will remain constant.

They are:

- Q: quarter-milimeters
- mm: Millimeters
- cm: Centimeters
- in: Inches
- pc: Picas
- pt: Points
- px: Pixels

Most frequently used are px and cm for defining properties.

- ### _Relative units_

Relative value are defined "in relation" to other elements present inside the parent element. Additionally, they are defined in relation to the viewport or the size of the visible web page.

They are:

- em: Font size of the parent where present.
- ex: x-co-ordinate or heigh of the font element.
- ch: Width of the font character.
- rem: Font size of the root element.
- lh: Value computed for line heigth of parent element.
- rlh: Value computed for line heigth of root element which is <html>
- vw: 1% of the viewport witdth.
- vh: 1% of the viewport height.
- vmin: 1% of the smaller dimension of viewport.
- vmax: 1% of the larger dimension of viewport.
- %: Denotes a percentage value in relation to its parent element.

## Grid

More suitable to large scale layouts.
