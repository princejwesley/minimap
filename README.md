[minimap](http://www.toolitup.com/minimap.html) - A jQuery Plugin
===============
A preview of full webpage or its DOM element with flexible positioning and navigation support
#####[Demo Page](http://www.toolitup.com/minimap.html)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/princejwesley/minimap)

## Getting Started

### Download the latest code


[Fork](https://github.com/princejwesley/minimap) this repository or download js/css files from  `dist` directory.

### Including it on your page

Include jQuery and this plugin on a page.

```html
<link rel="stylesheet" href="minimap.min.css" />
<script src="jquery.js"></script>
<script src="minimap.min.js"></script>
```

### Basic Usage
```javascript
//Desired dom element
var previewBody = $('body').minimap();

```
### Properties
#### heightRatio
> `height` ratio of the view port. ratio can be in the range [0.0, 1.0). (*default: **0.6***)

#### widthRatio
> `width` ratio of the view port. ratio can be in the range [0.0, 0.5). (*default: **0.05***)

#### offsetHeightRatio
> Margin `top` ratio of the view port. ratio can be in the range (0.0, 0.9]. (*default: **0.035***)

#### offsetWidthRatio
> Margin `left` or `right`(*based on `position` property*) ratio of the view port. ratio can be in the range (0.0, 0.9]. (*default: **0.035***)


#### position
> `position` of the minimap. Supported positions are:

1. `'right'` (*default*)
2. `'left'`

### touch
> `touch` support. (default: *true*)

### smoothScroll
>linear `animation` support for scrolling. (dafault: *true*)

### smoothScrollDelay
> Smooth scroll delay in milliseconds. (default: 200ms)

## Setters
### function setPosition(position)
> Set `position` property. `position` can be either `'left'` or `'right'`

### function setHeightRatio(ratio)
> Set `heightRatio` property.

### function setWidthRatio(ratio)
> Set `widthRatio` property.

### function setOffsetHeightRatio(ratio)
> Set `offsetHeightRatio` property.

### function setOffsetWidthRatio(ratio)
> Set `offsetWidthRatio` property.

### function setSmoothScroll(smooth)
> Set `smoothScroll` property

### function setSmoothScrollDelay(duration)
> Set `setSmoothScrollDelay` property.

## Callback
### function onPreviewChange(minimap, scale)
> `onPreviewChange` callback will be triggered for the below cases:

1. View port is resized.
2. Calling setter functions.

Use this function to *customize* DOMs inside minimap.

Parameters:
```
minimap - $minimap DOM
scale - Scale object with `x` and `y` properties.(width/height ratio of minimap with respect to viewport)
```
## Other functions
### function show()
> Show preview

### function hide()
> Hide preview

### function toggle()
> Toggle Preview

### Default Settings
Mini-map with default values
```javascript
var previewBody = $('body').minimap(
    heightRatio : 0.6,
    widthRatio : 0.05,
    offsetHeightRatio : 0.035,
    offsetWidthRatio : 0.035,
    position : "right",
    touch: true,
    smoothScroll: true,
    smoothScrollDelay: 200,
    onPreviewChange: function(minimap, scale) {}
});
```

#### CSS classes
Use the below css classes for customization
> `.minimap` - Mini-map area

> `.miniregion` - Mini-map view area

## Caveats
1. Browser's `find` gives result in both the page & its preview
2. Async updates to the dom elements after minimap was created may not reflect in the preview.

## License
This plugin is licensed under the [MIT license](https://github.com/princejwesley/minimap/blob/master/LICENSE).

Copyright (c) 2014 [Prince John Wesley](http://www.toolitup.com)
