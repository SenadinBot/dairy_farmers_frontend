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
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    // Story nav preview play on hover
    $('.farmers-nav').hover(function () {
        $(this).find('.story__nav-thumbnail').addClass('hidden');
        $(this).find('.story__nav-video').get(0).play();
    });

    $('.farmers-nav').mouseleave(function () {
        let navVideo = $(this).find('.story__nav-video').get(0);
        navVideo.pause();
        navVideo.currentTime = 0;
        $(this).find('.story__nav-thumbnail').removeClass('hidden');
    });

    // Story nav go to slide
    $('.nav-video').on('click', function () {
        $('.nav-video.active').removeClass('active');
        let slide = $(this).data('index');
        $('.farmers-carousel').slick('slickGoTo', slide);
        $(this).addClass('active');
    });

    $('.farmers-slide').change(function () {
        console.log("something", $('.farmers-slide').data('slick-index'));
    });

    // Change active slide on story nav if user swipes
    $('.farmers-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let mySlideNumber = nextSlide;
        $('.nav-video.active').removeClass('active');
        $('.nav-video').eq(mySlideNumber).addClass('active');
    });

    // If window width is 768px or less, activate slick
    if (matchMedia) {
        const windowWidth = window.matchMedia("(max-width: 767px)");
        windowWidth.addListener(WidthChange);
        WidthChange(windowWidth);
    }

    // media query change
    function WidthChange(windowWidth) {
        if (windowWidth.matches) {
            // window width is at least 769px
            $('.farmers-carousel-nav').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true,
            });
        } else {
            // window width is less than 769px
        }
    }

    // play and pause story videos
    $('*[id*="story-play-js"]').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $('.story__video-container').addClass('active');
            $('.nav').addClass('hide');
            $('.farmers-carousel').addClass('active-video');
        })
    });

    $('*[id*="story-pause-js"]').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $('.story__video-container').removeClass('active');
            $('.nav').removeClass('hide');
            $('.farmers-carousel').removeClass('active-video');
        })
    });



    // Our Milk Carousel
    var $ourMilkCarousel = $(".our-milk-carousel");
    var ourMilkSSlider;
    if ($(window).width() > 992) {
        $('.our-milk-carousel').on('init', function() {
            $(this).css('margin-left', '-14.3%');
        }); 
        $(".ourMilkRange").on("input change", function () {
            $('.our-milk-carousel').css('margin-left', '22.8%');
            var previousDiv = $(".our-milk-slide.active");
            var dataValue = parseInt(($(this).val() / 20)) * 20;
            $(".our-milk-slide").removeClass("active");
            var activeDiv = $(".our-milk-slide[data-value='" + dataValue + "']");
            activeDiv.addClass("active");
            let width = $('.our-milk-carousel').width() - $('.our-milk-carousel-container').width() + (viewwidth * 0.08);
            let value = $(this).val() * 0.01;
            let slide = width * value;
            $('.our-milk-carousel-container').scrollLeft(slide);
        });
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
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
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
        $(this).addClass('animated fadeOutLeft')
        var clickThis = $(this);
        setTimeout(function () {
            clickThis.remove();
        }, 500);
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

//print
$('.custom-link').on('click', function () {
    var printContents = document.getElementById('forPrint').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
});


// YOUTUBE API
// https://developers.google.com/youtube/iframe_api_reference
// global variable for the player
let player;

// Desktop/Tablet Story Videos -- Need a variable for each video
let storyPlayer0;
let storyPlayer1;
let storyPlayer2;
let storyPlayer3;
let storyPlayer4;


// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('hero-video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });

    storyPlayer0 = new YT.Player('story-video0', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });

    storyPlayer1 = new YT.Player('story-video1', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });

    storyPlayer2 = new YT.Player('story-video2', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });

    storyPlayer3 = new YT.Player('story-video3', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });

    storyPlayer4 = new YT.Player('story-video4', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    // story - video 1
    // Desktop Play
    let storyPlayButton0 = document.getElementById("story-play-js0");
    storyPlayButton0.addEventListener("click", function () {
        storyPlayer0.playVideo()
    });

    let storyPauseButton0 = document.getElementById("story-pause-js0");
    storyPauseButton0.addEventListener("click", function () {
        storyPlayer0.pauseVideo()
    });

    // story - video 2
    // Desktop play
    let storyPlayButton1 = document.getElementById("story-play-js1");
    storyPlayButton1.addEventListener("click", function () {
        storyPlayer1.playVideo()
    });

    let storyPauseButton1 = document.getElementById("story-pause-js1");
    storyPauseButton1.addEventListener("click", function () {
        storyPlayer1.pauseVideo()
    });

    // story - video 3
    // Desktop play
    let storyPlayButton2 = document.getElementById("story-play-js2");
    storyPlayButton2.addEventListener("click", function () {
        storyPlayer2.playVideo()
    });

    let storyPauseButton2 = document.getElementById("story-pause-js2");
    storyPauseButton2.addEventListener("click", function () {
        storyPlayer2.pauseVideo()
    });

    // story - video 4
    // Desktop play
    let storyPlayButton3 = document.getElementById("story-play-js3");
    storyPlayButton3.addEventListener("click", function () {
        storyPlayer3.playVideo()
    });

    let storyPauseButton3 = document.getElementById("story-pause-js3");
    storyPauseButton3.addEventListener("click", function () {
        storyPlayer3.pauseVideo()
    });

    // story - video 5
    // Desktop play
    let storyPlayButton4 = document.getElementById("story-play-js4");
    storyPlayButton4.addEventListener("click", function () {
        storyPlayer4.playVideo()
    });

    let storyPauseButton4 = document.getElementById("story-pause-js4");
    storyPauseButton4.addEventListener("click", function () {
        storyPlayer4.pauseVideo()
    });

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);