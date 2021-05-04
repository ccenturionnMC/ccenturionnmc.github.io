$(document).ready(function () {
    $(window).scroll(function () {
        var light_pos = $('#white_div').offset().top;
        var light_height = $('#white_div').height();
        var menu_pos = $('.navbar').offset().top;
        var scroll = $(window).scrollTop();

        if (menu_pos > light_pos) {
            $('.navbar').addClass('nav_dark');
            $('.navbar').removeClass('nav_light');
        }
        else {
            $('.navbar').removeClass('nav_dark');
            $('.navbar').addClass('nav_light');
        }

    })
})