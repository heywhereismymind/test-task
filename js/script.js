/*---------------Sliders------------------*/

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

/*---------------Feedback------------------*/
jQuery(function ($) {
    $("#number").mask("+375 (99) 999-99-99");
});


/*---------------Burger Menu------------------*/
(function ($) {
    $(function () {
        $('.burger_icon').on('click', function () {
            $(this).closest('.nav').toggleClass('nav-open');
        });
    });
})(jQuery);


/*---------------Smooth transition by link------------------*/
$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});


/*---------------Return button------------------*/
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});