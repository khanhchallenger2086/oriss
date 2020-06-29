$(function() {
	
// Hiệu ứng form header

	$('.menu-search').click(function(event) {
		event.preventDefault();
		$('nav .menu').fadeOut();
		$('.form').fadeIn();
	});

	$('.off').click(function(event) {
		event.preventDefault();
		$('.form').fadeOut();
		$('nav .menu').fadeIn();
	});

// Hiệu ứng menu dropdown xổ xuống 

// width window trên 1200px thì menu sẽ hiển và dưới 1200px thì sẽ ẩn

	var x = window.matchMedia("(max-width: 1200px)");
	function media(n) {
		var status = '';
		if (n.matches) {
			status = true; // trên 1200px
		} else {
			status = false; // dưới 1200px
		}

		if (status === false) {
			$('nav .menu').css({display: 'block'});		
			$('.dropdown .dropdown-menu').css({display: 'block'});
		} else {
			$('nav .menu').css({display: 'none'});
			$('.dropdown .dropdown-menu').css({display: 'none'});
		}			
	}
	media(x);
	x.addListener(media); // hàm media lắng nghe trạng thái của  khi nó thay đổi 
		
	$('.icon-menu').click(function(){
		$('nav .menu').slideToggle();			 									 	
	});

	$('.dropdown a').click(function(){
		$(this).next().fadeToggle(300);
	});

// Scroll Top

	var scrollTop = $('#scroll-top');

	scrollTop.hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100 ) {
			scrollTop.fadeIn(300);
		} else {
			scrollTop.fadeOut(300);
		}
	});

	scrollTop.click(function(){
		$('html, body').animate({scrollTop: 0});
	});

	$('.single-items').slick({
		dots: true,
		prevArrow: '<span class="btn-prev"><i class="icofont-thin-left"></i></span>',
		nextArrow: '<span class="btn-next"><i class="icofont-thin-right"></i></span>',
	});

// autoplay

	$('.autoplay').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  prevArrow: '<span class="btn-prev"><i class="icofont-thin-left"></i></span>',
	  nextArrow: '<span class="btn-next"><i class="icofont-thin-right"></i></span>',
	   responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

});