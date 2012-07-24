var SIDEBAR_HIDDEN = true;

jQuery(function () {

    width = $(window).width();
    $("#container").css("width", width);
    $(".slide img").css("width", width);

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
        autoplayDelay:8000,
        t2D:csTransitions['vertical'][1],
        t3D:csTransitions['3DFlips'][4],
        onStart: function (){
            $("body").attr("scroll", "no");
            $("body").css("overflow", "hidden");
        },
        onEnd: function (){
            $("body").css("overflow", "");
            $("body").attr("scroll", "");
        }
    });

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