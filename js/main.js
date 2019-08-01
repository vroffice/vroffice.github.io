
(function ($) {
    "use strict";

    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if(!iOS)
    {
    	let v = $('#tmpl').html().trim();
		$("#containerForVideo").append(v);
    }

})(jQuery);