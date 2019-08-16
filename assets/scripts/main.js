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
        var $this = $('.header-search');
        if ($this.is(':hidden')) {
            $this.slideDown();
        } else {
            $this.slideUp();
        }
    });
});