const swiper = new Swiper(".articles-block__slider", {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});