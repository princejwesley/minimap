[minimap](http://www.toolitup.com/minimap.html) - A jQuery Plugin (under development)
===============
A preview of the full web page or its DOM element
#####[Demo Page](http://www.toolitup.com/minimap.html) (TODO)

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
>linear `animation` support for scrolling. (dafault: *false*)

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
### function onPreviewChange()
> `onPreviewChange` callback will be triggered for the below cases:
1. View port is resized.
2. Calling setter functions.

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
    smoothScroll: false,
    smoothScrollDelay: 200,
    onPreviewChange: function() {}
});
```

#### CSS classes
Use the below css classes for customization
> `.minimap` - Mini-map area

> `.miniregion` - Mini-map view area


## License
This plugin is licensed under the [MIT license](https://github.com/princejwesley/minimap/blob/master/LICENSE).

Copyright (c) 2014 [Prince John Wesley](http://www.toolitup.com)
