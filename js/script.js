document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {

        // elements
        const body = $('body');
        const header = $('header');
        const footer = $('footer');
        const main = $('main');
        const menuButton = $('.menu_button');
        const linkItem = $('.link_item');
        const mobileMenu = $('.mobile_menu');
        const blackBackdrop = $('.black_backdrop');
        const footerNavLinks = $('.footer_nav_links a');
        const footerNavLinksHoverLine = $('.footer_nav_links .hover_line');

        

        // main.css('margin-bottom', footer.outerHeight() + 'px');
        // body.css('height', body.outerHeight() + footer.outerHeight() + 'px')
        // window.addEventListener('resize', function () {
        //     main.css('margin-bottom', footer.outerHeight() + 'px');
        // })

        menuButton.click(function () {
            const position = header.outerHeight() + 4;
            $(this).toggleClass('active');
            mobileMenu.slideToggle();
            mobileMenu.css('top', position + 'px');
            blackBackdrop.toggleClass('d-none');
            body.toggleClass('locked')
        });


        linkItem.click(function () {
            if ($(window).width() <= 1200) {
                $(this).toggleClass('active');
                $(this).find('.link_menu').slideToggle();
            }
        });
        linkItem.hover(function () {
            if ($(window).width() >= 1200) {
                $(this).addClass('active');
                $(this).find('.link_menu').slideDown(150);
            }
        }, function () {
            if ($(window).width() >= 1200) {
                $(this).removeClass('active');
                $(this).find('.link_menu').slideUp(150);
            }
        });

        footerNavLinks.hover(function(){
            const left = $(this).position().left;
            const width = $(this).outerWidth();
            footerNavLinksHoverLine.css('left', left + 'px');
            footerNavLinksHoverLine.css('width', width + 'px');
        },function(){
            footerNavLinksHoverLine.css('width', 0);
        });
    })
})