$(document).ready(function () {
    // to do

});

$('li h2[data-type="vitamin"]').css('background', '#00ff39')
$('li h2[data-type="mineralwater"]').css('background', '#1648e9');
$('li h2[data-type="proteinbar"]').css('background', '#ce2e2e');
$('li').css({
    "cursor": "pointer"
});

$('.navbar a[href*="#"]').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var x = $('#history').clone().prop({'id' : 'history-clone'})
$('#history').after(x)
   x[0].innerText = 'Hello world'
   $(x).text('I love football')
   $(x).css('background', '#9e9e9e')
   $(x).css('font-size', '200px')
   $(x).css('bold')
   $(x).css('color', '#1648e9')


