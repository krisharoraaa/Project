$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2900,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });
});