// slik banner
$(document).ready(function () {
  $(".banner-carousel").owlCarousel({
    center: true,
    loop: true,
    responsiveClass: true,
    autoplay: true,
    dots: true,
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

// slick rekomendasi
$(document).ready(function () {
  $(".card-carousel").owlCarousel({
    loop: true,
    // margin: 10
    dots: true,
    autoplay: true,
    responsive: {
      300: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});

// slick tranding
$('.card-tranding-carousel').slick({
  dots: true,
  autoplay: true,
  slidesPerRow: 2,
  rows: 2,
  margin: 0,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 1,
        row: 0
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// input no ponsel
$("#mobile-number").intlTelInput();

// $('.single-item').slick({
//     dots: true,
//     infinite: true,
// });