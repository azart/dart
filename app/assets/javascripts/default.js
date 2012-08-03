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
});