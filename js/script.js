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

        footerNavLinks.hover(function () {
            const left = $(this).position().left;
            const width = $(this).outerWidth();
            footerNavLinksHoverLine.css('left', left + 'px');
            footerNavLinksHoverLine.css('width', width + 'px');
        }, function () {
            footerNavLinksHoverLine.css('width', 0);
        });



        // counter
        var isCounting = false;
        $(window).on('scroll', function () {
            if (!isCounting && isScrolledIntoView($(".about_report"))) {
                isCounting = true;
                $('.item_value').each(function () {
                    var $this = $(this);
                    var countTo = $this.attr('data-val');
                    $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
            }
        });

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return (elemTop <= docViewBottom);
        }

        const newsBanners = $('.news_banners .banner_item');
        const newsListItems = $('.news_list .list_item');
        const newsContainerFirstCol = $('.news_container .container_col.col_1');
        const newsContainerSecondCol = $('.news_container .container_col.col_2');
        newsContainerSecondCol.css('height', newsContainerFirstCol.outerHeight() + 'px');
        newsBanners.eq(0).removeClass('d-none');
        newsListItems.hover(function(){
            let id = $(this).data('id');
            newsBanners.addClass('d-none');
            $(`.news_banners .banner_item[data-id="${id}"]`).removeClass('d-none');
            newsContainerSecondCol.css('height', newsContainerFirstCol.outerHeight() + 'px');
        },function(){
            // newsBanners.addClass('d-none');
            // newsBanners.eq(0).removeClass('d-none');
        })
    })
})