var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery.lazyLoadXT.updateEvent = 'load orientationchange resize scroll touchmove focus click customlazyloadxtevent';
jQuery.lazyLoadXT.edgeY = a3_lazyload_extend_params.edgeY;
jQuery.lazyLoadXT.srcsetExtended = false;
if ( typeof a3_lazyload_extend_params.horizontal_container_classnames !== 'undefined' && '' !== a3_lazyload_extend_params.horizontal_container_classnames ) {
	jQuery.lazyLoadXT.scrollContainer = a3_lazyload_extend_params.horizontal_container_classnames;
}

jQuery( document ).ready( function( $ ) {
	jQuery(document).on( 'mouseenter', '.site-header-cart', function() {
		jQuery(document).trigger('customlazyloadxtevent');
	});
	jQuery(document).on( 'mouseenter', '.widget_shopping_cart', function() {
		jQuery(document).trigger('customlazyloadxtevent');
	});
	jQuery(document).on( 'mouseover', '#wp-admin-bar-top-secondary', function() {
		jQuery(document).trigger('customlazyloadxtevent');
	});
});

jQuery(document).ajaxComplete( function() {
    setTimeout(function() {
        jQuery(window).lazyLoadXT();
    }, 1000 );
});

}
/*
     FILE ARCHIVED ON 09:57:19 Mar 02, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:18:49 Apr 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1703.613
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.086
  RedisCDXSource: 0.612
  esindex: 0.008
  LoadShardBlock: 1681.505 (3)
  PetaboxLoader3.datanode: 1716.278 (5)
  CDXLines.iter: 18.819 (3)
  PetaboxLoader3.resolve: 2432.776 (3)
  load_resource: 2500.87 (2)
*/