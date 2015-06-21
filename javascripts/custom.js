function portofolioPageInitialize(){
	"use strict";
	var speed = 10;
	var self = 'figure.portofolio';
	$('figure.portofolio')
		.mouseenter(function() {
			$(self + ' figcaption').animate({
					top: "-95px"
			}, speed);
			$(self + ' img').animate({
					top: "-40px"
			}, speed);
		})
		.mouseleave(function() {
			$(self + ' figcaption').animate({
					top: "0"
			}, speed);
			$(self + ' img').animate({
					top: "0"
			}, speed);
		});
}	