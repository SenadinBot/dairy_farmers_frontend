$(document).ready(function () {
    // Video Modal
    $('.video-modal').on('hidden.bs.modal', () => {
        $('.video-modal iframe').attr('src', $('.video-modal iframe').attr('src'));
    });
});