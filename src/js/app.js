// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

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

$(function () {

	$('.tabs-controls__item').on('click', function () {
		var item = $(this),
		contentItem = $('.tabs__item'),
		itemPosition = item.index();

		item.addClass('is-active').siblings().removeClass('is-active');
		contentItem.eq(itemPosition).addClass('is-active').siblings().removeClass('is-active');
	});

});

$(function () {
		$('.js-slider').slick({	
			centerMode: true,
			centerPadding: '2%',
			slidesToShow: 3,
			slidesToScroll: 1
	});
});
