$(document).ready(function () {
    $("#btn-top").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 10) {
            $(".navbar").addClass("scrolling");
        } else {
            $(".navbar").removeClass("scrolling");
        };
    });
    var rellax = new Rellax('.rellax', {
        center: true
    });
});