function portofolioPageInitialize(){
	"use strict";
	var speed = 10;
	$('figure.portofolio').each(function() {
		$(this).mouseenter(function() {
			$(this).children('figcaption').animate({
					top: "-95px"
			}, speed);
			$(this).children('img').animate({
					top: "-40px"
			}, speed);
		})
		.mouseleave(function() {
			$(this).children('figcaption').animate({
					top: "0"
			}, speed);
			$(this).children(' img').animate({
					top: "0"
			}, speed);
		});
	});
}	