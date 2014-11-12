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

/*$('.hobbyhover').hover(
    function() {
        $('#' + $(this).attr('id') + 'show').stop(true, false).show(200)
        $(this).css('margin-bottom', '5%')}
    , function() {
        $('#' + $(this).attr('id') + 'show').stop(true, false).hide(200)
        $(this).css('margin-bottom', '15%')
});*/
$('.hobbyhover').click(function() {
    $('#' + $(this).attr('id') + 'show').toggle()
    $(this).toggleClass('hobbymargin')
})

$('#all').mouseenter(function() {
    $('li').show()
})

$('#web').mouseenter(function() {
    $('#html').show();
    $('#js').show();
    $('#python').hide()
    $('#jq').show();
    $('#as').hide();
    $('#exjs').show();
    $('#sass').show();
    $('#git').hide();
    $('#sio').show();
    $('#mdb').show();
})

$('#misc').mouseenter(function() {
    $('#html').hide();
    $('#js').hide();
    $('#python').show()
    $('#jq').hide();
    $('#as').show();
    $('#exjs').hide();
    $('#sass').hide();
    $('#git').show();
    $('#sio').hide();
    $('#mdb').hide();
})