const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        665: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40
        },
         1200: {
            spaceBetween: 60
        }
    }
});