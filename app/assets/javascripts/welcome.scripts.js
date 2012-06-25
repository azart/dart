var SIDEBAR_HIDDEN = true;
var NUM_SLIDES;

$(function () {
    NUM_SLIDES = $("#slider").children().length;

    $(".title_info").text($("#slider .slide:first img").attr("alt"));

    initChopSlider();

    $(window).resize(function () {
        $.chopSlider.redefine();
    });

    $(document).mousemove(function (e) {
        if (e.pageX <= 309 && SIDEBAR_HIDDEN) {
            $("#sidebar").animate({
                "left":"+=400px"
            }, "slow");
            SIDEBAR_HIDDEN = false;
        }
        if (e.pageX >= 309 && !SIDEBAR_HIDDEN) {
            $("#sidebar").animate({
                "left":"-=400px"
            }, "slow");
            SIDEBAR_HIDDEN = true;
        }

    });
});

function showNextSlideInfo(index) {
    var nextSlideIndex = index < NUM_SLIDES - 1 ? index + 1 : 0;

    $(".info").fadeOut(1000, function () {
        // Next slide text
        var nextSlideText = $("#slider .slide").eq(nextSlideIndex).find("img").attr("alt");

        $(".title_info").text(nextSlideText);

        $(".info").fadeIn(1000);
    });
}


function initChopSlider() {
    $("#slider").chopSlider({
        loaderIndex:0,
        /* Slide Element */
        slide:".slide1",
        activeSlideClass:"cs-activeSlide",
        /* Controlers */
        nextTrigger:"a.snext-1",
        prevTrigger:"a.sprev-1",
        hideTriggers:true,
        sliderPagination:".sp-1",
        activePaginationClass:"cs-active-pagination",
        onStart:function () {
            // For pagination
            $.chopSlider.slide({
                slideTo:$(".cs-active-pagination").index()
            });
            var currentSlideIndex = $(".cs-activeSlide").index();
            showNextSlideInfo(currentSlideIndex);
        },

        autoplay:true,
        autoplayDelay:3000,

        defaultParameters:{
            type:"multi",
            xOffset:20,
            yOffset:20,
            hPieces:10,
            vPieces:15,
            rotate:10,
            rotateSymmetric:false,
            scaleX:0.5,
            scaleY:-0.5,
            translateX:10,
            translateY:10,
            ease1:"ease",
            ease2:"ease",
            origin:"center center",
            dur1:1000,
            dur2:600,
            dur3:1000,
            pieceDelay:50,
            xFadeDelay:0,
            prevTransition:{
                rotate:-10,
                xOffset:10,
                startFrom:10
            }
        }

    })
}