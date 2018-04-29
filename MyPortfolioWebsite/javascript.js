//JQuery code for initiating a click event
$(document).ready(function () {
    //line 4 and 5 hides the elements with their corresponding classnames
    $('.scratch').hide();
    $('.caesarCipher').hide();
    /**The following code shows the hidden content when the declared button is clicked*/
    $('.projects-button').click(function() {
        $(this).nextAll().slideToggle(400);
        $(this).toggleClass('active');
    });
});
