
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

    /* Оптимизированный код перехода подробнее-назад */

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

    $('[data-modal=modal__main]').on('click', function () {
        $('.overlay, #modal__main').fadeIn('slow');

    });

    /*   $('[data-modal=modal__order').on('click', function(){
          $('.overlay, #modal__order').fadeIn('slow');
      }); */

    $('[data-modal=modal__order').each(function (i) {
        $(this).on('click', function () {
            $('#modal__order .modal__subtitle').text($('.card__title').eq(i).text());
            $('.overlay, #modal__order').fadeIn('slow');
        })
    });

    /* закрытие крестиком */
    $('.modal__close').on('click', function () {
        $('.overlay, #modal__main, #modal__order, #mini').fadeOut('slow');
    });



    /* маска номера в форме */
    $('input[name=phone').mask("+7 (999) 999-99-99");


    /* отправка писем с сайта  */
    $('form').submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");



            $('form').trigger('reset');
        });
        return false;
    });

    /*  js-modalform-order
     js-modalform-consultation
     js-form-consultation
  */

    /*  $('.js-modalform-order').validate();
     $('.js-modalform-consultation').validate();
     $('.js-form-consultation').validate(); */

    /* появление кнопки скрола на верх*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();

        }
        else {
            $('.pageup').fadeOut();
        }
    });

    /* плавный скролл на верх */

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

/*  подключение WOW анимации + обязательное подключение animate.css */

    new WOW().init();

});




