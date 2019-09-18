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
    $('.t-c-link, .t-c-sublink, .href-tag, .p-p-link, .p-p-sublink').click(function (event) {
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
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 8000,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 8000,
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

    $('#loadMoreRecipes').on('click', function () {
        debugger;
        var numberOfElements = parseInt($('#numberOfElements').val());
        var currentNumberOfElements = parseInt($('#currentNumberOfElements').val());
        for (var i = currentNumberOfElements; i < (currentNumberOfElements + numberOfElements); i++) {
            var recipeItemId = '#recipe-item-' + i;
            $(recipeItemId).removeAttr('hidden');
        }
        currentNumberOfElements += numberOfElements;
        $('#currentNumberOfElements').val(currentNumberOfElements);
    });

    $('.loadMoreArticles').on('click', function () {
        var currentNumberOfElements = parseInt($(this).next('.numberOfVisibleItems').val());
        var isInverted = $(this).siblings(".isInverted").val() == "True";
        var increaseBy = isInverted ? 2 : 3;
        for (var i = currentNumberOfElements; i < (currentNumberOfElements + increaseBy); i++) {
            var articleItemId = '#article-item-' + i;
            if (isInverted) {
                $(this).parents('.btn-container').siblings('.two-article-list-container').children(articleItemId).removeAttr('hidden');
            } else {
                $(this).parents('.btn-container').siblings('.three-article-list-container').children(articleItemId).removeAttr('hidden');
            }
        }
        currentNumberOfElements += increaseBy;
        $(this).next(".numberOfVisibleItems").val(currentNumberOfElements);
    });

    // Modal Custom scrollbar
    $(".board-directors-modal .modal-inner-content").mCustomScrollbar({
        theme: "minimal"
    });

    // Recipe List Filter
    $('.choosen-filter-item').on('click', function () {
        $(this).remove();
    });
    $('.explore-main-btn-container .primary-btn').on('click', function () {
        $(this).toggleClass('active-btn');
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

// Set Map
function initMap() {
    if ($('#map').length > 0) {
        function initialize() {
            const myLatlng = new google.maps.LatLng(53.3333, -3.08333);
            const mapOptions = {
                zoom: 13,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };

            const map = new google.maps.Map(document.getElementById('map'), mapOptions);
            // Callout Content
            const contentString = 'Some address here..';
            // Set window width + content
            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 500,
            });

            var pinIcon = {
                url: "/App_Themes/Milk/images/icon-pin-milk-logo@3x.png",
                scaledSize: new google.maps.Size(63, 104)
            };
            // Add Marker
            const marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'image title',
                icon: pinIcon
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

            // Resize Function
            google.maps.event.addDomListener(window, 'resize', function () {
                const center = map.getCenter();
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    }
}

// Share buttons / Copy link
$(document).on("click", ".copyUrl", function () {
    var url = window.location.href;
    var sTemp = "<input id='copyToClipboard' value=\"" + url + "\" />";
    $("body").append(sTemp);
    $("#copyToClipboard").select();
    document.execCommand("copy");
    $("body").remove("#copyToClipboard");
});
