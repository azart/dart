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

        $(".award-a").fancybox({
            closeBtn:false
        });

        $(window).resize(function () {
            sidebarHeight = $(window).height() - 140;
            $("#sidebar").css("height", sidebarHeight)
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

function setBackgroundImage(url) {
    $("body").css("background-image", "url('" + url + "')");
    $(".cb-slideshow").remove();
}