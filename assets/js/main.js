$(document).ready(function () {
    $(".banner-carousel").owlCarousel({
        center: true,
        loop: true,
        responsiveClass: true,
        autoplay:true,
        dots:true,
        responsive: {
            300: {
                items: 1,
            },
            1000: {
                items: 2,
                margin: 10,
                autoWidth: true,
            }
        }
    });
});

$(document).ready(function () {
    $(".card-carousel").owlCarousel({
        loop: true,
        // margin: 10
        dots: true,
        autoplay:true,
        responsive:{
            300:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

// $('.single-item').slick({
//     dots: true,
//     infinite: true,
// });