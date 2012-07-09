$(document).ready(function () {
    if ($("#notice").length > 0) {
        setTimeout(function () {
            $("#notice").animate({top:-144}, 555, function () {
                $("#notice").remove();
            });
        }, 3500);
    }

    if ($("select").length > 0) {
        var params = {
            changedEl:"select",
            scrollArrows:false
        }
        cuSel(params);
    }

});


