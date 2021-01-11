//let menuToggle = document.getElementById('menu-toggle');
//let mobilHeader = document.querySelector('.mobil-header');
//let mobilPhoneOne = document.querySelector('.header-img-apple');
//let mobilPhoneTwo = document.querySelector('.header-img-google');
//
//menuToggle.addEventListener('click',function(){
//    menuToggle.classList.toggle('open')
//    mobilHeader.classList.toggle('active')
//    mobilPhoneOne.classList.toggle('active')
//    mobilPhoneTwo.classList.toggle('active')
//})
$(document).ready(function () {


    $('#menu-toggle').click(function (arg) {
        $(this).toggleClass('open');
        arg.preventDefault
        $(this).toggleClass('active');
        $('.mobil-header').toggleClass('active');
        $('.header-img-apple,.header-img-google').toggleClass('active');

        if ($('#menu-toggle.open').is(':visible')) {
            $('body').addClass("fixedPosition");
        } else {
            $('body').removeClass("fixedPosition");
        }

    });


    let pihuaz;

    function pihua() {
        if (pihuaz) 
            return;
        
        pihuaz = 1;
        
        $('.win-detalis-numder span span').each(function () {

            $(this).prop('Counter', 0).animate({
                Counter: $(this).data('count')
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            })
        });
    }



    $(window).scroll(function (event) {
        var w = $(window).scrollTop();
        var s = $('#win').offset().top;

        if (w >= s - 300) {
            pihua();
        }

    });
});
