(function($) {
	'use strict';

	// Mean Menu
	$('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Preloader
	$(window).on('load', function() { 
		$('.preloader').fadeOut();
	});
	
	// Header Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});
	
	// Campaing Wrap
	$('.campaing-wrap').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		center: false,
		dots: true,
		smartSpeed:1500,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
				margin: 10,
			},
			992:{
				items:3,
			},
			1200:{
				items:3,
			}
		}
	});

	// Project Slider
	$('.project-slider').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		center: false,
		dots: true,
		smartSpeed:1500,
		margin: 20,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:3
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	// Testimonial Wrap
	$('.testimonial-wrap').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		dots: false,
		smartSpeed:1500,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	// Partner Wrap
	$('.partner-wrap').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		center: true,
		margin: 20,
		dots: false,
		smartSpeed:1500,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			}
		}
	});
	
	// Go to Top
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  0);
	});

	// FAQ Accordion
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});
	
	// Count Time 
	function makeTimer() {
		var endTime = new Date("November 30, 2026 17:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

	// Popup Video
	$('a[data-imagelightbox="video"]').imageLightbox({
		activity: true,
		overlay: true,
		button: true,
	});
	
	// Odometer 
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// HOME TWO JS

	// Hero Slider
	$('.hero-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag: false,
		items:1,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed:1500,
		autoplayHoverPause: true,
	});

	//Slider Text Animation
	$(".hero-slider-area").on("translate.owl.carousel", function(){
		$(".hero-slider-text span, .hero-slider-text h1, .hero-slider-text .typewrite").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".hero-slider-text p").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
		$(".hero-slider-text a").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
	});
	
	$(".hero-slider-area").on("translated.owl.carousel", function(){
		$(".hero-slider-text span, .hero-slider-text h1, .hero-slider-text .typewrite").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".hero-slider-text p").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
		$(".hero-slider-text a").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
	});

	// Search Popup JS
	$('.close-btn').on('click',function() {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$('.search-btn').on('click',function() {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});

	// MixItUp JS
	try {
        var mixer = mixitup('#Container', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}

	// Subscribe form JS
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp JS
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});
})(jQuery);