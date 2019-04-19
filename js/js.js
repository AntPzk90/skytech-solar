$(document).ready(function(){

	$('form').submit(function(e) {
		e.preventDefault();
		var th = $(this);
		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: th.serialize(),
		}).done(function(){
			
			$('.modal__pop').fadeIn();
			$('.modal__pop-close').on('click', function() {
				$('.modal__pop').fadeOut();
			})
			setTimeout(function(){$('.modal__pop').fadeOut(500)}, 2000);
			$("body").removeAttr('style');
			$(".body-wrapper").removeClass('overlay');
			$(".overlay__form").removeAttr('style');
			th.trigger('reset');
		})
		
	});

	//открытие и закрыытие моб меню
	$(".nav__humburger").on("click", function(evt) {
		evt.preventDefault();
		if($(".nav__humburger").hasClass('x')){
			$(".nav__humburger").removeClass('x');
			$(".navigation__list").removeAttr('style');
		}else{
			$(this).addClass("x");
			$(".navigation__list").css({"display":"flex"});
		}
	});
	var mobyMenuOff = function() {
		$(".navigation__list").removeAttr('style');
		$(".nav__humburger").removeClass('x');
	}
	// фйия открытия оерлей
	var overlayOn = function(evt){
		evt.preventDefault();
		$("body").css({"overflow":"hidden"});
		$(".body-wrapper").addClass('overlay');
		$(".overlay__form").css({"display":"block"});
	};
	var overlayOff = function(){
		$("body").removeAttr('style');
		$(".body-wrapper").removeClass('overlay');
		$(".overlay__form").removeAttr('style');
		$(".mini-gallery__wrapper").removeAttr('style');
	};
	$(".header__btn").on("click",function(evt) {
		overlayOn(evt);
	});
	$(".offer__btn").on("click",function(evt){
		overlayOn(evt);
	});
	$(".popup-close").on("click",function(evt) {
		overlayOff();
	});
	$(".body-wrapper").on("click",function(){
		overlayOff();
	});
	//скрол страници
	var header =  $(".navigation");
	var headHeight = header.height();
	var headerTopHeight = $(".header__top").height();
	$(window).on("scroll", function(){
		var scroll =  $(window).scrollTop();
	   if(scroll > headHeight){
	      header.addClass("fix");
	      //$(".header__top").css("paddingTop", headHeight);
	      //$("body").css("paddingTop", headHeight);
	    }else if(scroll < 1){
	      header.removeClass("fix");
	      $("body").removeAttr('style');
	      $(".header__top").removeAttr('style');
	    }
	});
	$(window).on("scroll", function(){
		if($(window).scrollTop() > 500){
			$(".up__btn").fadeIn(200);
		}else{
			$(".up__btn").removeAttr('style');
		}
	});
	$("#green-link").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#green").offset().top;
	  	if($("body").attr("style")){
	  		$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	  	}
	  	else{
	  		$("html, body").animate({scrollTop:plansOffset},300);
	  	}
	});
	$("#works-link").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#works").offset().top;
	  	$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	});
	$("#process-link").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#process").offset().top;
	  	$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	});
	$("#about-us-link").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#about-us").offset().top;
	  	$("html, body").animate({scrollTop:plansOffset - headHeight},300);
	});
	$(".up__btn").on("click",function(e){
	  	e.preventDefault();
	  	mobyMenuOff();
	  	var plansOffset = $("#about-us").offset().top;
	  	$("html, body").animate({scrollTop:0},300);
	});
	$(".gallery-item").each(function(index) {
		$(this).attr("data-index",index);
	});
	$(".title-foto").on("click", function(){
		var galleryItemNumber = $(this).parent().attr("data-index");
		$(".body-wrapper").addClass('overlay');
		$(".mini-gallery__wrapper").fadeIn(200).css({"position":"fixed"});
		$(".mini-gallery-item").each(function() {
			var miniGalleryItemNumber = $(this).index();
			if(galleryItemNumber == miniGalleryItemNumber){
				$(".mini-gallery-item").removeClass('active');
				$(".mini-gallery-item").eq(miniGalleryItemNumber).addClass('active');
			}
		});
	});
	$(".mini-gallery__close").on("click", function(evt){
		evt.preventDefault();
		$(".mini-gallery-item").removeClass('active');
		$(".mini-gallery__wrapper").removeAttr("style");
		$(".body-wrapper").removeClass("overlay");
	})
	$(document).on("keydown", function(evt){
		if(evt.keyCode == 27){
			$(".mini-gallery__close").parent().removeClass("active");
			$(".mini-gallery__wrapper").removeAttr("style");
			overlayOff();
		}
	});
	// слайдер*/
	$(".gallery__wrapper").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 540,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '10px',
			        slidesToShow: 1
			      }
			},
			{
				breakpoint: 768,
			      settings: {
			        arrows: true,
			        centerMode: true,
			        centerPadding: '10px',
			        slidesToShow: 1
			      }
			}
		]
	});
	//mini-slider
	$(".mini-gallery-item").each(function(index) {
		$(this).attr("data-index",index);
	});
	var count = 0;

	$(".next").on("click",function(){
		var parentItemIndex = $(this).parent().attr("data-index");
		$(".mini-gallery-item").eq(parentItemIndex).find(".live-foto").removeClass('active--img');
		var fotoCollection = $(".mini-gallery-item").eq(parentItemIndex).find(".live-foto");
		count++;
		if(count >= fotoCollection.length){
			count = 0;
		}
		fotoCollection.eq(count).addClass('active--img');
	});
	$(".prev").on("click",function(){
		var parentItemIndex = $(this).parent().attr("data-index");
		$(".mini-gallery-item").eq(parentItemIndex).find(".live-foto").removeClass('active--img');
		var fotoCollection = $(".mini-gallery-item").eq(parentItemIndex).find(".live-foto");
		count--;
		if(count == 0){
			count = fotoCollection.length-1;
		}
		fotoCollection.eq(count).addClass('active--img');
	});
	//var count = 0;
});