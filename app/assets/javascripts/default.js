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

    if ($('#clients').length > 0) {
        $('#clients').masonry({
            itemSelector:'.client',
            isAnimated:true,
            animationOptions:{
                duration:750,
                easing:'linear',
                queue:false
            }
        });
    }

    if ($('#awards').length > 0) {
        $('#awards').masonry({
            itemSelector:'.client',
            isAnimated:true,
            animationOptions:{
                duration:750,
                easing:'award',
                queue:false
            }
        });
    }
});

function showAwardsImage(url) {
    $("#awards-big").css("background", "url(" + url + ") no-repeat center center fixed;")
    $("#awards-big").show();
    $("#awards-big").click(function (){
        $("#awards-big").hide();
        $("#awards-big").css("background", "url(default-bg.jpg) no-repeat center center fixed;")
    });
}
