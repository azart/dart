$(function () {

    foldAllItems();
    ChangeWidthHeight();

    $(window).resize(function () {
        ChangeWidthHeight();
    });

    $(".menu_about > li > a").click(function (e) {
        e.preventDefault();

        if ($(this).parent().hasClass("current")) {
            foldItem($(this).parent().index());
        } else {
            foldAllItems();
            var index = $(this).parent().index();
            unfoldItem(index);
        }
    });

    menuWrapperTop = $(".menu_wrapper").offset().top;
    menuWrapperRealHeight = getRealMenuHeight();
    maxMargin = menuWrapperRealHeight - 400;
    $(".menu_wrapper").mousemove(function (e) {
        var wrapperMouseTopPos = e.pageY - menuWrapperTop;
        if (wrapperMouseTopPos < 20) return false;
        var menuMarginTop = maxMargin * (wrapperMouseTopPos - 20) / (400 - 40);
        if (menuMarginTop < maxMargin) {
            $(".menu_about").css("margin-top", "-" + menuMarginTop + "px");
        }
    });
});

function foldAllItems() {
    $(".news_list").hide();
    $(".menu_about li").removeClass("current");
}

function foldItem(index) {
    $(".menu_about li").eq(index).removeClass("current");
    if ($(".menu_about li").eq(index).find(".news_list").length) {
        $(".menu_about li").eq(index).find(".news_list").hide("blind", function() {
            resetConstants();
        });
    }

    resetConstants();
}

function unfoldItem(index) {
    $(".menu_about > li").eq(index).addClass("current");
    if ($(".menu_about li").eq(index).find(".news_list").length) {
        $(".menu_about li").eq(index).find(".news_list").show("blind", function() {
            resetConstants();
        });
    }

    resetConstants();
}

function getRealMenuHeight() {
    var div = $(".menu_about");
    var startHeight = div.height();
    div.css( "height", "auto" );
    var endHeight = div.height();
    div.height( startHeight );

    return endHeight;
}

function resetConstants() {
    menuWrapperTop = $(".menu_wrapper").offset().top;
    menuWrapperRealHeight = getRealMenuHeight();
    maxMargin = menuWrapperRealHeight - 400;
}

function ChangeWidthHeight() {
    $(window).resize(function () {
        if ($(window).height() > 626) {
            $('#container').css("height", $(window).height()+'px');
            $('#sidebar').css("height", $(window).height()+'px');
            $('#slider img').css("height", $(window).height()+'px');

        }
        $('#container').css("width", $(window).width()+'px');
        $('#slider img').css("width", $(window).width()+'px');
    });
}