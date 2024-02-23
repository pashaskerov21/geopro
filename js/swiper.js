document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
         new Swiper('.banner_swiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    });
});