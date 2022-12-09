
$(document).ready(function () {
    $('.slider__inner').slick({
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right.svg"></button>'

    });

    /* Смена табов в каталоге */

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {

        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.catalog__wrapper').find('div.catalog__cards').removeClass('catalog__cards_active').eq($(this).index()).addClass('catalog__cards_active');
    });

/* Не оптимизированный код перезода подробнее-назад */

    /* $('.card__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.card__main').eq(i).toggleClass('card__main_active');
            $('.card__list').eq(i).toggleClass('card__list_active');
        })
    });

    $('.card__list_back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.card__main').eq(i).toggleClass('card__main_active');
            $('.card__list').eq(i).toggleClass('card__list_active');
        })
    }); */

/* Оптимизированный код перезода подробнее-назад */

    function toggleSlide(card) {
        $(card).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.card__main').eq(i).toggleClass('card__main_active');
                $('.card__list').eq(i).toggleClass('card__list_active');
            })
        });
    };

    toggleSlide('.card__link');
    toggleSlide('.card__list_back');

/* модальные окна */

/* открытие при нажатии на кнопку */

    $('[data-modal=modal__main]').on('click', function(){
        $('.overlay, #modal__main').fadeIn('slow');

    }); 
    
  /*   $('[data-modal=modal__order').on('click', function(){
        $('.overlay, #modal__order').fadeIn('slow');
    }); */

    $('[data-modal=modal__order').each(function(i){
        $(this).on('click', function(){
            $('#modal__order .modal__subtitle').text($('.card__title').eq(i).text());
            $('.overlay, #modal__order').fadeIn('slow');
        })
    });

    /* закрытие крестиком */

    $('.modal__close').on('click', function(){
        $('.overlay, #modal__main, #modal__order, #mini').fadeOut('slow');
    });

   /*  $("form").validate(); */

    $('input[name=phone').mask("+7 (999) 999-99-99");

    define(["jquery", "jquery.validate"], function($) {
        $(".form").validate();
    });

   
});




