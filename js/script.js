$(function () {

    $('.slider').slick({
        nextArrow: document.querySelector('.right_arrow'),
        prevArrow: document.querySelector('.left_arrow'),
        draggable: false,
        adaptiveHeight: false
    })
});


$(function () {

    $('.main_gallery').slick({
        nextArrow: document.querySelector('.right'),
        prevArrow: document.querySelector('.left'),
        draggable: false,
    })
})

$(function () {

    $('.slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        nextArrow: document.querySelector('.right_arrow1'),
        prevArrow: document.querySelector('.left_arrow1'),
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    })
})

jQuery(function ($) {
    $("#number").mask("+375 (99) 999-99-99");
});


(function ($) {
    $(function(){
       $('.burger_icon').on('click', function(){
           $(this).closest('.nav').toggleClass('nav-open');
       }); 
    });
})(jQuery);

