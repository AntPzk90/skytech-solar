$(document).ready(function(){
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
	console.log(headerTopHeight)
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
	// слайдер*/
	$(".gallery__wrapper").slick({
		responsive: [
			{
				breakpoint: 540,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '10px',
			        slidesToShow: 1
			      }
			}
		]
	});
});