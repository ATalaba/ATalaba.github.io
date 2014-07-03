	//Creating the money (important)
var money = 0;
var state = 0;
window.setInterval(function() {
    if (state == 0) {
    	money += 1
    };
    document.getElementById("moneyamount").innerHTML=money}, 1000);

	//Setting up some variables for future thins (important)
var body = document.getElementsByTagName("body")[0];

	//Creating the divs (important)
for (var i = 1; i < 9; i++) {
	eval("var game" + i + "div = document.createElement('div')");
	eval("body.appendChild(game" + i + "div)");
	eval("game" + i + "div.setAttribute('class', 'willbecomegame')");
}

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

};

window.setInterval(function() {
	appear()}, 1000);

	//Game1
function game1open() {
	state = 1
	$('.game').hide();
	var game1 = document.createElement('div');
	game1.setAttribute('id', 'game1');
	game1.setAttribute('class', 'realgame')
	game1.setAttribute('onclick', 'closegame()');
	body.appendChild(game1);
}

function game2open() {
	state = 1
	$('.game').hide();
	var game2 = document.createElement('div');
	game2.setAttribute('id', 'game2');
	game2.setAttribute('class', 'realgame')
	game2.setAttribute('onclick', 'closegame()');
	body.appendChild(game2);
}

function game3open() {
	state = 1
	$('.game').hide();
	var game3 = document.createElement('div');
	game3.setAttribute('id', 'game3');
	game3.setAttribute('class', 'realgame')
	game3.setAttribute('onclick', 'closegame()');
	body.appendChild(game3);
}

function game4open() {
	state = 1
	$('.game').hide();
	var game4 = document.createElement('div');
	game4.setAttribute('id', 'game4');
	game4.setAttribute('class', 'realgame')
	game4.setAttribute('onclick', 'closegame()');
	body.appendChild(game4);
}

function game5open() {
	state = 1
	$('.game').hide();
	var game1 = document.createElement('div');
	game5.setAttribute('id', 'game5');
	game5.setAttribute('class', 'realgame')
	game5.setAttribute('onclick', 'closegame()');
	body.appendChild(game5);
}

function game6open() {
	state = 1
	$('.game').hide();
	var game1 = document.createElement('div');
	game6.setAttribute('id', 'game6');
	game6.setAttribute('class', 'realgame')
	game6.setAttribute('onclick', 'closegame()');
	body.appendChild(game6);
}

function game7open() {
	state = 1
	$('.game').hide();
	var game7 = document.createElement('div');
	game7.setAttribute('id', 'game7');
	game7.setAttribute('class', 'realgame')
	game7.setAttribute('onclick', 'closegame()');
	body.appendChild(game7);
}

function game8open() {
	state = 1
	$('.game').hide();
	var game8 = document.createElement('div');
	game8.setAttribute('id', 'game8');
	game8.setAttribute('class', 'realgame')
	game8.setAttribute('onclick', 'closegame()');
	body.appendChild(game8);
}

function closegame() {
	$('.realgame').remove();
	$('.game').show();
	state = 0;
}