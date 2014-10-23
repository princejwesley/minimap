/*! The MIT License (MIT)

Copyright (c) 2014 Prince John Wesley <princejohnwesley@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**/

(function($, undefined) {

    "use strict";
    $.fn.minimap = function(options) {
        var minimap = this;
        var $window = $(window);

        var defaults = {
            heightRatio : 0.6,
            widthRatio : 0.1,
            offsetHeightRatio : 0.035

        };
        var settings = $.extend({}, defaults, options);

        var miniElement = this.clone();
        miniElement.addClass('minimap noselect');
        // remove events & customized cursors
        miniElement.children().each(function() {$(this).css({'pointer-events': 'none'});});

        var region = $('<div class="miniregion"> </div>');

        $('body').append(region);
        $('body').append(miniElement);

        var scale = function() {
            return {
                x: ($window.width() / minimap.width()) * settings.widthRatio,
                y: ($window.height() / minimap.height()) * settings.heightRatio
            };
        };

        var onResizeHandler = function(e) {
            var s = scale();
            var sc = 'scaleX(' + s.x + ') scaleY('+ s.y + ')';
            var offset = $window.height() * settings.offsetHeightRatio  + (region.outerHeight(true) - region.height());

            var top = minimap.height() * (s.y - 1) / 2 + offset;
            var right = minimap.width() * (s.x - 1) / 2;
            var width = $window.width() * (1/s.x) * settings.widthRatio;
            var height = $window.height() * (1/s.y) * settings.heightRatio;

            miniElement.css({
                '-webkit-transform': sc,
                '-moz-transform': sc,
                '-ms-transform': sc,
                '-o-transform': sc,
                'transform': sc,
                'top' : top,
                'right' : right,
                'width' : width,
                'height' : height
            });

            region.css({
                width : $window.width() * s.x,
                height : $window.height() * s.y,
                top : $window.scrollTop() * s.y + offset + 2 + 'px'
            });

        };

        var onScrollHandler = function(e) {
            var s = scale();
            var offset = $window.height() * settings.offsetHeightRatio  + (region.outerHeight(true) - region.height());
            region.css({
                top : $window.scrollTop() * s.y + offset + 2 + 'px'
            });

        };

        var scrollTop = function(e) {
            var s = scale();
            var offset = $window.height() * settings.offsetHeightRatio + (region.outerHeight(true) - region.height());
            minimap.scrollTop((e.clientY - offset - 2)/s.y);
        };

        var mousedown = false;
        var onMouseupHandler = function(e) {
            minimap.removeClass('noselect');
            mousedown = false;
        };

        var onMousemoveHandler = function(e) {
            if(!mousedown) return;
            scrollTop(e);
        };

        var onClickHandler = function(e) {
            scrollTop(e);
            mousedown= false;
        };

        var onMousedownHandler = function(e) {
            mousedown = true;
            minimap.addClass('noselect');
        };

        onResizeHandler();
        $window.on('resize', onResizeHandler);
        $window.on('scroll', onScrollHandler);

        $(region).on('mousedown', onMousedownHandler);
        $(region).on('mouseup', onMouseupHandler);
        $(region).on('mousemove', onMousemoveHandler);
        $(region).on('click', onClickHandler);

        $(miniElement).on('mousedown', onMousedownHandler);
        $(miniElement).on('mouseup', onMouseupHandler);
        $(miniElement).on('mousemove', onMousemoveHandler);
        $(miniElement).on('click', onClickHandler);


    };
}(jQuery));
