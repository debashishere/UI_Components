

// initialize swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCurser: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
})



