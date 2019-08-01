
(function ($) {
    "use strict";

    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);    

    if(iOS)
    	$('video').hide();

})(jQuery);