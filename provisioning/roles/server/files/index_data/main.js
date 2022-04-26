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

(function($) {

    'use strict';

    $('.subscribe-btn').on('click', function(event) {
        event.preventDefault();

        $('.login-register-popup').hide();
        $('.register-popup').fadeIn();
    });

    $('.login-btn').on('click', function(event) {
        event.preventDefault();

        $('.login-register-popup').hide();
        $('.login-popup').fadeIn();
    });


    $('.close-login-register-popup').on('click', function() {
        $('.login-register-popup').fadeOut();
    });

    $('.register-btn').on('click', function(event) {
        event.preventDefault();
        $('.register-step-1').hide();
        $('.register-step-2').fadeIn();
    });

    $('.forgot-password-btn').on('click', function(event) {
        event.preventDefault();
        $('.login-step-1').hide();
        $('.login-step-forgot-password').fadeIn();
    });

    $('.login-register-popup .form-group input').focus(function() {
        $(this).css('border-color', '#333463');
        $(this).prev().find('i').css('color', '#333463');
    });

    $('.login-register-popup .form-group input').blur(function() {
        $(this).css('border-color', '#80c94e');
        $(this).prev().find('i').css('color', '#80c94e');
    });

    $('.payment-company-btn').on('click', function(event) {
        event.preventDefault();

        $('.payment-company').slideDown(1000);
        $('html, body').animate({
            scrollTop: $('.payment-company').offset().top
        }, 1000);
    });

    $('.payment-company-btn-second').on('click', function(event) {
        event.preventDefault();

        $('.payment-company-second').slideDown(1000);
        $('html, body').animate({
            scrollTop: $('.payment-company-second').offset().top
        }, 1000);
    });

    $('.subscribe-btns .cancel-subscribe-btn').on('click', function(event) {
        event.preventDefault();

        $('.confirm-cancel-subscribe').slideDown(500);
    });

    $('.confirm-cancel-subscribe .close-confirm-subscribe-window').on('click', function(event) {
        event.preventDefault();

        $(this).closest('.confirm-cancel-subscribe').slideUp(500);

    });

    // SHOW PAYMENT COMPANY FORM ON PAYMENT PAGE
    $('.show-payment-company-form-btn').on('click', function(event) {
        event.preventDefault();
        $(this).hide();
        $('.payment-company-section').slideDown(1000);
        $('html, body').animate({
            scrollTop: $('.payment-company-section').offset().top
        }, 1000);
    });

    // HIDE PAYMENT COMPANY FORM ON PAYMENT PAGE
    $('.hide-payment-company-form').on('click', function() {
        $('.payment-company-section').slideUp(1000);
        $('.show-payment-company-form-btn').show();
    });

    // CALCULATE FINAL PRICE ON PAYMENT PAGE
    function calculateFinalPrice() {
        var subscriptionPrice = parseFloat($('.order-summary .subscription-amount').text().replace(/\,/g, '.'));
        var inputNumberOfRepetitions = parseInt($('.order-summary .number-of-repetitions-input').val());
        var textNumberOfRepetitions = $('.order-summary .number-of-repetitions');
        var inputSupportUsMore = parseInt($('.order-summary .support-us-more-input').val());
        var textSupportUsMore = $('.order-summary .support-us-more-amount');
        var finalPrice = $('.order-summary .final-price');

        var calculatePrice = (inputNumberOfRepetitions * subscriptionPrice) + inputSupportUsMore;
        var result = calculatePrice.toFixed(2).toString().replace(/\./g, ',');

        textNumberOfRepetitions.text(inputNumberOfRepetitions);
        textSupportUsMore.text(inputSupportUsMore);
        finalPrice.text(result);
    }

    $('.number-of-repetitions-input, .support-us-more-input').on('input', function() {
        calculateFinalPrice();
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

    $('.support-us-form-btn').on('click', function(e) {
        e.preventDefault();

        let supportAmount = parseFloat($('#inputSupportAmount').val()) || 0;
        $(".subscribe-section-summary").fadeIn();
        $(".subscribe-section-summary .supportAmount").html(supportAmount + ' &euro;');
        $(".supportUsAmount").val(supportAmount);

        $("#emailForm #message").hide(500);
        $("#emailForm #formBody").show(800);

        $('html, body').animate({
            scrollTop: $(".subscribe-section-summary").offset().top
        }, 1000);
    });

    $('#inputSupportAmount').on('input', function() {

        let supportBtnAttr = $('.support-us-form-btn');

        if ($(this).val().length > 0) {
            supportBtnAttr.prop("disabled", false)
        } else {
            supportBtnAttr.prop("disabled", true)
        }
    })

    $('.close-section').on('click', function (e) {
        e.preventDefault();

        $(".subscribe-section-summary").hide();
        $('#inputSupportAmount').val('');
        $('.support-us-form-btn').prop("disabled", true)
    })

    document.getElementsByName("btnSupportUs")[0].onclick = function() {
        if (!$('#autoSizingCheck2').is(':checked')) {
            $('#err-msg-gdpr').html('Pre odoslanie údajov na e-mail je potrebné súhlasiť so spracovaním osobných údajov');
            return false;
        } else {
            $('#err-msg-gdpr').html('');
        }
        let _email = $('#formInputEmail').val();
        if( _email === '' ){
            $('#err-msg-gdpr').html('Nezadali ste e-mailovú adresu');
            return false;
        } else if( !(_email.indexOf("@") > 0 && _email.indexOf(".") > 0 && _email.lastIndexOf("@") < _email.lastIndexOf(".")) ) {
            $('#err-msg-gdpr').html('Zadajte platnú e-mailovú adresu');
            return false;
        }
        return true;
    };

    $('#emailForm').submit(function (e) {
        var dataString = $(this).serialize();

        $("#emailForm #formBody").hide();
        $("#message").html("<h5>Odosielanie údajov na e-mail...</h5>").hide().fadeIn(1000);

        $.ajax({
            type: "POST",
            paths: "/page-podporujem.php",
            data: dataString,
            success: function () {
                $("#message")
                    .html("<h4>Údaje boli odoslané na Váš e-mail!</h4>")
                    .hide()
                    .fadeIn(2000, function () {
                        $("#message").append(
                            "<p>Ďakujeme, že nás podporujete!</p>"
                        );
                    });
            }
        });

        e.preventDefault();
    });


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
  captures_list: 419.247
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.088
  cdx.remote: 0.07
  esindex: 0.011
  LoadShardBlock: 193.806 (3)
  PetaboxLoader3.datanode: 190.967 (5)
  CDXLines.iter: 29.129 (3)
  load_resource: 163.724 (2)
  PetaboxLoader3.resolve: 79.746 (2)
*/