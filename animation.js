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
    $('#python').show(300)
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