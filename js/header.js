$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.header-wrapper').addClass("sticky");
    }
    else {
        $('.header-wrapper').removeClass("sticky");
    }
});