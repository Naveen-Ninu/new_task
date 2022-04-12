$('.my_slider').slick({
    centerMode: true,
    centerPadding: '.center',
    slidesToShow: 4,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});