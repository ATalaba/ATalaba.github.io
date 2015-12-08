$(document).ready(function() {
    $(".inputSubmit").on('click', function(e) {
        if (e.preventDefault) {e.preventDefault();}
        else {e.returnValue = False}
        document.getElementById('command').blur()
        addClose(e)})
    $('#command').blur(function() {
        document.getElementById('x').style.visibility = 'visible';})
                .focus(function() {
        remClose()})
    $("#x").click(function() {
        remClose()
        document.getElementById('command').value = '';
        document.getElementById('command').focus();});
});

function addClose(e) {
    $('#command').attr('placeholder', '');
    $('hmtl, body').animate({
        scrollTop: $('.about').offset().top},
        'slow', function() {});
    document.getElementById('yourname').innerHTML = $(".inputCommand").val()
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
}); 

$('.hobbyhover').click(function() {
    $('#' + $(this).attr('id') + 'show').toggle()
    $(this).toggleClass('hobbymargin')
})

$('#all').mouseenter(function() {
    $('#skills li').show(300)
})

$('#web').mouseenter(function() {
    $('#html').show(300);
    $('#js').show(300);
    $('#python').hide(300)
    $('#jq').show(300);
    $('#njs').show(300);
    $('#jav').hide(300);
    $('#exjs').show(300);
    $('#ms').show(300);
    $('#git').hide(300);
    $('#cs').hide(300);
    $('#mdb').show(300);
    $('#oc').hide(300);
})

$('#misc').mouseenter(function() {
    $('#html').hide(300);
    $('#js').hide(300);
    $('#python').show(300)
    $('#jq').hide(300);
    $('#njs').hide(300);
    $('#jav').show(300);
    $('#exjs').hide(300);
    $('#ms').hide(300);
    $('#git').show(300);
    $('#cs').show(300);
    $('#mdb').hide(300);
    $('#oc').show(300);
})
$('#classshow').click(function() {
    $('.clashow').toggleClass('hidec')
    $(this).toggleClass('fa-plus-square')
    $(this).toggleClass('fa-minus-square')
})