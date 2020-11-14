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


/*---------------Fixed Menu------------------*/
$('.bottom_line').addClass('original').clone().insertAfter('.bottom_line').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').css('padding', 0).css('opacity', '0.8').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {

        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original').css('visibility', 'hidden');
    } else {

        $('.cloned').hide();
        $('.original').css('visibility', 'visible');
    }
}