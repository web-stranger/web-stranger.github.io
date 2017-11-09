$(document).ready(function () {
    $hamburger = $('<div id="hamburger">☰</div>');
    $hamburger.click(function () {
        $('.nav-wrapper').addClass('open');
        $('body').css({'overflow': 'hidden'});
    });
    $('body').append($hamburger);
    $closeMenu = $('<div id="close-menu">✖</div>');
    $closeMenu.click(function () {
        $('.nav-wrapper').removeClass('open');
        $('body').css({'overflow': ''});
    });
    $('nav').prepend($closeMenu);

    checkWayPoints();

    $(window).scroll(checkWayPoints);

    mql = window.matchMedia('(min-width: 32rem)');
    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
});

var handleMatchMedia = function (mediaQuery) {
    if (mediaQuery.matches) {
        $('.nav-wrapper').removeClass('mobile');
    } else {
        $('.nav-wrapper').addClass('mobile');
    }
};

var checkWayPoints = function () {
    if ($(document).scrollTop() <= 29) {
        $('.nav-wrapper').removeClass('fixed');
    } else if ($(document).scrollTop() > 29) {
        $('.nav-wrapper').addClass('fixed');
    }
};
