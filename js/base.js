// Resize Banner top HOME
function setboxHeight() {
	var SurroundingAreaHeight = $('.left-side').height();
	$('.home-top-wrapper').css('height' , SurroundingAreaHeight);
}

setboxHeight();

$(window).resize(function() {
	setboxHeight();
});
// END Resize Banner top HOME

/* * * * Menu functions * * * */
var openNavStat = false;
/* Open */
function openNav() {
  document.getElementById("full-screen-nav").style.height = "100%";
  openNavStat = true;
}

/* Close */
function closeNav() {
  document.getElementById("full-screen-nav").style.height = "0%";
  openNavStat = false;
}
/* * * * END Menu functions * * * */

/* * * * Menu functions * * * */
var openNavStatMobile = false;
/* Open */
function openNavMobile() {
  document.getElementById("full-screen-nav-mobile").style.height = "100%";
  openNavStatMobile = true;
}

/* Close */
function closeNavMobile() {
  document.getElementById("full-screen-nav-mobile").style.height = "0%";
  openNavStatMobile = false;
}
/* * * * END Menu functions * * * */

/* * * * Popup functions * * * */
var openNavStatLeer = false;
/* Open */
function openLeerMasMobile() {
  document.getElementById("full-screen-nav-leer").style.height = "100%";
  openNavStatLeer = true;
}

/* Close */
function closeLeerMasMobile() {
  document.getElementById("full-screen-nav-leer").style.height = "0%";
  openNavStatLeer = false;
}
/* * * * END Popup functions * * * */

/* * * * ENTRADAS functions * * * */
var openEntradasStat = false;
/* Open */
function openEntradas() {
	mountEntradas(entradas);
	$("#myframe").html("");
	$("#iframes").hide();
	$("#ticketcase").show();

	if(openNavStat == true) {
		document.getElementById("full-screen-nav").style.height = "0%";
  		document.getElementById("full-screen-entradas").style.height = "100%";
  		$(".entradas-dudas-sticky-btn").fadeOut(200);
  		openNavStat = false;
  		openEntradasStat = true;
  	} else {
  		document.getElementById("full-screen-entradas").style.height = "100%";
  		$(".entradas-dudas-sticky-btn").fadeOut(200);
  		openEntradasStat = true;
  	}
}

/* Close */
function closeEntradas() {
  document.getElementById("full-screen-entradas").style.height = "0%";
  $(".entradas-dudas-sticky-btn").fadeIn(200);
  openEntradasStat = false;
}

/* * * * END ENTRADAS functions * * * */

/* * * * ENTRADAS MOBILE functions * * * */
var openEntradasStatMobile = false;
/* Open */
function openEntradasMobile() {
  	document.getElementById("full-screen-nav-mobile").style.height = "0%";
	document.getElementById("full-screen-entradas-mobile").style.height = "100%";
	openNavStatMobile = false;
  	openEntradasStatMobile = true;
  	setTimeout(function() { $(".comprar-entradas-btn.mobile").fadeIn(200); }, 1000);
}

/* Close */
function closeEntradasMobile() {
	$(".comprar-entradas-btn.mobile").fadeOut(200);
  	document.getElementById("full-screen-entradas-mobile").style.height = "0%";
  	openEntradasStatMobile = false;
}

/* * * * END ENTRADAS MOBILE functions * * * */

/* * * * MAPA functions * * * */
var openMapaStat = false;
/* Open */
function openMapa() {
	if(openNavStat == true) {
		document.getElementById("full-screen-nav").style.height = "0%";
  		document.getElementById("full-screen-mapa").style.height = "100%";
  		openNavStat = false;
  		openMapaStat = true;
  	} else {
  		document.getElementById("full-screen-mapa").style.height = "100%";
  		openMapaStat = true;
  	}
}

/* Close */
function closeMapa() {
  document.getElementById("full-screen-mapa").style.height = "0%";
  openMapaStat = false;
}

/* * * * END MAPA functions * * * */

/* * * * MAPA MOBILE functions * * * */
var openMapaStatMobile = false;
/* Open */
function openMapaMobile() {
	if(openNavStatMobile == true) {
		document.getElementById("full-screen-nav-mobile").style.height = "0%";
  		document.getElementById("full-screen-mapa-mobile").style.height = "100%";
  		openNavStatMobile = false;
  		openMapaStatMobile = true;
  	} else {
  		document.getElementById("full-screen-mapa-mobile").style.height = "100%";
  		openMapaStatMobile = true;
  	}
}

/* Close */
function closeMapaMobile() {
  document.getElementById("full-screen-mapa-mobile").style.height = "0%";
  openMapaStatMobile = false;
}

/* * * * END MAPA MOBILE functions * * * */

/* * * * APP functions * * * */
var openAppStat = false;
/* Open */
function openApp() {
	if(openNavStat == true) {
		document.getElementById("full-screen-nav").style.height = "0%";
  		document.getElementById("full-screen-nav-app").style.height = "100%";
  		openNavStat = false;
  		openAppStat = true;
  	} else {
  		document.getElementById("full-screen-nav-app").style.height = "100%";
  		openAppStat = true;
  	}
}

/* Close */
function closeApp() {
  document.getElementById("full-screen-nav-app").style.height = "0%";
  openAppStat = false;
}

/* * * * END APP functions * * * */

/* * * * APP functions * * * */
var openAppStatMobile = false;
/* Open */
function openAppMobile() {
	if(openNavStatMobile == true) {
		document.getElementById("full-screen-nav-mobile").style.height = "0%";
  		document.getElementById("full-screen-nav-app-mobile").style.height = "100%";
  		openNavStatMobile = false;
  		openAppStatMobile = true;
  	} else {
  		document.getElementById("full-screen-nav-app-mobile").style.height = "100%";
  		openAppStatMobile = true;
  	}
}

/* Close */
function closeAppMobile() {
  document.getElementById("full-screen-nav-app-mobile").style.height = "0%";
  openAppStatMobile = false;
}

var imageGrad = $('.artista');
image = $('.artista-img');

function resizeDiv () {
    imageGrad.height(image.height());
    imageGrad.width(image.width());
}


/* * * * END APP functions * * * */

/* * * * LINE UP functions * * * */
var openLineUpStat = false;
/* Open */
function openLineUp() {
	if(openNavStat == true) {
		document.getElementById("full-screen-nav").style.height = "0%";
  		document.getElementById("full-screen-line-up").style.height = "100%";
  		openNavStat = false;
  		openLineUpStat = true;
  	} else {
  		document.getElementById("full-screen-line-up").style.height = "100%";
  		openLineUpStat = true;
  	}
}

/* Close */
function closeLineUp() {
  document.getElementById("full-screen-line-up").style.height = "0%";
  openLineUpStat = false;
}

/* * * * END LINE UP functions * * * */

$(document).ready(function() {

	// Carousel
	$('#festivalCarousel').carousel({ interval: 5000 });
	$(".carousel-packs").carousel('pause');
	$(".carousel-packs").carousel({ interval: false });

	$(".carousel-packs").on("mouseenter",function() {
	  $(this).carousel('cycle');
	  $(this).carousel({ interval: 100 });
	}).on("mouseleave", function() {
	  $(this).carousel('pause');
	  $(this).carousel({ interval: false });
	});

	$('.bubble-50').each(function(){
		$(this).css('animationDuration',Math.floor(Math.random() * 10 + 6) + "s")
	});

	$('.bubble-100').each(function(){
		$(this).css('animationDuration',Math.floor(Math.random() * 10 + 6) + "s")
	});

	if ( typeof dudas !== 'undefined') {
		var fuse = new Fuse(dudas, options); // "list" is the item array
	}

	$.cookieBanner({
		cookiePageUrl : { it: '/legal/politica-de-cookies', en: '/legal/politica-de-cookies', de: '/legal/politica-de-cookies', es: '/legal/politica-de-cookies', ru: '/legal/politica-de-cookies' },
		hideBannerOnScroll : false,
		culture : 'es',
		hideBannerOnScroll : false,
		consentOnNavigation: false,
	});

	if ( typeof dudas !== 'undefined') {
		mountSearchResults(dudas,0);
	}

	if(typeof carousel_images !== 'undefined'){
		mountCarousel(carousel_images);
	}

	if(typeof entradas !== 'undefined'){
		mountEntradas(entradas);
	}

	$("#iDudas").keyup(function(){

		results="";

		$(".tag-txt").removeClass("active");

		if($(this).val().length>0){
			busqueda=$(this).val();
			$(".search .fas").show();
		}else{
			busqueda="";
			$(".search .fas").hide();
		}

		result = fuse.search(busqueda);

		if(result.length==0 && (busqueda=="" || busqueda=="")){
			result=dudas;
		}
		console.log(busqueda);
		mountSearchResults(result,0);
	});


	$(".search .fas").on('click',function(e){
		$("#iDudas").val("");
		$("#iDudas").removeClass("active");
		$(".search .fas").hide();
		mountSearchResults(dudas,0);
	});

	$(".tag-txt").on('click',function(){

		if($(this).hasClass('active')){
			$(this).removeClass('active');
			mountSearchResults(dudas,0);
			return;
		}else{
			$(".tag-txt.active").removeClass('active');
			$(this).addClass('active');
			var page = document.location.pathname+'/dudas/filtros/'+prettyfyQuestion($(this).children('p').html());
  			ga('send', 'pageview', page);
		}

		$("#iDudas").removeClass("active");
		$(".search .fas").hide();
		$("#iDudas").val("");

		laid=parseInt($(this).attr('id').substr(4));

		mountSearchResults(dudas,laid);

	});

	$("#iDudas").on('focus',function(){
		if($("#iDudas").val().length>0){ $(".search .fas").show(); }
		if(typeof ismobile !==undefined){
			if(ismobile==0){
				$("#iDudas").addClass("active");
				$([document.documentElement, document.body]).animate({
					scrollTop: $("#col-search").offset().top -50
				}, 500);
			}
		}
	});

	$("#iDudas").on('blur',function(){
		if($("#iDudas").val().length==0){
			$("#iDudas").removeClass("active");
			$(".search .fas").hide();
		}
	});

	$("#answers").on('click','.question',function(){

		if($(this).next().hasClass("active")==true){
			$(this).next().removeClass("active");
			$(this).parent().removeClass("active");
			$(this).html("+"+$(this).html().substr(1));
		}else{
			$(".answer.active").removeClass("active");
			$(".question-tabs li").removeClass("active");
			$("#answers .question").each(function(){
				$(this).html("+"+$(this).html().substr(1));
			});
			$(this).next().addClass("active");
			$(this).parent().addClass("active");
			var page = document.location.pathname+'/dudas/'+prettyfyQuestion($(this).html());
  			ga('send', 'pageview', page);
			$(this).html("-"+$(this).html().substr(1));
		}


	});


	$("#buyticket, .entradas-info").on('click',function(){
		for(a=0; a<sentradas.length; a++){
			if(sentradas[a]['id']==$(this).attr('data-ticket')){
				$("#ticketcase").hide();
				$("#myframe").html(sentradas[a]['iframe']);
				$("#iframes").show();
			}
		}
	});

	// Flowers festival mobile header animation
	setTimeout(function() {
		$(".festival-mobile-flowers-1, .festival-mobile-flowers-2").addClass("init");
	}, 1000);

	// Call news
	// if(counter_news > 1) {
	// 	var interval = self.setInterval(function(){newsImages()},6000);
	// }

	// Call news
	// if(counter_news_mobile > 1) {
	// 	var interval_mobile = self.setInterval(function(){newsImagesMobile()},6000);
	// }

	setTimeout(function() {
	// Call news
	if(counter_news_mobile_extras > 1) {
		var interval_mobile_extras = self.setInterval(function(){newsImagesMobileExtras()},6000);
	}
	}, 2000);

	// Banner news resize and positions
	setTimeout(function() { resizeDiv(); }, 1000);

	$(window).resize(function() { resizeDiv(); });

	var height_title = $(".noticias-content-title-0").height();
	var height_subtitle = $(".noticias-content-subtitle-0").height();
	var top_subtitle = height_title+120;
	var top_text = height_title+height_subtitle+120;

	$(".noticias-content-title-0").css("top", 120);
	$(".noticias-content-subtitle-0").css("top", top_subtitle);
	$(".noticias-content-text-0").css("top", top_text);

	// Button leer más
	$(".txt-btn").on('click',function() {
		$('#modalLeerMas').modal('show');
	});

	// MDB Lightbox Init
	$(function () {
		$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
	});

	scrollBanner();


	// Delete popup info to avoid youtube keep playing
	$(".close-btn-delete").on('click',function() {
		setTimeout(function() {
			$('.modal-popup').html('');
		},300);
	});

	// Smooth scroll gala tickets
	$("#buy-tickets-gala-btn").click(function() {
		console.log('btn');
	    $('html,body').animate({scrollTop: $("#gala-iframe-mobile").offset().top},'slow');
	});

	$(".pincha-btn").click(function() { $(this).closest('p').next("div.pincha-container").slideDown(); });

});

// Banner news animation
var counter_news = $("#noticias .artista-img").length;
console.log(counter_news);
var slide = 0;

if(document.getElementById("myDivDesktop") !== null){


document.getElementById("myDivDesktop").onclick = function(e) {
    $(".artista-title").stop(true,true);
	$(".artista-subtitle").stop(true,true);
	$(".artista-txt").stop(true,true);
	$(".artista-img").stop(true,true);	
	// Hide slide/text
	

			if(slide == counter_news-1){

			$(".noticias-img-"+slide).fadeOut(0);

			// Text OUT
		
			// Show slide/text
			var init_slide = 0;
			$(".noticias-img-"+init_slide).fadeIn(1000);

			// Text IN
			var height_title = $(".noticias-content-title-"+init_slide).height();
			var height_subtitle = $(".noticias-content-subtitle-"+init_slide).height();
			var top_subtitle = height_title+120;
			var top_text = height_title+height_subtitle+120;

			setTimeout(function() { $(".noticias-content-title-"+init_slide).animate({top:120, opacity: 1}, 200); }, 0);
			setTimeout(function() { $(".noticias-content-subtitle-"+init_slide).animate({top: top_subtitle, opacity: 1}, 200); }, 0);
			setTimeout(function() { $(".noticias-content-text-"+init_slide).animate({top: top_text, opacity:1}, 200); }, 0);

			setTimeout(function() { $(".noticias-content-title-"+slide).animate({top: 600, opacity: 0}); }, 0);
			setTimeout(function() { $(".noticias-content-subtitle-"+slide).animate({top: 630, opacity: 0}); }, 0);
			setTimeout(function() { $(".noticias-content-text-"+slide).animate({top: 660, opacity: 0}); slide = 0; }, 0);
			
			}else{
			// Show slide
			var next_slide = slide+1;
			$(".noticias-img-"+next_slide).fadeIn(1000);

			// Text IN
			var height_title = $(".noticias-content-title-"+next_slide).height();
			var height_subtitle = $(".noticias-content-subtitle-"+next_slide).height();
			var top_subtitle = height_title+120;
			var top_text = height_title+height_subtitle+120;

			setTimeout(function() { $(".noticias-content-title-"+next_slide).animate({top:120, opacity:1}, 200) }, 0);
			setTimeout(function() { $(".noticias-content-subtitle-"+next_slide).animate({top: top_subtitle, opacity:1}, 200); }, 0);
			setTimeout(function() { $(".noticias-content-text-"+next_slide).animate({top: top_text, opacity:1}, 200); }, 0);

			setTimeout(function() { $(".noticias-content-title-"+slide).animate({top: 600, opacity: 0}); }, 0);
			setTimeout(function() { $(".noticias-content-subtitle-"+slide).animate({top: 630, opacity: 0}); }, 0);
			setTimeout(function() { $(".noticias-content-text-"+slide).animate({top: 660, opacity: 0}); slide++; }, 0);

	
		}
	}
}

function newsImages() {

	$(".artista-title").stop(true,true);
	$(".artista-subtitle").stop(true,true);
	$(".artista-txt").stop(true,true);
	$(".artista-img").stop(true,true);	

	if(slide < counter_news) {

		if(slide == counter_news-1) {
			// Hide slide/text
			$(".noticias-img-"+slide).fadeOut(1000);

			// Text OUT
			setTimeout(function() { $(".noticias-content-title-"+slide).animate({top:-150, opacity: 0}, 800); }, 1);
			setTimeout(function() { $(".noticias-content-title-"+slide).css({'top': 600, 'opacity': 0}); },1000);

			setTimeout(function() { $(".noticias-content-subtitle-"+slide).animate({top:-150, opacity: 0}, 800); }, 101);
			setTimeout(function() { $(".noticias-content-subtitle-"+slide).css({'top': 630, 'opacity': 0}); },1000);

			setTimeout(function() { $(".noticias-content-text-"+slide).animate({top:-150, opacity: 0}, 800); }, 201);
			setTimeout(function() { $(".noticias-content-text-"+slide).css({'top': 660, 'opacity': 0}); },1000);
			
			// Show slide/text
			var init_slide = 0;
			$(".noticias-img-"+init_slide).fadeIn(1000);

			// Text IN
			var height_title = $(".noticias-content-title-"+init_slide).height();
			var height_subtitle = $(".noticias-content-subtitle-"+init_slide).height();
			var top_subtitle = height_title+120;
			var top_text = height_title+height_subtitle+120;

			setTimeout(function() { $(".noticias-content-title-"+init_slide).animate({top:120, opacity: 1}, 200); }, 800);
			setTimeout(function() { $(".noticias-content-subtitle-"+init_slide).animate({top: top_subtitle, opacity: 1}, 200); }, 1000);
			setTimeout(function() { $(".noticias-content-text-"+init_slide).animate({top: top_text, opacity:1}, 200); }, 1200);

			setTimeout(function() { $(".noticias-content-title-"+slide).animate({top: 600, opacity: 0}); }, 1500);
			setTimeout(function() { $(".noticias-content-subtitle-"+slide).animate({top: 630, opacity: 0}); }, 1500);
			setTimeout(function() { $(".noticias-content-text-"+slide).animate({top: 660, opacity: 0}); slide = 0; }, 1500);
			
		} else {
			// Hide slide
			$(".noticias-img-"+slide).fadeOut(1000);

			// Text OUT
			setTimeout(function() { $(".noticias-content-title-"+slide).animate({top:-150, opacity: 0}, 800); }, 1);
			setTimeout(function() { $(".noticias-content-title-"+slide).css({'top': 600, 'opacity': 0}); },1000);

			setTimeout(function() { $(".noticias-content-subtitle-"+slide).animate({top:-150, opacity: 0}, 800); }, 101);
			setTimeout(function() { $(".noticias-content-subtitle-"+slide).css({'top': 630, 'opacity': 0}); },1000);

			setTimeout(function() { $(".noticias-content-text-"+slide).animate({top:-150, opacity: 0}, 800); }, 201);
			setTimeout(function() { $(".noticias-content-text-"+slide).css({'top': 660, 'opacity': 0}); },1000);

			// Show slide
			var next_slide = slide+1;
			$(".noticias-img-"+next_slide).fadeIn(1000);

			// Text IN
			var height_title = $(".noticias-content-title-"+next_slide).height();
			var height_subtitle = $(".noticias-content-subtitle-"+next_slide).height();
			var top_subtitle = height_title+120;
			var top_text = height_title+height_subtitle+120;

			setTimeout(function() { $(".noticias-content-title-"+next_slide).animate({top:120, opacity:1}, 200) }, 800);
			setTimeout(function() { $(".noticias-content-subtitle-"+next_slide).animate({top: top_subtitle, opacity:1}, 200); }, 1000);
			setTimeout(function() { $(".noticias-content-text-"+next_slide).animate({top: top_text, opacity:1}, 200); }, 1200);

			setTimeout(function() { $(".noticias-content-title-"+slide).animate({top: 600, opacity: 0}); }, 1500);
			setTimeout(function() { $(".noticias-content-subtitle-"+slide).animate({top: 630, opacity: 0}); }, 1500);
			setTimeout(function() { $(".noticias-content-text-"+slide).animate({top: 660, opacity: 0}); slide++; }, 1500);

		}

	}
}

// Banner news animation mobile
var counter_news_mobile = $("#noticias .artista-img-mobile").length;
var slide_mobile = 0;
if(document.getElementById("myDiv") !== null){
  document.getElementById("myDiv").onclick = function(e) {
	
    $(".artista-title").stop(true,true);
	$(".artista-subtitle").stop(true,true);
	$(".artista-txt").stop(true,true);
	$(".artista-img").stop(true,true);	
	// Hide slide/text

	
	$("#noticias .noticias-img-"+slide_mobile).fadeOut(0);

	$("#noticias .noticias-content-title-mobile-"+slide_mobile).fadeOut(0);
	$("#noticias .noticias-content-subtitle-mobile-"+slide_mobile).fadeOut(0);
	$("#noticias .noticias-content-text-mobile-"+slide_mobile).fadeOut(0);

	if(slide_mobile == counter_news_mobile-1) {

		$("#noticias .noticias-img-"+slide_mobile).fadeOut(0);

			$("#noticias .noticias-content-title-mobile-"+slide_mobile).fadeOut(0);
			$("#noticias .noticias-content-subtitle-mobile-"+slide_mobile).fadeOut(0);
			$("#noticias .noticias-content-text-mobile-"+slide_mobile).fadeOut(0);

		var init_slide_mobile = 0;
			setTimeout(function() { $("#noticias .noticias-img-"+init_slide_mobile).fadeIn(0);}, 0);

			setTimeout(function() { $("#noticias .noticias-content-title-mobile-"+init_slide_mobile).fadeIn(0);}, 0);
			setTimeout(function() { $("#noticias .noticias-content-subtitle-mobile-"+init_slide_mobile).fadeIn(0);}, 0);
			setTimeout(function() { $("#noticias .noticias-content-text-mobile-"+init_slide_mobile).fadeIn(0);}, 0);

			slide_mobile = 0;
	}else{
	
	// Show slide/text
	var next_slide_mobile = slide_mobile+1;
	setTimeout(function() { $("#noticias .noticias-img-"+next_slide_mobile).fadeIn(0);}, 0);

	setTimeout(function() { $("#noticias .noticias-content-title-mobile-"+next_slide_mobile).fadeIn(0);}, 0);
	setTimeout(function() { $("#noticias .noticias-content-subtitle-mobile-"+next_slide_mobile).fadeIn(0);}, 0);
	setTimeout(function() { $("#noticias .noticias-content-text-mobile-"+next_slide_mobile).fadeIn(0);}, 0);

	slide_mobile++;

	}
}
}
function newsImagesMobile() {

	$(".artista-confirmado-name").stop(true,true);
	$(".artista-confirmado-subtitle").stop(true,true);
	$(".artista-confirmado-txt").stop(true,true);
	$(".artista-img-mobile").stop(true,true);

	if(slide_mobile < counter_news_mobile) {

		if(slide_mobile == counter_news_mobile-1) {
			// Hide slide/text
			$("#noticias .noticias-img-"+slide_mobile).fadeOut(1000);

			$("#noticias .noticias-content-title-mobile-"+slide_mobile).fadeOut(1000);
			$("#noticias .noticias-content-subtitle-mobile-"+slide_mobile).fadeOut(1000);
			$("#noticias .noticias-content-text-mobile-"+slide_mobile).fadeOut(1000);

			// Show slide/text
			var init_slide_mobile = 0;
			setTimeout(function() { $("#noticias .noticias-img-"+init_slide_mobile).fadeIn(1000);}, 1000);

			setTimeout(function() { $("#noticias .noticias-content-title-mobile-"+init_slide_mobile).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#noticias .noticias-content-subtitle-mobile-"+init_slide_mobile).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#noticias .noticias-content-text-mobile-"+init_slide_mobile).fadeIn(1000);}, 1000);

			slide_mobile = 0;
			
		} else {
			
			// Hide slide/text
			$("#noticias .noticias-img-"+slide_mobile).fadeOut(1000);

			$("#noticias .noticias-content-title-mobile-"+slide_mobile).fadeOut(1000);
			$("#noticias .noticias-content-subtitle-mobile-"+slide_mobile).fadeOut(1000);
			$("#noticias .noticias-content-text-mobile-"+slide_mobile).fadeOut(1000);

			// Show slide/text
			var next_slide_mobile = slide_mobile+1;
			setTimeout(function() { $("#noticias .noticias-img-"+next_slide_mobile).fadeIn(1000);}, 1000);

			setTimeout(function() { $("#noticias .noticias-content-title-mobile-"+next_slide_mobile).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#noticias .noticias-content-subtitle-mobile-"+next_slide_mobile).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#noticias .noticias-content-text-mobile-"+next_slide_mobile).fadeIn(1000);}, 1000);

			slide_mobile++;

		}

	}
}

// Banner extras animation mobile
var counter_news_mobile_extras = $("#extras .artista-img-mobile").length;
var slide_mobile_extras = 0;

function newsImagesMobileExtras() {

	$(".artista-confirmado-name").stop(true,true);
	$(".artista-confirmado-subtitle").stop(true,true);
	$(".artista-confirmado-txt").stop(true,true);
	$(".artista-img-mobile").stop(true,true);

	if(slide_mobile_extras < counter_news_mobile_extras) {

		if(slide_mobile_extras == counter_news_mobile_extras-1) {
			// Hide slide/text
			$("#extras .noticias-img-"+slide_mobile_extras).fadeOut(1000);

			$("#extras .noticias-content-title-mobile-"+slide_mobile_extras).fadeOut(1000);
			$("#extras .noticias-content-subtitle-mobile-"+slide_mobile_extras).fadeOut(1000);
			$("#extras .noticias-content-text-mobile-"+slide_mobile_extras).fadeOut(1000);

			// Show slide/text
			var init_slide_mobile_extras = 0;
			setTimeout(function() { $("#extras .noticias-img-"+init_slide_mobile_extras).fadeIn(1000);}, 1000);

			setTimeout(function() { $("#extras .noticias-content-title-mobile-"+init_slide_mobile_extras).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#extras .noticias-content-subtitle-mobile-"+init_slide_mobile_extras).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#extras .noticias-content-text-mobile-"+init_slide_mobile_extras).fadeIn(1000);}, 1000);

			slide_mobile_extras = 0;
			
		} else {
			
			// Hide slide/text
			$("#extras .noticias-img-"+slide_mobile_extras).fadeOut(1000);

			$("#extras .noticias-content-title-mobile-"+slide_mobile_extras).fadeOut(1000);
			$("#extras .noticias-content-subtitle-mobile-"+slide_mobile_extras).fadeOut(1000);
			$("#extras .noticias-content-text-mobile-"+slide_mobile_extras).fadeOut(1000);

			// Show slide/text
			var next_slide_mobile_extras = slide_mobile_extras+1;
			setTimeout(function() { $("#extras .noticias-img-"+next_slide_mobile_extras).fadeIn(1000);}, 1000);

			setTimeout(function() { $("#extras .noticias-content-title-mobile-"+next_slide_mobile_extras).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#extras .noticias-content-subtitle-mobile-"+next_slide_mobile_extras).fadeIn(1000);}, 1000);
			setTimeout(function() { $("#extras .noticias-content-text-mobile-"+next_slide_mobile_extras).fadeIn(1000);}, 1000);

			slide_mobile_extras++;

		}

	}
}

function prettyfyQuestion(strAccents) {
	var strAccents = strAccents.split('');
	var strAccentsOut = new Array();
	var strAccentsLen = strAccents.length;
	var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž ñÑ';
	var accentsOut = "asssssaaaaaaoooooooooooooeeeeeeeeeccdiiiiiiiiuuuuuuuunnssyyyzz-nn";
	for (var y = 0; y < strAccentsLen; y++) {
		if (accents.indexOf(strAccents[y]) != -1) {
			strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
		} else
			strAccentsOut[y] = strAccents[y];
	}
	strAccentsOut = strAccentsOut.join('');
	return strAccentsOut.replace('?','').replace('¿','').replace(',','').replace(':','').replace('.','').replace('+','').replace('-','').toLowerCase();
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 150;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop){
        // Scroll Down
        if(st > navbarHeight){
        	$('#header-fixed').removeClass('nav-up').addClass('nav-down');
        }
    } else {
        // Scroll Up
        if(st < navbarHeight * 4) {
            $('#header-fixed').removeClass('nav-down').addClass('nav-up');
        }
    }

    if($(window).scrollTop() + $(window).height() + 200 > $(document).height()) {
       $(".festival-sticky-btn").fadeOut(500);
       $(".festival-sticky-btn").fadeOut(500);
    }else{
    	$(".festival-sticky-btn").fadeIn(500);
       $(".festival-sticky-btn").fadeIn(500);
    }

    lastScrollTop = st;
}


function mountEntradas(entradas){

	if(ismobile==0){

		//DESKTOP

		$(".entradas-info").html("");

		for(a=0; a<entradas.length; a++){

			entrada="";

			if(locale == 'en') { disponible = 'Available'; } else { disponible = 'Disponible'; }
			if(locale == 'en') { quedanPocas = 'Only a few left'; } else { quedanPocas = 'Quedan pocas'; }
			if(locale == 'en') { nodisponible = 'Not available'; } else { nodisponible = 'No disponible'; }
			if(locale == 'en') { agotadas = 'Sold out'; } else { agotadas = 'Agotadas'; }

			if(entradas[a]['availabilty']==0){
				entrada+="<div class=\"col col-4 entradas-bg-grey\"><div class=\"entradas-info-content\">";
				entrada+="<div class=\"price\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="</div><div class=\"entradas-btn disponible\">"+disponible+"</div></div></div>";
			}else if(entradas[a]['availabilty']==1){
				entrada+="<div class=\"col col-4 entradas-bg-grey\"><div class=\"entradas-info-content\">";
				entrada+="<div class=\"price\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="<p class=\"entradas-warning-msg\"><i class=\"fas fa-exclamation-triangle\"></i> !Quedan muy pocas!</p>";
				entrada+="</div><div class=\"entradas-btn pocas\">"+quedanPocas+"</div></div></div>";
			}else if(entradas[a]['availabilty']==2){
				entrada+="<div class=\"col col-4 entradas-bg-grey\"><div class=\"entradas-info-content\">";
				entrada+="<div class=\"price\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="</div><div class=\"entradas-btn agotadas\">"+agotadas+"</div></div></div>";
			}else{
				entrada+="<div class=\"col col-4 entradas-bg-grey\"><div class=\"entradas-info-content\">";
				entrada+="<div class=\"price\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="</div><div class=\"entradas-btn agotadas\">"+nodisponible+"</div></div></div>";
			}

			$("#centrada-"+entradas[a]['entradas_filter_id']).html($("#centrada-"+entradas[a]['entradas_filter_id']).html()+entrada);

		}

		$(".entradas-info").hide();

	}else{

		//MOBILE

		$(".entradas-info").html("");

		for(a=0; a<entradas.length; a++){

			entrada="";

			if(locale == 'en') { disponible = 'Available'; } else { disponible = 'Disponible'; }
			if(locale == 'en') { quedanPocas = 'Quedan pocas'; } else { quedanPocas = 'Only a few left'; }
			if(locale == 'en') { nodisponible = 'Not available'; } else { nodisponible = 'No disponible'; }
			if(locale == 'en') { agotadas = 'Sold out'; } else { agotadas = 'Agotadas'; }

			if(entradas[a]['availabilty']==0){
				entrada+="<div class=\"col col-12\"><div class=\"entradas-info-content entradas-bg-grey mobile\">";
				entrada+="<div class=\"price mobile\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info mobile\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="</div><div class=\"entradas-btn disponible\">"+disponible+"</div></div></div>";
			}else if(entradas[a]['availabilty']==1){
				entrada+="<div class=\"col col-12\"><div class=\"entradas-info-content entradas-bg-grey mobile\">";
				entrada+="<div class=\"price mobile\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info mobile\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="<p class=\"entradas-warning-msg\"><i class=\"fas fa-exclamation-triangle\"></i> !Quedan muy pocas!</p>";
				entrada+="</div><div class=\"entradas-btn pocas\">"+quedanPocas+"</div></div></div>";
			}else if(entradas[a]['availabilty']==2){
				entrada+="<div class=\"col col-12\"><div class=\"entradas-info-content entradas-bg-grey mobile\">";
				entrada+="<div class=\"price mobile\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info mobile\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="</div><div class=\"entradas-btn agotadas\">"+agotadas+"</div></div></div>";
			}else{
				entrada+="<div class=\"col col-12\"><div class=\"entradas-info-content entradas-bg-grey mobile\">";
				entrada+="<div class=\"price mobile\">"+entradas[a]['price']+"€</div>";
				entrada+="<div class=\"info mobile\">";
				entrada+="<p><strong>"+entradas[a]['name']+"</strong></p>";
				entrada+=entradas[a]['description'];
				entrada+="</div><div class=\"entradas-btn agotadas\">"+nodisponible+"</div></div></div>";
			}

			$("#centrada-"+entradas[a]['entradas_filter_id']).html($("#centrada-"+entradas[a]['entradas_filter_id']).html()+entrada);

		}


	}

	$(".pdfs_container").html("");

	if(autorizacion16.length>0){
		link=autorizacion16[0]['download_link'];
		if(locale == 'es') {
			$('.pdfs_container').append("<div class=\"descargar\"><a target=\"_blank\" href=\""+storage_url+link+"\"><i class=\"far fa-file-pdf\"></i> Descargar autorización de menores de 16 años</a></div>");
		}

		if(locale == 'ca') {
			$('.pdfs_container').append("<div class=\"descargar\"><a target=\"_blank\" href=\""+storage_url+link+"\"><i class=\"far fa-file-pdf\"></i> Descarrega autorizació de menors de 16 anys</a></div>");
		}
	}

	if(autorizacion18.length>0){
		link=autorizacion18[0]['download_link'];
		if(locale == 'es') {
			$('.pdfs_container').append("<div class=\"descargar\"><a target=\"_blank\" href=\""+storage_url+link+"\"><i class=\"far fa-file-pdf\"></i> Descargar autorización de menores de 18 años</a></div>");
		}

		if(locale == 'ca') {
			$('.pdfs_container').append("<div class=\"descargar\"><a target=\"_blank\" href=\""+storage_url+link+"\"><i class=\"far fa-file-pdf\"></i> Descarrega autorizació de menors de 18 anys</a></div>");
		}
	}

	$(".entradas-info").hide();

	if(typeof sentradas !== 'undefined' || typeof sentradas !== ''){
		if(sentradas.length > 0) {
			console.log(sentradas);
			$("#centrada-"+sentradas[0]['id']).show();

			for(a=0; a<sentradas.length; a++){

				if(sentradas[a]['id']==5){
					$("#centrada-5").html(sentradas[a]['iframe']);
				}

				if(sentradas[a]['id']==8){
					$("#centrada-8").html(sentradas[a]['iframe']);
				}

			}
		}
	}

}

function mountIFrames(iframe){
	$("#myframe").html(iframe);
	$("#ticketcase").hide();
	$("#iframes").show();
}

function showentradas(id){
	$("#buyticket").attr('data-ticket',id);
	$(".entradas-info").hide();
	$("#centrada-"+id).show();
	if($("#fentrada-"+id).hasClass('active')){
		$(".entrada-tag").removeClass('active');
	}else{
		$(".entrada-tag").removeClass('active');
		$("#fentrada-"+id).addClass('active');
	}
}

function mountCarousel(images){

	results="";
	num=0;
	col=0;

	for(a=0; a<images.length; a++){

		if(num==0){
			if(col==0){
				results+="<div class=\"carousel-item py-5 active\"><div class=\"row\">";
			}else{
				results+="<div class=\"carousel-item py-5\"><div class=\"row\">";
			}
		}

		results+="<div class=\"col-sm-3\"><div class=\"card\">";
		results+="<img width=\"100%\" src=\""+storage_url+images[a]+"\" alt=\"Foto galería RBF\" />";
		results+="</div></div>";

		num++;

		if(num==4){
			col++;
			results+="</div></div>";
			num=0;
		}

	}

	$("#festivalCarousel .carousel-inner").html(results);

	console.log(results);
}

function mountSearchResults(result,laid){

	console.log(result);

	results="";
	count=0;

	for(a=0; a<result.length; a++){

		if(laid==0){

			if(count==0){
				if(result[a]["destacado"] == 1){

				results+='<li class="questwer active" id="ans-'+result[a]["id"]+'">';

				if(locale == 'es') {
					results+="<div class=\"question\">- "+result[a]["question"]+"</div>";
					results+="<div class=\"answer active\">"+result[a]["answer"]+"</div></li>";
				} else {

					for(b=0; b<result[a]['translations'].length; b++) {
						if(result[a]['translations'][b]['locale'] == locale && result[a]['translations'][b]['column_name'] == 'question') {
								results+="<div class=\"question\">- "+result[a]["translations"][b]["value"]+"</div>";	
						}
					}
					for(b=0; b<result[a]['translations'].length; b++) {
						if(result[a]['translations'][b]['locale'] == locale && result[a]['translations'][b]['column_name'] == 'answer') {
								results+="<div class=\"answer active\">"+result[a]["translations"][b]["value"]+"</div></li>";
						}
					}
				}

				count++;
			}
			}else{
				if(result[a]["destacado"] == 1){

				
				results+='<li class="questwer" id="ans-'+result[a]["id"]+'">';

				if(locale == 'es') {
					results+="<div class=\"question\">- "+result[a]["question"]+"</div>";
					results+="<div class=\"answer\">"+result[a]["answer"]+"</div></li>";
				} else {

					for(b=0; b<result[a]['translations'].length; b++) {
						if(result[a]['translations'][b]['locale'] == locale && result[a]['translations'][b]['column_name'] == 'question') {
								results+="<div class=\"question\">- "+result[a]["translations"][b]["value"]+"</div>";	
						}
					}
					for(b=0; b<result[a]['translations'].length; b++) {
						if(result[a]['translations'][b]['locale'] == locale && result[a]['translations'][b]['column_name'] == 'answer') {
								results+="<div class=\"answer\">"+result[a]["translations"][b]["value"]+"</div></li>";
						}
					}
				}

				count++;
			}
		}
		}else{

			for(b=0; b<result[a].filtros.length; b++){			
				if(result[a].filtros[b].pivot.dudas_filter_id==laid){
					
					if(count==0){
						results+='<li class="questwer active" id="ans-'+result[a]["id"]+'">';

						if(locale == 'es') {
							results+="<div class=\"question\">- "+result[a]["question"]+"</div>";
							results+="<div class=\"answer active\">"+result[a]["answer"]+"</div></li>";
						} else {

							for(c=0; c<result[a]['translations'].length; c++) {
								if(result[a]['translations'][c]['locale'] == locale && result[a]['translations'][c]['column_name'] == 'question') {
										results+="<div class=\"question\">- "+result[a]["translations"][c]["value"]+"</div>";	
								}
							}
							for(c=0; c<result[a]['translations'].length; c++) {
								if(result[a]['translations'][c]['locale'] == locale && result[a]['translations'][c]['column_name'] == 'answer') {
										results+="<div class=\"answer active\">"+result[a]["translations"][c]["value"]+"</div></li>";
								}
							}
						}

						count++;
					}else{
						results+='<li class="questwer" id="ans-'+result[a]["id"]+'">';

						if(locale == 'es') {
							results+="<div class=\"question\">- "+result[a]["question"]+"</div>";
							results+="<div class=\"answer\">"+result[a]["answer"]+"</div></li>";
						} else {
							for(c=0; c<result[a]['translations'].length; c++) {
								if(result[a]['translations'][c]['locale'] == locale && result[a]['translations'][c]['column_name'] == 'question') {
										results+="<div class=\"question\">- "+result[a]["translations"][c]["value"]+"</div>";
								}
							}
							for(c=0; c<result[a]['translations'].length; c++) {
								if(result[a]['translations'][c]['locale'] == locale && result[a]['translations'][c]['column_name'] == 'answer') {
										results+="<div class=\"answer\">"+result[a]["translations"][c]["value"]+"</div></li>";
								}
							}
						}
						
						count++;
					}

				}

			}
		}

	}

	if ( typeof busqueda !== 'undefined' && busqueda == 'textpage' ) {
		if(result.length==0 && busqueda!="" && busqueda!=""){
			results="<p style=\"color:white; text-align:center; width:100%; height: 250px;\">No hemos encontrado ningún resultado para tu búsqueda, si quieres, abre un chat con el equipo más abajo.</p>";
		}
	}

	$(".question-tabs").html(results);
}
function goDudas(){
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".dudas-position").offset().top
	}, 500);
	closeNav();
}

function goDudasMobile(){
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".dudas-position").offset().top
	}, 500);
	closeNavMobile();
}

function goInfo(){
	$([document.documentElement, document.body]).animate({
		scrollTop: 0
	}, 500);
	closeNav();
}

function goHomePrincipal(){
	window.location.href="https://www.reggaetonbeachfestival.com"
}

// DUDAS DUMMY



var options = {
  shouldSort: true,
  findAllMatches: true,
  threshold: 0.4,
  location: 0,
  distance: 1000,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    "answer",
    "question"
  ]
};


// PARALLAx
function scrollBanner() {
	$(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();

		$('.logo-rbf').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/700)
		});

		$('.yellow-line').css({
		  'margin-top' : 25-(scrollPos/15)+'%',
		});

		$('.info-content-left .image').css({
		  'margin-top' : -24+(scrollPos/5)+'px',
		});

		$('.info-content-right .image').css({
		  'top' : 215-(scrollPos/12)+'px',
		});

		$('.big-title').css({
		  'left' : 16-(scrollPos/50)+'%',
		  'opacity' : 1-(scrollPos/900)
		});

		if(scrollPos < 253) {

			$('.info-content-left .content .title').css({
			  'margin-left' : 20-(scrollPos/12)+'px',
			});

			$('.info-content-left .content .subtitle').css({
			  'margin-left' : -20+(scrollPos/12)+'px',
			});

			$('.info-content-left .content .city').css({
			  'margin-top' : 50-(scrollPos/20)+'px',
			});

		}

		if(scrollPos > 138 && scrollPos < 1030) {

			$('.info-content-carousel .content').css({
			  'margin-left' : 50-(scrollPos/50)+'px',
			});

			$('.big-title-carousel').css({
			  'left' : 36+(scrollPos/200)+'%',
			});

		}

		if(scrollPos > 800 && scrollPos < 1396) {

			$('.dudas-title').css({
			  'margin-left' : 134-(scrollPos/6)+'px',
			});

			$('.yellow-line-dudas').css({
			  'margin-left' : -7+(scrollPos/80)+'%',
			});

		}


	});    
}

function saveAward() {

    var token = $('meta[name="csrf-token"]').attr('content');

    console.log(token);

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

	var formData = {
		'_token': token,
        'email'              : $('input[name=email]').val(),
        'category'             : $('select[name=category]').val(),
        'name_song_artist'    : $('input[name=name_song_artist]').val(),
        'social_account'    : $('input[name=social_account]').val()
    };


    console.log(formData);
    console.log(document.location.origin+"/rbf-awards/save");

	$.ajax({
        type: "POST",
        url: document.location.origin+"/rbf-awards/save",
        data: formData,
        dataType: "json",
        success:function(response) {
            console.log(response);
            $('#modalAwardsForm').modal('toggle');
        },
        error: function(error) {
            console.log(error);
            console.log('ko');
            $(".awards-msg-error").show();
        }
    });

	// stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
}
