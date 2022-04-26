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

$(window).load(init);
setTimeout(init, 4000);

var SUB_URL = "https://web.archive.org/web/20220302095715/https://www.predplatne.hlavnespravy.sk";
const urlParams = new URLSearchParams(window.location.search);
const TOKEN_KEY = "sub-auth";
var hiddenParagraphs;
var tokenValidated;
var initialized;

beforeLoad();

async function beforeLoad() {
    await tryToGetTokenFromUrl();
    if (getItem(TOKEN_KEY) !== null) {
        showLoggedUserBar();
    } else {
        showGuestBar();
    }
}

async function init() {
    if (initialized) return;
    initialized = true;
    if (!adCondition()) {
        handleAdsCreated();
    }
    if (getItem("show-ad") === "false") {
        $("#div-gpt-ad-hlavicka").hide();
    }
    initButtons();
    if (tokenValidated || await validateToken()) {
        if (getItem("show-ad") === "expired") {
            lockArticle();
        }
        showLoggedUserBar();
    } else {
        lockArticle();
        showGuestBar();
    }
}

function hasClass(target, cssClass) {
    if (target === undefined || typeof target.hasClass !== 'function') return false;
    return target.hasClass(cssClass);
}

function htmlEquals(target, html) {
    if (target === undefined || typeof target.html !== 'function') return false;
    return target.html() === html;
}

function srcStartsWith(target, str) {
    if (target === undefined || typeof target.attr !== 'function') return false;
    let src = target.attr("src");
    return src !== undefined && src.startsWith(str);
}

function idStartsWith(target, str) {
    if (target === undefined || typeof target.attr !== 'function') return false;
    let id = target.attr("id");
    return id !== undefined && id.startsWith(str);
}

function handleAdsCreated() {
    $("#odporucame").css("display", "none");
    $("#left-wrapper").css("display", "none");
    $("#right-wrapper").css("display", "none");
	$("#protag-adm-branding").css("display", "none");
	$("ins").css("display", "none");
	$("ins").attr("style", "display: none !important");
	$('<style>').text("ins{display: none !important}").appendTo(document.head);
	$("ins").remove();
	$('<script>').text("jQuery(window).load(function () { $('ins').remove() });").appendTo(document.head);
	$('<script>').text("$('html').on('DOMNodeInserted', 'ins', function () { $('ins').remove(); $('a').click(function() { event.preventDefault(); window.location.href = $(this).attr('href'); }); });").appendTo(document.head);
	$('script [src="https://web.archive.org/web/20220302095715/https://securepubads.g.doubleclick.net/gpt/pubads_impl_page_level_ads_2021111601.js"]').remove();
	$("#podcast-aside-wrapper").removeAttr('id');
	$("#podcast-article-wrapper").removeAttr('id');
	$('#disqus_thread [sandbox="allow-forms allow-popups allow-same-origin allow-scripts"]').css("display", "none");
    $(".widget_text").css("display", "none");
    $("div[id^=hlavn-]").css("display", "none");
    $("div[id^=protag-sidebar]").css("display", "none");
    $("div[id^=div-gpt-ad-home]").css("display", "none");
    $("div[id^=protag-sticky]").css("display", "none");
    $(".teads-inread").css("display", "none");
    $("iframe[src^='//web.archive.org/web/20220302095715/https://tempest.services.disqus.com']").css("display", "none");
    $(document).bind('DOMNodeInserted',function(e){
        var target = $(e.target);
        if (idStartsWith(target, "protag-sticky") || idStartsWith(target,"hlavn-") || idStartsWith(target,"div-gpt-ad-home")
            || idStartsWith(target,"protag-sidebar") || srcStartsWith(target,"//web.archive.org/web/20220302095715/https://tempest.services.disqus.com") || htmlEquals(target,"Odpor  ame")
            || hasClass(target, "teads-inread")) {
            target.css("display", "none");
        }
    });
}

function lockArticle() {
	if ($("div.caricature-content").length > 0) {
        $("div[id='support-header-w']").parent().hide();
        return;
    }
    let contentChildren = $("div.article-content > *");
    let endIndex = contentChildren.index($(".article-action-buttons-second"));
    var slicedContent = contentChildren.slice(0, endIndex);
    var indexBeforeFirstHiddenParagraph = slicedContent.index($("div.article-content > div[class^=hlavn-]").eq(2));
    let offset = adCondition() ? 1 : 4;
    hiddenParagraphs = slicedContent.slice(indexBeforeFirstHiddenParagraph + offset);
    let firstHiddenParagraph = hiddenParagraphs.eq(0);
    firstHiddenParagraph.addClass("first-paragraph-disabled");
    hiddenParagraphs.slice(1).addClass("paragraph-hidden");
    hiddenParagraphs.addClass("paragraph-disabled");
    var more = subs.more;
    var hsp_image = subs.hsp_image;
	
    if (more === 'schovat') {
    if (firstHiddenParagraph.length) {
        var hsp_locked = subs.hsp_locked;
	hsp_locked = hsp_locked.replace(/(\r\n|\n|\r)/gm, "<br>");
        let blocker2 = "<div class=\"support-us-box p-4 mx-auto mt-5\">\n" +
            "        <div class=\"row\">\n" +
            "            <div class=\"hs-image col-sm-2\">\n" +
            "                <img src=\"/wp-content/themes/hsp2/images/hs-image.png\" alt=\"hs image\" class=\"img-fluid\">\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"col-md-10\">\n" +
            "                <p class=\"font-bold\" style=\"margin-top: 5px;\">" + hsp_locked + "<\p>" +
            "\n" +
            "                <p>" + unescape('%u010Fakujeme') + "<br/>" + unescape('Va%u0161a%20redakcia') +"</p>\n" +
            "                \n" +
            "            </div>\n" +
            "            <img src=\"" + hsp_image + "\" width=\"600\">\n" +
            "            <div class=\"col-12 d-flex justify-content-center flex-wrap\">\n" +
            "                <a href=\"" + SUB_URL + "\" class=\"primary-btn support-btn m-1 px-2 py-1 subscribe-btn\">" + unescape('CHCEM%20PODPORI%u0164') +"</a>\n" +
            "            </div>\n" +
            "            <div class=\"col-12 text-center mt-2\">\n" +
            "                <a onclick=\"showLoginForm()\" style=\"cursor:pointer;\" class=\"color-black d-block subscribe-btn \">" + unescape('M%E1te%20u%u017E%20konto%3F%20Prihl%E1ste%20sa') + "</a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>";
        $(blocker2).insertAfter(firstHiddenParagraph);
    }
    } else {
    if (firstHiddenParagraph.length) {
		console.log(firstHiddenParagraph);
		
        var hsp_unlocked = subs.hsp_unlocked;
	hsp_unlocked = hsp_unlocked.replace(/(\r\n|\n|\r)/gm, "<br>");
        let blocker2 = "<div class=\"support-us-box p-4 mx-auto mt-5\">\n" +
            "        <div class=\"row\">\n" +
            "            <div class=\"hs-image col-sm-2\">\n" +
            "                <img src=\"/wp-content/themes/hsp2/images/hs-image.png\" alt=\"hs image\" class=\"img-fluid\">\n" +
            "            </div>\n" +
            "\n" +
            "            <div class=\"col-md-10\">\n" +
            "                <p class=\"font-bold\" style=\"margin-top: 5px;\">" + hsp_unlocked + "<\p>" +
            "\n" +
            "                <p>" + unescape('%u010Fakujeme') + "<br/>" + unescape('Va%u0161a%20redakcia') +"</p>\n" +
            "                \n" +
            "            </div>\n" +
            "            <img src=\"" + hsp_image + "\" width=\"600\">\n" +
            "            <div class=\"col-12 d-flex justify-content-center flex-wrap\">\n" +
            "                <a href=\"" + SUB_URL + "\" class=\"primary-btn support-btn m-1 px-2 py-1 subscribe-btn\">" + unescape('CHCEM%20PODPORI%u0164') +"</a>\n" +
            "                <a href='' onclick='unlockArticle(); return false;' class=\"primary-btn-blue continue-read-btn m-1 px-2 py-1\">" + unescape('POKRA%u010COVA%u0164%20V%20%u010C%CDTAN%CD') + "</a>\n" +
            "            </div>\n" +
            "            <div class=\"col-12 text-center mt-2\">\n" +
            "                <a onclick=\"showLoginForm()\" style=\"cursor:pointer;\" class=\"color-black d-block subscribe-btn \">" + unescape('M%E1te%20u%u017E%20konto%3F%20Prihl%E1ste%20sa') + "</a>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>";
        $(blocker2).insertAfter(firstHiddenParagraph);
    }
    }
}

function unlockArticle() {
    hiddenParagraphs.eq(0).removeClass("first-paragraph-disabled");
    hiddenParagraphs.removeClass("paragraph-disabled");
    hiddenParagraphs.removeClass("paragraph-hidden");
    $(".support-us-box").css("display", "none");
}

function showLoggedUserBar() {
    $("#profileNav").css("display", "block");
    $("#logoutNav").css("display", "block");
    $("#loginNav").css("display", "none");
    $("#subscriptionNav").css("display", "none");
    if (getItem("show-ad") === "expired") {
        $("#expiredText").css("display", "inline");
    }
	$(".article-content  p").removeClass("first-paragraph-disabled");
	$(".article-content  p").removeClass("paragraph-hidden");
	$(".article-content  p").removeClass("paragraph-disabled");
	$(".article-content  .support-us-box").hide();
}

function showGuestBar() {
    $("#loginNav").css("display", "block");
    $("#subscriptionNav").css("display", "block");
    $("#profileNav").css("display", "none");
    $("#logoutNav").css("display", "none");
}

function login() {
    removeItem("show-ad");
    removeItem(TOKEN_KEY);
	//$.ajax({
    //    method: "GET",
	//	url: "https://web.archive.org/web/20220302095715/https://predplatne.hlavnespravy.sk/wp-json/wpoauthserver/v1/logout/"
	//});
	let element = document.createElement("iframe"); 
	element.setAttribute('src', 'https://web.archive.org/web/20220302095715/https://predplatne.hlavnespravy.sk/wp-json/wpoauthserver/v1/logout/');
	element.setAttribute('style', 'display: none');
	document.body.appendChild(element);
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: SUB_URL+"/wp-json/jwt-auth/v1/token",
        data: {username: $("#username").val(), password: $("#password").val()},
		beforeSend: function() {$("#login-overlay").css("display", "block");}
    })
        .done(function(result) {
            if (result != null && result.token != null) {
                toggleWrongLoginMessage(false);
                setItem(TOKEN_KEY, result.token);
                validateToken(true);
            } else {
				$("#login-overlay").css("display", "none");
                removeItem(TOKEN_KEY);
                toggleWrongLoginMessage(true);
            }
        })
        .fail(function() {
			$("#login-overlay").css("display", "none");
            toggleWrongLoginMessage(true);
    });
}

function toggleWrongLoginMessage(show) {
    $("#wrong-login").css("display", show ? "block" : "none");
}

async function tryToGetTokenFromUrl() {
    if (urlParams.get("akey")) {
        setItem(TOKEN_KEY, urlParams.get("akey"));
        window.history.replaceState({}, document.title, "/");
        await validateToken();

    }
}

function initButtons() {
    $(".login-open-btn").on('click', function() {
        showLoginForm();
    });
    $("#logoutNav").on('click', function() {
        logout();
    });

    $("#subProfileLink").attr("href", SUB_URL + "?action=profile");
    $(".subscriptionButton").attr("href", SUB_URL + "?action=register");
    if (getItem(TOKEN_KEY) !== null) {
        $("#subProfileLink").click(function() {$(this).attr("href", $(this).attr("href") + "&redir=" + getItem(TOKEN_KEY) )});
    }
    $(".forgotPasswordButton").attr("href", SUB_URL + "?action=recover-password");
    $("a[data-provider='facebook']").attr("href", SUB_URL + "?action=facebook-login&callback-url=" + getCurrentUrl());
    $("a[data-provider='wkontakte']").attr("href", SUB_URL + "?action=vk-login&callback-url=" + getCurrentUrl());
    $("a[data-provider='google']").attr("href", SUB_URL + "?action=google-login&callback-url=" + getCurrentUrl());
    $("#password").on('keyup', function(e) {if (e.key === 'Enter') { login(); }});

}

function getCurrentUrl() {
    let str = location.href;
    let httpsPrefix = str.startsWith("https") ? "https" : "http";
    let res = str.replace(httpsPrefix + "://www.", httpsPrefix + "://");
    res = res.replace(httpsPrefix + "://", httpsPrefix + "://www.");
    return res;
}

async function validateToken(reload = false) {
    let token = getItem(TOKEN_KEY);
    if (token == null) return;
    return $.ajax({
        method: "POST",
        dataType: "JSON",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        url: SUB_URL+"/wp-json/jwt-auth/v1/check-subscription",
        error: function(xhr, ajaxOptions, thrownError) {
            if (xhr.status == 403) {
                removeItem(TOKEN_KEY);
                tokenValidated = false;
                if (reload) {
                    location.reload();
                }
                return false;
            }
        }
    }).done(function (result) {
        if (result != null && result.user != null) {
            if ("expired" == result.user.name) {
                setItem("show-ad", "expired");
            } else {
                setItem("show-ad", result.user.show);
            }
            if (result.newToken != null) {
                setItem(TOKEN_KEY, result.newToken);
            }
			let element = document.createElement("iframe"); 
			element.setAttribute('src', 'https://web.archive.org/web/20220302095715/https://www.predplatne.hlavnespravy.sk?action=profile');
			element.setAttribute('style', 'display: none');
			document.body.appendChild(element);
			setTimeout(function(){
            	tokenValidated = true;
				if (reload) {
                	location.reload();
            	}
            	return true;
			}, 500);

        }
    }).fail(function () {
        removeItem(TOKEN_KEY);
        removeItem("show-ad");
        tokenValidated = false;
        location.reload();
        return false;
    });
}

function showLoginForm() {
    $(".login-register-popup").css("display", "block");
}

function hideLoginForm() {
    $(".login-register-popup").css("display", "none");
}

function logout() {
	let element = document.createElement("iframe"); 
	element.setAttribute('src', 'https://web.archive.org/web/20220302095715/https://predplatne.hlavnespravy.sk/wp-json/wpoauthserver/v1/logout/');
	element.setAttribute('style', 'display: none');
	document.body.appendChild(element);
	setTimeout(function(){
   		removeItem("show-ad");
    	removeItem(TOKEN_KEY);
    	location.reload();
    	lockArticle();
    	showGuestBar();
	}, 1000);
}

function setItem(item, value) {
    if (shouldUseLocalStorage()) {
	localStorage.setItem(item, value);
    } else {
        setCookie(item, value, 30);
    }
}

function getItem(item) {
    return shouldUseLocalStorage() ? localStorage.getItem(item) : getCookie(item);
}

function removeItem(item) {
    if (shouldUseLocalStorage()) {
        localStorage.removeItem(item);
    } else {
        eraseCookie(item);
    }
}

function shouldUseLocalStorage() {
    return 'localStorage' in window && window.localStorage !== null;
}



function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


}
/*
     FILE ARCHIVED ON 09:57:15 Mar 02, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:18:38 Apr 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 71.793
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.068
  RedisCDXSource: 0.674
  esindex: 0.007
  LoadShardBlock: 43.418 (3)
  PetaboxLoader3.datanode: 426.057 (5)
  CDXLines.iter: 19.557 (3)
  load_resource: 570.198 (2)
  PetaboxLoader3.resolve: 179.048 (2)
*/