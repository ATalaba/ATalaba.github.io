$(document).ready(function() {
    $(".inputSubmit").click(function(e) {
        e.preventDefault();
        document.getElementById('command').blur()
        addClose()})
    $('#command').blur(function() {
        addClose()})
                .focus(function() {
        remClose()})
    $("#x").click(function() {
        remClose()
        document.getElementById('command').value = '';
        document.getElementById('command').focus();});
});

function addClose() {
    document.getElementById('x').style.visibility = 'visible';
    $('#command').attr('placeholder', '');
}

function remClose() {
    document.getElementById('x').style.visibility = 'hidden';
}

function header() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 10,
            header = document.getElementById("head");
        if (distanceY > shrinkOn) {
            header.style.backgroundColor = "rgb(88, 185, 231)";
            header.style.opacity = "0.9";
        } else {
            if (header.style.backgroundColor == "rgb(88, 185, 231)") {
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