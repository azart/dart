jQuery(function(){
	$("#slider-1").chopSlider({
		/* Slide Element */
		slide : ".slide1",
		activeSlideClass : "cs-activeSlide",
		/* Controlers */
		nextTrigger : "a.snext-1",
		prevTrigger : "a.sprev-1",
		hideTriggers : true,
		sliderPagination : ".sp-1",
		activePaginationClass : "cs-active-pagination",
		/* For first slider we will use all Multi Transitions */
		t2D : csTransitions['multi']['random'],
		autoplay : true,
		autoplayDelay : 5000
		
	})
})

