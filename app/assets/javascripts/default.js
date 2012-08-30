var sidebarHeight;

$(document).ready(function () {
    if ($("#notice").length > 0) {
        setTimeout(function () {
            $("#notice").animate({top:-144}, 555, function () {
                $("#notice").remove();
            });
        }, 3500);
    }

    if ($("#sidebar").length > 0) {
        sidebarHeight = $(window).height() - 140;
        $("#sidebar").css("height", sidebarHeight);

        $(window).resize(function () {
            sidebarHeight = $(window).height() - 140;
            $("#sidebar").css("height", sidebarHeight)
        });
    }

    if ($("#sidebar").length > 0) {
        $(".award-a").fancybox({
//            prevEffect		: 'none',
//            nextEffect		: 'none',
            closeBtn:false
//            helpers		: {
//                title	: false,
//                buttons	: {}
//            }
        });
    }

    if ($('#clients').length > 0) {
        $('#clients').masonry({
            itemSelector:'.client'
        });
    }

    if ($('#partners').length > 0) {
        $('#partners').masonry({
            itemSelector:'.partner'
        });
    }
});

function showAwardsImage(url) {
    $("#awards-big").css("background", "url(" + url + ") no-repeat center center transparent")
    $("#awards-big").show();
    $("#awards-big").click(function () {
        $("#awards-big").hide();
        $("#awards-big").css("background", "url(default-bg.jpg) no-repeat center center transparent")
    });
}