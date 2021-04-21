$(document).ready(function () {
 initSlider();
});

function initSlider() {
    $('#slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centeredMode: true,
        dots: true,
        autoplay:true,
        autoplaySpeed:3000,
    });
};