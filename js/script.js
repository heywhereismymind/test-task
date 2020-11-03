$(function() {

    $('.slider').slick({
        nextArrow: document.querySelector('.right_arrow'),
        prevArrow: document.querySelector('.left_arrow'),
        draggable: false,
    })
});


$(function() {

    $('.main_gallery').slick({
        nextArrow: document.querySelector('.right'),
        prevArrow: document.querySelector('.left'),
        draggable: false,
    })
})

$(function() {

    $('.slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        nextArrow: document.querySelector('.right_arrow1'),
        prevArrow: document.querySelector('.left_arrow1'),
    })
})

jQuery(function($){
   $("#number").mask("+375 (99) 999-99-99");
});