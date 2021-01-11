$(document).ready(function () {

    $('.menu').click(function () {
        $(this).find(".hambergerIcon").toggleClass("open");
        $('.menu-header').toggleClass('active');
        $('.desinger-but').toggleClass('active')

    });
    $('.menu-header')
    let btmTop = $('.button-top');

    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= 20) {
            btmTop.fadeIn();
        } else {
            btmTop.fadeOut();
        }
    });
    $(btmTop).on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 900)
    });

    $("#menu-header").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1500);

    });


});
