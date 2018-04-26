$(document).ready(function() {
    $('.scratch').hide();
    $('.projects-button').click(function() {
        $(this).next().slideToggle(400);
        $(this).toggleClass('active');
    });
});
