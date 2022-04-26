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

function initAd(src = '', text = '', async = false, dataCfasync = null, dataAdClient = '') {
    if (adCondition()) {
        let script = document.createElement('script');
        if (src !== '') {
            script.src = src;
        }
        if (text !== '') {
            script.text = text;
        }
        if (async === true) {
            script.setAttribute("async", "");
        }

        if (dataCfasync === false) {
            script.setAttribute("data-cfasync", "false");
        }

        if (dataAdClient !== '') {
            script.setAttribute("data-ad-client", dataAdClient);
        }

        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

function adCondition() {
    return localStorage.getItem("sub-auth") == null || localStorage.getItem("show-ad") !== "false";
}
function subauthaxo(){
	if(localStorage.getItem("sub-auth") != null){
		if(localStorage.getItem("show-ad") == "false" || localStorage.getItem("show-ad") == "true"){
		   return true;
		   }else{
			   return false;
		   }
	}else{
		return false;
	}
}

function testsub(){
	console.log("sub-auth: "+localStorage.getItem("sub-auth"));
	console.log("show-ad: "+localStorage.getItem("show-ad"));
}

function homepageAds() {
    //initAd("https://web.archive.org/web/20220302095715/https://securepubads.g.doubleclick.net/tag/js/gpt.js", '', true);
    //initAd('', "window.googletag = window.googletag || {cmd: []}");
    //initAd("https://web.archive.org/web/20220302095715/https://protagcdn.com/s/hlavnespravy.sk.js");
    //initAd('', "window.protag = window.protag || { cmd: [] };protag.cmd.push(function () {protag.pageInit();});");
    //initAd("https://web.archive.org/web/20220302095715/https://cdn5.proadscdn.com/hlavnespravy.sk/homepage.js", '', false, false);
}

function postAds() {
    //initAd("https://web.archive.org/web/20220302095715/https://securepubads.g.doubleclick.net/tag/js/gpt.js", '', true);
    //initAd('', "window.googletag = window.googletag || {cmd: []}");
    //initAd("https://web.archive.org/web/20220302095715/https://protagcdn.com/s/hlavnespravy.sk.js");
    //initAd('', "window.protag = window.protag || { cmd: [] };protag.cmd.push(function () {protag.pageInit();});");
    //initAd("https://web.archive.org/web/20220302095715/https://cdn5.proadscdn.com/hlavnespravy.sk/post.js", '', false, false);
}

function headAds() {
    initAd("https://web.archive.org/web/20220302095715/https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", '', true, null, "ca-pub-8240243308877930");
}




}
/*
     FILE ARCHIVED ON 09:57:15 Mar 02, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:18:37 Apr 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 242.182
  exclusion.robots: 0.088
  exclusion.robots.policy: 0.081
  RedisCDXSource: 1.216
  esindex: 0.007
  LoadShardBlock: 215.267 (3)
  PetaboxLoader3.datanode: 280.015 (5)
  CDXLines.iter: 16.647 (3)
  load_resource: 194.433 (2)
  PetaboxLoader3.resolve: 107.55 (2)
*/