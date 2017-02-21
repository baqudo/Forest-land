// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

// popup ----------------------------------
$(function () {
	var
		callbackButton = $('.js-callback-trigger'),
		callbackPopup = $('.js-callback-popup'),
		callbackClose = $('.js-callback-popup-close'),
		callbackSubmit = $('.js-callback-popup-submit'),
		duration = 300;

	callbackButton.on('click', function(){
		callbackPopup.fadeIn(duration);
	})

	callbackClose.on('click', function(){
		callbackPopup.fadeOut(duration);
	})

	callbackSubmit.on('click', function(){
		callbackPopup.fadeOut(duration);
	})
});


//tabs and sliders-----------------------------------
$(function () {
	var tabContol = $('.js-tabs__controls'),
		contentList = $('.js-tabs__list'),
		contentItem = contentList.children('li.js-tabs__item'),

		$sliders = $('.js-slider');
		var slickOpt = {
	   infinite: false,
	    slidesToShow: 3,
	    slidesToScroll: 1
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
