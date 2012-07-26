var SIDEBAR_HIDDEN = true;
var COVER_WIDTH = 1200;
var COVER_HEIGHT = 700;

jQuery(function () {

    initSlider();

    $(document).mousemove(function (e) {
        if (e.pageX <= 233 && SIDEBAR_HIDDEN) {
            $("#sidebar").animate({
                "left":"+=400px"
            }, "slow");
            SIDEBAR_HIDDEN = false;
        }

        if (e.pageX >= 233 && !SIDEBAR_HIDDEN) {
            $("#sidebar").animate({
                "left":"-=400px"
            }, "slow");
            SIDEBAR_HIDDEN = true;
        }
    });
});

function checkScreen() {
//    884 - 576
//    1200-700

    width = $(window).width();
    height = $(window).height();

    if (width / height > 12 / 7) {
        if (width > 1200) {
            image_height = height
        } else {
            image_width = width
        }
    } else {
        if (width > 1200) {
            image_width = width
        } else {
            image_height = height
        }
    }

//    $("#slider").css("width", width);
//    $("#slider").css("height", height);
//
//    if (typeof(image_width) != undefined) {
//        $(".slide img").css("width", width);
//        $(".slide img").css("height", height);
//    }
//
//    if (typeof(image_height) != undefined) {
//        $(".slide img").css("height", height);
//        $(".slide img").css("width", width);
//    }
}

function initSlider() {

    checkScreen();
    $("#slider").chopSlider({
        loaderIndex:0,
        slide:".slide",
        nextTrigger:"a#slide-next",
        prevTrigger:"a#slide-prev",
        hideTriggers:false,
        sliderPagination:".slider-pagination",
        useCaptions:true,
        everyCaptionIn:".sl-descr",
        showCaptionIn:".info",
        captionTransform:"scale(0) translate(-600px,0px) rotate(45deg)",
        autoplay:true,
        autoplayDelay:3000,
//        t2D:csTransitions['vertical'][1],
//        t3D:csTransitions['3DFlips'][13-15, 18],
        t3D:csTransitions['3DFlips'][19],
//        t3D:csTransitions['3DFlips'][11],
        onStart:function () {
            $("body").attr("scroll", "no");
            $("body").css("overflow", "hidden");
        },
        onEnd:function () {
            $("body").css("overflow", "");
            $("body").attr("scroll", "");
        }
    });
}
