	//Creating the money (important)
var money = 0;
window.setInterval(function() {
    money += 1
    document.getElementById("moneyamount").innerHTML=money}, 1000);

	//Setting up some variables for future thins (important)
var state = 0;
var body = document.getElementsByTagName("body")[0];

	//Creating the divs (important)
for (var i = 1; i < 9; i++) {
	eval("var game" + i + "div = document.createElement('div')");
	eval("body.appendChild(game" + i + "div)");
	eval("game" + i + "div.setAttribute('class', 'willbecomegame')");
}


	//Making divs change on hover (aesthetics)
$(document).ready(function(){
   $('.willbecomegame').mouseenter(function() {
		$(this).animate({
           backgroundColor: '#BEBEBE'
       }, "fast");
   });
   $('.willbecomegame').mouseleave(function() {
   		$(this).animate({
   			backgroundColor: '#E8E8E8'
   		});
   });
   $('.game').click(function() {
   		
   })
});
	//Making divs off of money (important)
function appear() {
	switch (money) {
		case 1:
			game1div.setAttribute('class', 'game');
			game1div.setAttribute('onclick', 'game1open()');
			break;
		case 2:
			game2div.setAttribute('class', 'game');
			game2div.setAttribute('onclick', 'game2open()');
			break;
		case 3:
			game3div.setAttribute('class', 'game');
			game3div.setAttribute('onclick', 'game3open()');
			break;
		case 4:
			game4div.setAttribute('class', 'game');
			game4div.setAttribute('onclick', 'game4open()');
			break;
		case 5:
			game5div.setAttribute('class', 'game');
			game5div.setAttribute('onclick', 'game5open()');
			break;
		case 6:
			game6div.setAttribute('class', 'game');
			game6div.setAttribute('onclick', 'game6open()');
			break;
		case 7:
			game7div.setAttribute('class', 'game');
			game7div.setAttribute('onclick', 'game7open()');
			break;
		case 8: 	
			game8div.setAttribute('class', 'game');
			game8div.setAttribute('onclick', 'game8open()');
			break;
	}

}
window.setInterval(function() {
	appear()}, 1000);

	//Game1
function game1open() {
	for (var i = 1; i < 9; i++) {
		eval("game" + i + "div.setAttribute('class', 'willbecomegame')");
	}
}