$('#openCaret').click(function() {
	$("#rightIntro").css('left', '100%')
	$("#openCaret").css('left', '97.5%')
	setTimeout(function() { 
		$("#openCaret").hide(); 
		$("#closeCaret").show()
		$("#openCaret").css('left', '47.5%')
		$("#rightIntro").hide()
	}, 1000)
})

$("#closeCaret").click(function() {
	$("#rightIntro").show()
	setTimeout(function() {
		$("#rightIntro").css('left', '50%')
	}, 10)
	$("#closeCaret").css('left', '47.5%')
	setTimeout(function() { 
		$("#closeCaret").hide(); 
		$("#openCaret").show()
		$("#closeCaret").css('left', '97.5%')
	}, 1000)
})

$(".nav a").click(function() {
	nextCard = $(this).text().toLowerCase() + 'Card'
	if ($('.activeCard')[0].id != nextCard) {
		$('.activeCard').css('top', '100%')
		setTimeout(function() {
			$('.activeCard').removeClass('activeCard')
			$('#' + nextCard).addClass('activeCard')
			$('#' + nextCard).css('top', '8%')
		}, 400)
	}
})