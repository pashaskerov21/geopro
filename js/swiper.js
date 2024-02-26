document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        new Swiper('.banner_swiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
        new Swiper('.partner_swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }
        });
    });
});