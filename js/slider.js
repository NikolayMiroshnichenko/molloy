const apartment = new Swiper(".apartmentSlider", {
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1220: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});