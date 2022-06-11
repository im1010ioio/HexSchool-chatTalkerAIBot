$(document).ready(function () {
    $('.content-user').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 1800,
                    autoplaySpeed: 2200
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1500,
                    autoplaySpeed: 1500
                }
            }
        ]
    });
});