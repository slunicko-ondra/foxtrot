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

(function ($) {

	$('.link-left').on('click', function (event) {
		if(document.getElementById('conditions').offsetHeight > 50) {
			document.getElementById('conditions').style.height = '0px';
		} else {
			document.getElementById('conditions').style.height = document.getElementById('conditions').scrollHeight + 'px';
			document.getElementById('techspecs').style.height = '0px';
		}
    });
	$('.link-right').on('click', function (event) {
		if(document.getElementById('techspecs').offsetHeight > 50) {
			document.getElementById('techspecs').style.height = '0px';
		} else {
			document.getElementById('techspecs').style.height = document.getElementById('techspecs').scrollHeight + 'px';
			document.getElementById('conditions').style.height = '0px';
		}
    });
	
    $('.support-more-section .order-btn').on('click', function (event) {
        event.preventDefault();

        $('.support-more-payment-section').slideDown(1000);

        $('html, body').animate({
            scrollTop: $('.support-more-payment-section').offset().top
        }, 1000);
    });

    $('.close-payment-window').on('click', function () {
        $(this).closest('.payment-window').slideUp(1000);
        $('.subscribe-section .order-subscribe-btn').removeClass('active');
    });

    $('.close-payment-more-window').on('click', function () {
        $(this).closest('.payment-more-window').slideUp(1000);
    });

    $('.subscribe-btn').on('click', function (event) {
        event.preventDefault();

        $('.login-step-forgot-password').attr("style", "display: none !important");
        $('.login-step-1').hide();
        $('.register-step-3').hide();
        $('.register-step-1').show();
        $('.register-popup').show();
        $('.lwa-register').show();
    });

    $('.login-step-forgot-password .subscribe-btn').on('click', function (event) {
        event.preventDefault();

        $('.login-step-forgot-password').attr("style", "display: none !important");
        $('.register-popup').show();
        $('.lwa-register').show();
    });

    $('.login-open-btn').on('click', function (event) {
        event.preventDefault();

        $('.login-step-forgot-password').attr("style", "display: none !important");
        $('.login-popup').fadeIn();
        $('.register-popup').hide();
        $('.login-step-1').show();
    });

    $('.login-open-btn-and-scroll').on('click', function (event) {
        event.preventDefault();

        $('.login-step-forgot-password').attr("style", "display: none !important");
        $('.login-popup').fadeIn();
        $('.register-popup').hide();
        $('.login-step-1').show();

        $('html, body').animate({
            scrollTop: parseInt($(".login-popup").offset().top)
        }, 1000);
    });

    $('.register-open-btn').on('click', function (event) {
        event.preventDefault();

        $('.login-step-forgot-password').attr("style", "display: none !important");
        $('.login-popup').fadeIn();
        $('.register-popup').show();
        $('.lwa-register').show();
    });

    $('.close-login-register-popup').on('click', function () {
        $('.login-register-popup').fadeOut();
    });

    $('.close-registration').on('click', function () {
        $('.login-register-popup').fadeOut();
    });

    // $('.register-btn').on('click', function(event) {
    //     event.preventDefault();
    //     $('.register-step-1').hide();
    //     $('.register-step-2').fadeIn();
    // });

    $('.forgot-password-btn').on('click', function (event) {
        event.preventDefault();
        $('.login-step-1').hide();
        $('.login-step-forgot-password').show();
    });

    $('.login-step-forgot-password .login-open-btn').on('click', function (event) {
        event.preventDefault();
        $('.login-step-1').show();
        $('.login-step-forgot-password').hide();
    });

    $('.login-register-popup .form-group input').focus(function () {
        $(this).css('border-color', '#333463');
        $(this).prev().find('i').css('color', '#333463');
    });

    $('.login-register-popup .form-group input').blur(function () {
        $(this).css('border-color', '#66cc33');
        $(this).prev().find('i').css('color', '#66cc33');
    });

    $('.payment-company-btn').on('click', function (event) {
        event.preventDefault();

        $('.payment-company').slideDown(1000);
        $('html, body').animate({
            scrollTop: $('.payment-company').offset().top
        }, 1000);
    });

    $('.payment-company-btn-second').on('click', function (event) {
        event.preventDefault();

        $('.payment-company-second').slideDown(1000);
        $('html, body').animate({
            scrollTop: $('.payment-company-second').offset().top
        }, 1000);
    });

    $('.subscribe-btns .cancel-subscribe-btn').on('click', function (event) {
        event.preventDefault();

        $('.confirm-cancel-subscribe').slideDown(500);
    });

    $('.confirm-cancel-subscribe .close-confirm-subscribe-window').on('click', function (event) {
        event.preventDefault();

        $(this).closest('.confirm-cancel-subscribe').slideUp(500);

    });

    function calculateFinalPrice() {
        let inputSupportUsMore = parseFloat($('#custom_price_gift').val());
        let defaultPrice = parseFloat($('.subscribe-box-head .woocommerce-Price-amount').text().replace(',', '.'));
        let finalPrice = $('.final-price .woocommerce-Price-amount');

        if (!isNaN(inputSupportUsMore) && inputSupportUsMore > 0) {

            let calculatePrice = inputSupportUsMore + defaultPrice;
            let result = calculatePrice.toFixed(2).toString().replace(/\./g, ',') + ' €';

            finalPrice.text(result);
        } else {
            finalPrice.text(defaultPrice.toFixed(2).toString().replace(/\./g, ',') + ' €');
        }
    }

    $('.number-of-repetitions-input, .support-us-more-input').on('input', function () {
        calculateFinalPrice();
    });

    $("#custom_price_gift").keyup(function () {
        let max = parseInt($(this).attr('max'));
        let min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            $(this).val(max);

            calculateFinalPrice();
        } else if ($(this).val() < min) {
            $(this).val(min);

            calculateFinalPrice();
        }
    });

    $("#tabs-top, #tabs-top-mobile").tabs({
        active: 0
    });

    $("#tabs-most-popular, #tabs-most-popular-mobile").tabs({
        active: 0
    });

    $('.search-form .show-search-input').on('click', function (event) {
        event.preventDefault();
        $('.search-input').show();
        $('.search-input').focus();
        $('.show-search-input').hide();
        $('.hide-search-input').show();
    });

    $('.search-form .hide-search-input').on('click', function (event) {
        event.preventDefault();
        $('.search-input').hide();
        $('.show-search-input').show();
        $('.hide-search-input').hide();
    });

    $('img').each(function () {
        if (!$(this).hasClass('lazy')) {
            let src = $(this).attr('src');
            $(this).attr('src', "");

            $(this).addClass('lazy');
            $(this).attr('data-src', src);
        }
    });

    $(function () {
        const opt = {
            root: null,
            rootMargin: '0px 0px 0px 0px'
        };

        //Regular image <img> lazyloading
        let images = [...document.querySelectorAll('.lazy')];

        function onIntersection(imageEntities) {
            imageEntities.forEach(image => {
                if (image.isIntersecting) {
                    observer.unobserve(image.target);
                    if (image.target.dataset.src && !image.target.dataset.src.includes('img.php'))
                        image.target.src = image.target.dataset.src;
                }
            })
        }

        let observer = new IntersectionObserver(onIntersection, opt);
        images.forEach(image => observer.observe(image));

        //Background Image lazy loading
        let images2 = [...document.querySelectorAll('.lazy_bckg')];

        function onIntersection2(imageEntities) {
            imageEntities.forEach(image => {
                if (image.isIntersecting) {
                    observer.unobserve(image.target);
                    if (image.target.dataset.src)
                        $(image.target).css("background-image", "url('" + image.target.dataset.src + "')");
                }
            })
        }

        let observer2 = new IntersectionObserver(onIntersection2, opt);
        images2.forEach(image => observer2.observe(image));
    });

    $('#continue-reading').on('click', function (event) {
        event.preventDefault();

        $('.bootstrapiso').hide();
        $('.article-content').removeAttr('style');
        $('.support-us-box').hide();
    });

    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    }

    var activationKeyParam = getUrlParameter('key');
    var activationUserParam = getUrlParameter('user');

    if (activationKeyParam && activationUserParam) {
        $('.login-popup').fadeIn();
        $('.login-step-1').hide();
        $('.register-popup').show();
        $('.register-step-1').hide();
        $('.register-step-2').hide();
        $('.register-step-3').show();
    }

    // if ($('.article-content').find('figure').length > 0) {
    //     $('.article-content').css('max-height', '800px');
    // }


})(jQuery);

}
/*
     FILE ARCHIVED ON 09:57:16 Mar 02, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:18:45 Apr 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 217.691
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.083
  RedisCDXSource: 0.581
  esindex: 0.008
  LoadShardBlock: 196.006 (3)
  PetaboxLoader3.datanode: 256.606 (5)
  CDXLines.iter: 18.039 (3)
  load_resource: 330.732 (2)
  PetaboxLoader3.resolve: 113.087 (2)
*/