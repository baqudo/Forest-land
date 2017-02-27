// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();


$(function () {
	//callback scroll

	var $callback = $('.callback');
	var $callbackButton = $callback.find('.callback__button.for-desktop');
	var $callbackButtonMobile = $callback.find('.callback__button.for-mobile');

	$(window).scroll(function(){

		if ($(this).scrollTop() > 600) {
			$callback.addClass('is-scrolled');
		} else {
			$callback.removeClass('is-scrolled');
		}
	});

	var menuTrigger = $('.navigation-trigger'),
		menu = $('.navigation');

	menuTrigger.on('click',function(){
		menu.slideToggle();
	});



	$(window).resize(function	() {
			var wid = $(window).width();
			if(wid > 998 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}

			if(wid < 450) {
				$callbackButton.hide();
				$callbackButtonMobile.show();
			} else {
				$callbackButton.show();
				$callbackButtonMobile.hide();
			}
	});
});



// popup
$(function () {
	var popupTrigger = $('.js-popup-button'),
		duration = 300;

	popupTrigger.on('click', function () {
		var $this = $(this),
			popupName = $this.data('popup'),
		// console.log(popupName);
			popupWindow = $('#popup-' + popupName),
		// console.log(popupWindow);
			popupClose = popupWindow.find('.js-popup-close'),
			popupSlider = popupWindow.children().find('.js-popup-slider'),
			slickOpt = {
				infinite: false
			};

		popupWindow.fadeIn(duration);

		if (!popupSlider.hasClass('slick-slider')) {
			// console.log(popupSlider);
			popupSlider.slick(slickOpt);
		}

		var currentSlide = popupSlider.slick('slickCurrentSlide');
		var slides = popupSlider.children();
		// var prevSlide = $('.js-popup-slider').slick('slickPrevSlide');
		// var nextSlide = $('.js-popup-slider').slick('slickNextSlide');
		var pages = $('.pages .pages__item');
		var currentPage = pages.filter('.is-current-page');
		var lastPage = pages.filter('.is-last-page');
		console.log(lastPage);

		
		// .html(currentSlide + 1);
		// console.log(pages);
		// console.log(currentSlide);
		$('.js-popup-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// currentPage.html(currentSlide + 1);
			console.log(nextSlide + 1);
			// console.log(prevSlide);
		});

		$('.js-popup-slider').on('afterChange', function(event, slick, currentSlide){
			currentPage.html(currentSlide + 1);

		});



		popupClose.on('click',function () {
			popupWindow.fadeOut(duration);
		})

	})
});


//tabs and sliders
$(function () {
	var tabContol = $('.js-tabs__controls'),
		contentList = $('.js-tabs__list'),
		contentItem = contentList.children('li.js-tabs__item'),

		$sliders = $('.js-slider');
		var slickOpt = {
	   infinite: false,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    responsive: [
		    {
		      breakpoint: 1350,
		      settings: {
		        arrows: true,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 1005,
		      settings: {
		        arrows: true,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		      	infinite: true,
		        arrows: false,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      	infinite: true,
		        arrows: false,
		        centerMode: true,
		        centerPadding: '50px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 380,
		      settings: {
		      	infinite: true,
		        arrows: false,
		        centerMode: true,
		        centerPadding: '10%',
		        slidesToShow: 1
		      }
		    }
		  ]
	  };

	  $sliders.filter('.is-active').slick(slickOpt);

	  function	swapTab() {
			var $target = $(this),
				itemPosition = $target.index();

			$target.addClass('is-active').siblings().removeClass('is-active');
			contentItem.eq(itemPosition).addClass('is-active').siblings().removeClass('is-active');
	  }


		function initSlider(event){
			var $target = $(this),
				itemPosition = $target.index(),
				dataTarget = $target.data('tabs'); // нужно добавить дата-значения (если их нет) что бы связывать таб с блоком(слайдером)

			$target.addClass('is-active').siblings().removeClass('is-active');
			contentItem.eq(itemPosition).addClass('is-active').siblings().removeClass('is-active');

			var $slider = $sliders.filter('[data-tabs="'+dataTarget+'"]');
			// тут сделать проверку на иницализацию слайдера - если инициализирован, то не нужно инициализировать
			if(!$slider.slick(slickOpt)) {
				$slider.slick(slickOpt);
			}
		}

	tabContol.one('click', initSlider);
	tabContol.on('click', swapTab);

});

$(function () {
	var $link = $('.js-scroll-link');

	$link.on("click", function(event) {

    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 99;
    //анимируем переход на расстояние - top за 1300 мс
    $('body,html').animate({scrollTop: top}, 1300);
	});
});
