/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, window:false, location:false */

(function ($) {
    $(document).ready(function () {
        if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
            // it's not realistic to think we can deal with all the bugs
            // of IE 6 and lower. Fortunately, all this is just progressive
            // enhancement.
            return;
        }
        $(".slidetabs").tabs('.gallery-panels > .gallery-panel', {
            effect: 'fade',
            fadeOutSpeed: 1000,
            rotate: true
        }).slideshow({
            autoplay: true,
            interval: 6000,
            clickable: false
        });
        $('#content-wrapper').noisy({
            intensity: 0.9,
            size: 600,
            opacity: 0.15,
            monochrome: true
        });
    });
}(jQuery));
