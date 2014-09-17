function header() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 10,
            header = document.getElementById("head");
        if (distanceY > shrinkOn) {
            header.style.backgroundColor = "rgb(0, 19, 178)";
            header.style.opacity = "0.9";
        } else {
            if (header.style.backgroundColor == "rgb(0, 19, 178)") {
                header.style.backgroundColor = '';
                header.style.opacity= '1';
            }
        }
    });
}
window.onload = header();

$('.navli, .name').click(function(e) {
    $('hmtl, body').animate({
        scrollTop: $('.' + $(this).attr('id')).offset().top},
        'slow', function() {});
    console.log("." + $(this).attr('id') + "  " + $('.' + $(this).attr('id')).offset().top)
});