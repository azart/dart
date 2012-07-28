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
		//t2D : csTransitions['multi']['random'],
		onStart: function() { 
			// For pagination	
			$.chopSlider.slide({
				slideTo : $(".cs-active-pagination").index()	
			}) 
		},
		
		autoplay: true,
		autoplayDelay: 3000,
		
		/* Default Parameters */
		defaultParameters : {
			type: "multi",
			xOffset: 20,
			yOffset: 20,
			hPieces : 10,
			vPieces: 15,
			rotate : 10 ,
			rotateSymmetric: false,
			scaleX:0.5,
			scaleY:-0.5,
			translateX:10,
			translateY:10,
			ease1:"ease",
			ease2:"ease",
			origin:"center center",
			dur1: 1000,
			dur2 :600,
			dur3: 1000,
			pieceDelay : 50,
			xFadeDelay :0,
			prevTransition : {
				rotate:-10,
				xOffset:10,
				startFrom:10
			}	
		},		
		
	})
})

