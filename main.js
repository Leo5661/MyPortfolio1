$(document).ready(function () {
    $('.menu-button').on('click', function(){
        $(this).toggleClass('open')
        $('.top-nav').toggleClass('open')
    });
});