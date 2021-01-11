$(document).ready(function () {


    $('.menu').click(function () {
        $(this).find(".hambergerIcon").toggleClass("open");
        $('.headerNav-mobil').toggleClass('active');
        
            if ($('.hambergerIcon.open').is(':visible')) {
                $('body').addClass("fixedPosition");
            }
        else {
            $('body').removeClass("fixedPosition");
        }

    });

});
