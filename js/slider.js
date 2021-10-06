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

const gallerySlider = new Swiper(".gallerySlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1220: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
})

// window.addEventListener('resize', () => {
//     if (window.screen.width > 1220) return;


//     console.log("HIIII")
// });

{/*  */}








