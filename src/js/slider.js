
$(document).ready(function () {
    $('.slider__inner').slick({
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right.svg"></button>'

    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
       
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.catalog__wrapper').find('div.catalog__cards').removeClass('catalog__cards_active').eq($(this).index()).addClass('catalog__cards_active');
    });

});




