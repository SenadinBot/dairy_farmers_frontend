$(document).ready(function () {
    // Video Modal
    $('.video-modal').on('hidden.bs.modal', () => {
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
        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, step);
        }
        counter("count", 0, 15, 3000);
    }

    // Show Nutrition Answers
    $('.true-false-item-content .primary-btn').on('click', function () {
        $(this).parents('.true-false-item').addClass('show-answer');
    });

    // Nutrition List Slick Carousel
    $('.nutrients-list-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        variableWidth: true,
        infinite: true,
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
});