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

if ($(window).width() < 992) {
var standalone = window.navigator.standalone,
  userAgent = window.navigator.userAgent.toLowerCase(),
  safari = /safari/.test(userAgent),
  ios = /iphone|ipod|ipad/.test(userAgent);

if (ios) {
  if (!standalone && safari) {
    $('.mobilebanner').show();
  } else if (!standalone && !safari) {
    $('.mobilebanner').hide();
  };
} else {
  if (userAgent.includes('wv')) {
    $('.mobilebanner').hide();
  } else {
    $('.mobilebanner').show();
  }
};
} else {
    $('.mobilebanner').hide();
}


//////mobilne menu
$('#menu-collapse').on('show.bs.collapse', function () {
    $('.nav-pills').show().addClass('nav-stacked');
});

$('#menu-collapse').on('hide.bs.collapse', function () {
    setTimeout(function () {
        $('.nav-pills').removeClass('nav-stacked');
    }, 500);
});

//mobilny search button	
$('#search-btn').click(function () {
    if ($('.search-mobile').is(":visible")) {
        $('.navbar-menu,.logo-mobile').show();
        $('.search-mobile').hide();
        $('#search-btn .icon-cancel').removeClass('icon-cancel').addClass('icon-search');
    } else {
        $('.navbar-menu,.logo-mobile').hide();
        $('.search-mobile').show();
        $('#search-btn .icon-search').removeClass('icon-search').addClass('icon-cancel');
    }
});

//dotdotdot
/*$(".top-item-wrapper-text").dotdotdot({
    tolerance: -10,
});*/

$('.article-content img').css('max-width', '100%');

if (window.matchMedia('(max-width: 767px)').matches) {
    $(".top-1-text, .category-wrapper-text").dotdotdot({
        'ellipsis': '... ',
        'wrap': 'letter',
        'fallbackToLetter': true,
        'lastCharacter': {
            remove: [' ', ',', ';', '.', '!', '?'],
            noEllipsis: []
        },
        'tolerance': -10,
        'callback': null,
        'after': null,
        'height': 140,
        'watch': false,
        'windowResizeFix': true,
        'maxLength': null
    });
} else {
    $(".top-1-text, .category-wrapper-text").dotdotdot({
        'ellipsis': '... ',
        'wrap': 'letter',
        'fallbackToLetter': true,
        'lastCharacter': {
            remove: [' ', ',', ';', '.', '!', '?'],
            noEllipsis: []
        },
        'tolerance': -10,
        'callback': null,
        'after': null,
        'height': 340,
        'watch': false,
        'windowResizeFix': true,
        'maxLength': null
    });
}


$(".top-1-text, .category-wrapper-text, .top-item-wrapper-text").css('overflow-wrap', 'break-word');

// $(window).load(function () {
//     $('.article-content .redes-pred-obsahom, .admin-pred-obsahom, .hlavn-pred-obsahom').parent().insertAfter($('.article-content figure'));
//     $('.article-content .redes-pred-obhasom, .admin-pred-obhasom, .hlavn-pred-obhasom').parent().insertAfter($('.article-content figure'));
// });

$('.article-wrapper .caricature-content').find('p').remove();
$('.article-wrapper .caricature-content').find('.hlavn-pred-obsahom').parent().remove();

$('.main-content-wrapper').find('#stop_fix_widget').remove();
$('#sortableWrapper').find('.top-item-wrapper').last().remove();
$('#sortableWrapper').find('.additionalMobileInfo ').last().remove();

$('.archive-page-content').find('ins[data-ad-slot="2826710488"]').parent().hide();
$('.aside-wrapper').find('ins[data-ad-slot="7316334429"]').parents('[id*="text-"]').css('margin-bottom', '44px');

//disqus
var disqus_shortname = 'hlavnespravy';

(function () {
    var s = document.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = '//' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

// INIT CARICATURE CAROUSEL
$('.caricature-carousel').owlCarousel({
    // items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class=\"fas fa-chevron-left fa-2x\"></i>", "<i class=\"fas fa-chevron-right fa-2x\"></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

//aktualny cas
// var today = new Date();
// var aktualnyCas = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes();
// document.querySelector('.hsp-actual-time').innerHTML = aktualnyCas;

// //aktualny datum
// Date.prototype.getMonthName = function() {
// 	var monthNames = [ "január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december" ];
// 	return monthNames[this.getMonth()];
// }

// var dd = today.getDate();
// var mm = today.getMonthName();
// var yyyy = today.getFullYear();

// if(dd<10){dd='0'+dd}
// if(mm<10){mm='0'+mm} 

// var aktualnyDen = dd+'.'+mm+' '+yyyy;
// document.querySelector('.hsp-actual-date').innerHTML = aktualnyDen;

// //meniny
// var mena = ['Nový rok', 'Alexandra', 'Daniela', 'Drahoslav', 'Andrea', 'Antónia', 'Bohuslav(a)', 'Severín', 'Alexej', 'Dáša', 'Malvína', 'Ernest', 'Rastislav', 'Radovan', 'Dobroslav', 'Kristína', 'Nataša', 'Bohdana', 'Drahomíra', 'Dalibor', 'Vincent', 'Zora', 'Miloš', 'Timotej', 'Gejza', 'Tamara', 'Bohuš', 'Alfonz', 'Gašpar', 'Ema', 'Emil',
//     'Tatiana', 'Erik/Erika', 'Blažej', 'Veronika', 'Agáta', 'Dorota', 'Vanda', 'Zoja', 'Zdenko', 'Gabriela', 'Dezider', 'Perla', 'Arpád', 'Valentín', 'Pravoslav', 'Ida', 'Miloslava', 'Jaromír', 'Vlasta', 'Lívia', 'Eleonóra', 'Etela', 'Roman(a)', 'Matej', 'Frederik/Frederika', 'Viktor', 'Alexander', 'Zlatica',
//     'Radomír', 'Albín', 'Anežka', 'Bohumil/Bohumila', 'Kazimír', 'Fridrich', 'Radoslav', 'Tomáš', 'Alan/Alana', 'Františka', 'Branislav, Bruno', 'Angela, Angelika', 'Gregor', 'Vlastimil', 'Matilda', 'Svetlana', 'Boleslav', 'Ľubica', 'Eduard', 'Jozef', 'Víťazoslav', 'Blahoslav', 'Beňadik', 'Adrián', 'Gabriel', 'Marián', 'Emanuel', 'Alena', 'Soňa', 'Miroslav', 'Vieroslava', 'Benjamín',
//     'Hugo', 'Zita', 'Richard', 'Izidor', 'Miroslava', 'Irena', 'Zoltán', 'Albert', 'Milena', 'Igor', 'Július', 'Estera', 'Aleš', 'Justína', 'Fedor', 'Dana/Danica', 'Rudolf', 'Valér', 'Jela', 'Marcel', 'Ervín', 'Slavomír', 'Vojtech', 'Juraj', 'Marek', 'Jaroslava', 'Jaroslav', 'Jarmila', 'Lea', 'Anastázia',
//     'Sviatok práce', 'Žigmunt', 'Galina', 'Florián', 'Lesana/Lesia', 'Hermína', 'Monika', 'Ingrida', 'Roland', 'Viktória', 'Blažena', 'Pankrác', 'Servác', 'Bonifác', 'Žofia', 'Svetozár', 'Gizela', 'Viola', 'Gertrúda', 'Bernard', 'Zina', 'Júlia, Juliana', 'Želmíra', 'Ela', 'Urban', 'Dušan', 'Iveta', 'Viliam', 'Vilma', 'Ferdinand', 'Petronela/Petrana',
//     'Žaneta', 'Xénia', 'Karolína', 'Lenka', 'Laura', 'Norbert', 'Róbert', 'Medard', 'Stanislava', 'Margaréta', 'Dobroslava', 'Zlatko', 'Anton', 'Vasil', 'Vít', 'Blanka', 'Adolf', 'Vratislav/Vratislava', 'Alfréd', 'Valéria', 'Alojz', 'Paulína', 'Sidónia', 'Ján', 'Tadeáš', 'Adriána', 'Ladislav/Ladislava', 'Beáta', 'Peter a Pavol, Petra', 'Melánia',
//     'Diana', 'Berta', 'Miloslav', 'Prokop', 'Sviatok sv. Cyrila a Metoda', 'Patrícia, Patrik', 'Oliver', 'Ivan', 'Lujza', 'Amália', 'Milota', 'Nina', 'Margita', 'Kamil', 'Henrich', 'Drahomír', 'Bohuslav', 'Kamila', 'Dušana', 'Iľja/Eliáš', 'Daniel', 'Magdaléna', 'Oľga', 'Vladimír', 'Jakub', 'Anna/Hana', 'Božena', 'Krištof', 'Marta', 'Libuša', 'Ignác',
//     'Božidara', 'Gustáv', 'Jerguš', 'Dominik/Dominika', 'Hortenzia', 'Jozefína', 'Štefánia', 'Oskár', 'Ľubomíra', 'Vavrinec', 'Zuzana', 'Darina', 'Ľubomír', 'Mojmír', 'Marcela', 'Leonard', 'Milica', 'Elena, Helena', 'Lýdia', 'Anabela', 'Jana', 'Tichomír', 'Filip', 'Bartolomej', 'Ľudovít', 'Samuel', 'Silvia', 'Augustín', 'Nikola', 'Ružena', 'Nora',
//     'Drahoslava', 'Linda', 'Belo', 'Rozália', 'Regína', 'Alica', 'Marianna', 'Miriama', 'Martina', 'Oleg', 'Bystrík', 'Mária', 'Ctibor', 'Ľubomil, Ľudomil', 'Jolana', 'Ľudmila', 'Olympia', 'Eugénia', 'Konštantín', 'Ľuboslav(a)', 'Matúš', 'Móric', 'Zdenka', 'Ľuboš, Ľubor', 'Vladislav', 'Edita', 'Cyprián', 'Václav', 'Michal, Michaela', 'Jarolím',
//     'Arnold', 'Levoslav', 'Stela', 'František', 'Viera', 'Natália', 'Eliška', 'Brigita', 'Dionýz', 'Slavomíra', 'Valentína', 'Maximilián', 'Koloman', 'Boris', 'Terézia', 'Vladimíra', 'Hedviga', 'Lukáš', 'Kristián', 'Vendelín', 'Uršuľa', 'Sergej', 'Alojzia', 'Kvetoslava', 'Aurel', 'Demeter', 'Sabína', 'Dobromila, Kevin', 'Klára', 'Šimon/Šimona', 'Aurélia', 
//     'Denisa/Denis', 'Pamiatka zosnulých', 'Hubert', 'Karol', 'Imrich', 'Renáta', 'René', 'Bohumír', 'Teodor', 'Tibor', 'Martin, Maroš', 'Svätopluk', 'Stanislav', 'Irma', 'Leopold', 'Agnesa', 'Klaudia', 'Eugen', 'Alžbeta', 'Félix', 'Elvíra', 'Cecília', 'Klement', 'Emília', 'Katarína', 'Kornel', 'Milan', 'Henrieta', 'Vratko', 'Ondrej/Andrej', 
//     'Edmund', 'Bibiána', 'Oldrich', 'Barbora', 'Oto', 'Mikuláš', 'Ambróz', 'Marína', 'Izabela', 'Radúz', 'Hilda', 'Otília', 'Lucia', 'Branislava, Bronislava', 'Ivica', 'Albína', 'Kornélia', 'Sláva/Slávka', 'Judita', 'Dagmara', 'Bohdan', 'Adela', 'Nadežda', 'Adam a Eva', '1. Sviatok vianočný', 'Štefan', 'Filoména', 'Ivana, Ivona', 'Milada', 'Dávid', 'Silvester']; 

// var den = Math.round((today.setHours(23) - new Date(today.getYear()+1900, 0, 1, 0, 0, 0))/1000/60/60/24);

// if ((yyyy%4!=0)&&(den>59)) {
// 	den++; 
// }

// if (den==1||den==121||den==186||den==306||den==359) { // sviatky 
// 	meniny = 'Dnes je '+mena[den-1];
// } else {
// 	meniny = mena[den-1];
// }
// document.querySelector('.hsp-actual-name-day').innerHTML = meniny;

//swipebox close on click
$(function () {
    $(document.body)
        .on('click touchend', '#swipebox-slider .current img', function (e) {
            return false;
        })
        .on('click touchend', '#swipebox-slider .current', function (e) {
            $('#swipebox-close').trigger('click');
        });
});

//floating share bar
$('.hspFloatingShareBar').scrollToFixed({
    marginTop: 40,
    dontSetWidth: true,
    removeOffsets: true,
    limit: function () {
        var parent = this.parents('.article-content');
        return parent.offset().top + parent.outerHeight(true) - this.outerHeight(true);
    }
});

//Cookies bar
//$(function(){
//    $('.btn-cookies').on('click', function() {
//		createCookie('hideCookiesBar', 1, 1500);
//		$('.hsp-cookies').slideUp(300);
//                $('.gdprLayer').hide();
//    });
//    
//    $('.btn-cookies-reject').on('click', function() {
//		$('.hsp-cookies').slideUp(300);
//    });
//		
//	var hideCookiesBar = readCookie('hideCookiesBar');
//	if (hideCookiesBar=="" || hideCookiesBar == null){
//		$('.hsp-cookies').show();
//                $('.gdprLayer').show();
//	}else{
//		$('.hsp-cookies').html('');
//                $('.gdprLayer').html();
//	}
//});  

var $div2blink = $(".special-message");
var backgroundInterval = setInterval(function () {
    $div2blink.toggleClass("backgroundRed");
}, 1500)

}
/*
     FILE ARCHIVED ON 09:57:16 Mar 02, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:18:44 Apr 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 76.692
  exclusion.robots: 0.104
  exclusion.robots.policy: 0.095
  RedisCDXSource: 0.588
  esindex: 0.008
  LoadShardBlock: 53.31 (3)
  PetaboxLoader3.datanode: 103.449 (5)
  CDXLines.iter: 19.304 (3)
  load_resource: 192.784 (2)
  PetaboxLoader3.resolve: 81.732 (2)
*/