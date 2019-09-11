$(document).ready(function () {
    // Video Modal
    $('.video-modal').on('hidden.bs.modal', function () {
        $('.video-modal iframe').attr('src', $('.video-modal iframe').attr('src'));
    });

    // Adding Class on Scroll
    $(window).on('load', function () {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 38.5) {
            $('body').addClass('nav-fixed');
        }
    });
    $(window).scroll(function () {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 38) {
            $('body').addClass('nav-fixed');
        } else {
            $('body').removeClass('nav-fixed');
        }
    });

    // Open/Close Desktop Search Open
    $('.search-icon img').on('click', function () {
        var $this = $('.desktop-header-search');
        if ($this.is(':hidden')) {
            $this.slideDown();
        }
        else {
            $this.slideUp();
        }
    });

    // Aos animation
    AOS.init({
        duration: 1000
    });

    // Open/Close Mobile Menu
    $('.nav-icon-container').on('click', function () {
        $('body').toggleClass('menu-open');
    });
    $('.close-icon-container').on('click', function () {
        $('body').removeClass('menu-open');
    });

    // Custom recipe gallery slider
    let viewwidth = window.innerWidth;
    $('.recipes-range').on('input', function () {
        let width = $('.recipes-carousel-inner').width() - $('.recipes-carousel').width() + (viewwidth * 0.08);
        let value = $(this).val() * 0.01;
        let slide = width * value;
        $('.recipes-carousel').scrollLeft(slide);
    });

    $('.recipes-carousel').scroll(function () {
        let width = $('.recipes-carousel-inner').width() - $('.recipes-carousel').width() + (viewwidth * 0.08);
        let scroll = ($('.recipes-carousel').scrollLeft());
        let percent = (scroll / width) * 100;
        $('.recipes-range').val(percent);
    });

    // Nutrition Counter 
    if ($('#count').length) {
        var counter = function counter(id, start, end, duration) {
            var obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(function () {
                    current += increment;
                    obj.textContent = current;

                    if (current == end) {
                        clearInterval(timer);
                    }
                }, step);
        };

        var endCount = parseInt($('#count').text());
        counter("count", 0, endCount, 3000);
    }

    // Show Nutrition Answers
    $('.true-false-item-content .true-btn').on('click', function () {
        $(this).parents('.true-false-item').addClass('show-answer');
        $(this).parents('.true-false-item').find(".wrong-answer").hide();
    });

    $('.true-false-item-content .false-btn').on('click', function () {
        $(this).parents('.true-false-item').addClass('show-answer');
        $(this).parents('.true-false-item').find(".correct-answer").hide();
    });

    // Nutrition List Slick Carousel
    $('.nutrients-list-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        variableWidth: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Our Farmers Carousel 
    $('.farmers-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.farmers-carousel-nav'
    });
    $('.farmers-carousel-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.farmers-carousel',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    // Our Milk Carousel
    var $ourMilkCarousel = $(".our-milk-carousel");
    var ourMilkSSlider;
    if ($(window).width() > 992) {
        // $(".our-milk-range").on("change mousemove", function () {
        //     var previousDiv = $(".our-milk-slide.active-slide");
        //     $(".our-milk-slide").removeClass("active-slide");
        //     var activeDiv = $(".our-milk-slide[data-value='" + parseInt($(this).val()) + "']");
        //     activeDiv.addClass("active-slide");
        //     if (activeDiv.index() > Math.round($(".our-milk-slide").length / 2 - 0.1, 0)) {
        //         activeDiv.insertBefore(previousDiv);
        //     }
        //     else {
        //         activeDiv.insertAfter(previousDiv);
        //     }
        // });
        // $('.our-milk-carousel').slick({

        // });

        ourMilkSSlider = $(".ourMilkSlider").slider({
            min: 0,
            max: 5,
            slide: function (event, ui) {
                var slick = $ourMilkCarousel.slick("getSlick");
                goTo = ui.value * (slick.slideCount - 1) / 5;
                console.log('slideCount', slick.slideCount);
                console.log(goTo);
                $ourMilkCarousel.slick("goTo", goTo);
            }
        });
        $('.ui-slider-handle').css('left', '50%');
    }
    $ourMilkCarousel.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        variableWidth: false,
        initialSlide: 2,
        centerPadding: '0',
        draggable: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            }
        ]
    });

    // T&C Scroll
    $('.t-c-link, .t-c-sublink, .href-tag').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 250,
        }, 1300);
    });

    // Child Menu
    $(".second-header .mobile-inner-nav > ul").menumaker({
        format: "multitoggle"
    });

    // Culinary Carousel
    $('.culinary-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        cssEase: 'linear',
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplay: true,
                }
            }
        ]
    });
    $('.pause-btn').on('click', function () {
        $('.culinary-carousel').slick('slickPause');
        $('.pause-btn').addClass('hide-pause');
        $('.play-btn').removeClass('hide-play');
    });

    $('.play-btn').on('click', function () {
        $('.culinary-carousel').slick('slickPlay');
        $('.play-btn').addClass('hide-play');
        $('.pause-btn').removeClass('hide-pause');
    });
});

$.fn.menumaker = function (options) {
    var cssmenu = $(this), settings = $.extend({
        format: "dropdown",
        sticky: false
    }, options);
    return this.each(function () {
        cssmenu.find('li ul').parent().addClass('has-sub');
        multiTg = function () {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function () {
                $(this).toggleClass('submenu-opened');
                if ($(this).siblings('ul').hasClass('open')) {
                    $(this).siblings('ul').removeClass('open').slideToggle('fast');
                }
                else {
                    $(this).siblings('ul').addClass('open').slideToggle('fast');
                }
            });
        };
        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');
        if (settings.sticky === true) cssmenu.css('position', 'fixed');
        resizeFix = function () {
            var mediasize = 1200;
            if ($(window).width() > mediasize) {
                cssmenu.find('ul').show();
            }
            if ($(window).width() <= mediasize) {
                cssmenu.find('ul').hide().removeClass('open');
            }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);
    });
};