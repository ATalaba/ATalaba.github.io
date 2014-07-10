	//Creating the money (state is for stopping the money counter during a game) and updating it (important)
gamedivform();
var money = 0;
var state = 0;
window.setInterval(function() {
    if (state == 0) {money += 1}; 
	}, 100);
	//Updating the money shown on the counter (important)
window.setInterval(function() {document.getElementById("moneyamount").innerHTML=money}, 100)

	//Setting up body for future appends (important)
var body = document.getElementsByTagName("body")[0];

function appeardivs(arg) {
	if (willtoalmostgames[arg].getAttribute("class") == "willbecomegame") {
		willtoalmostgames[arg].setAttribute('class', 'almostgame');
		willtoalmostgames[arg].setAttribute('onclick', 'gameify' + (arg + 1) + '()');
		willtoalmostgames[arg].innerHTML="<br><br><br><br>" + money + " <br><br> for the first game</div>";
	};
};

	//Making divs (to buy) off of money (important)
function appear() {
	switch (money) {
		case 2:
			appeardivs(0);
			break;
		case 10:
			appeardivs(1);
			break;
		case 50:
			appeardivs(2);
			break;
		case 100:
			appeardivs(3);
			break;
		case 500:
			appeardivs(4);
			break;
		case 1000:
			appeardivs(5);
			break;
		case 2000:
			appeardivs(6);
			break;
		case 5000:
			appeardivs(7);
			break;
	}
};



	//All gameifys change bought divs into their game divs (importanty)
function gameify1() {
	if (money >= 2) {
		money -= 2;
		willtoalmostgames[0].setAttribute('class', 'game');
		willtoalmostgames[0].setAttribute('onclick', "game1open()");
		willtoalmostgames[0].innerHTML="<br><br>Hit the clouds<br><br><div id='game1enhancer1' speed=50></div><br><div id='game1enhancer2'></div><br><div id='game1enhancer3'></div>";
	}
}

function gameify2() {
	if (money >= 10) {
		money -= 10;
		willtoalmostgames[1].setAttribute('class', 'game');
		willtoalmostgames[1].setAttribute('onclick', 'game2open()');
		willtoalmostgames[1].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game2enhancer' class='enhancer'></div>";
	}
}

function gameify3() {
	if (money >= 50) {
		money -= 50;
		willtoalmostgames[2].setAttribute('class', 'game');
		willtoalmostgames[2].setAttribute('onclick', 'game3open()');
		willtoalmostgames[2].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game3enhancer' class='enhancer'></div>";
	}
}

function gameify4() {
	if (money >= 100) {
		money -= 100;
		willtoalmostgames[3].setAttribute('class', 'game');
		willtoalmostgames[3].setAttribute('onclick', 'game4open()');
		willtoalmostgames[3].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game4enhancer' class='enhancer'></div>";
	}
}

function gameify5() {
	if (money >= 500) {
		money -= 500;
		willtoalmostgames[4].setAttribute('class', 'game');
		willtoalmostgames[4].setAttribute('onclick', 'game5open()');
		willtoalmostgames[4].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game5enhancer' class='enhancer'></div>";
	}
}

function gameify6() {
	if (money >= 1000) {
		money -= 1000;
		willtoalmostgames[5].setAttribute('class', 'game');
		willtoalmostgames[5].setAttribute('onclick', 'game6open()');
		willtoalmostgames[5].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game6enhancer' class='enhancer'></div>";
	}
}

function gameify7() {
	if (money >= 2000) {
		money -= 2000;
		willtoalmostgames[6].setAttribute('class', 'game');
		willtoalmostgames[6].setAttribute('onclick', 'game7open()');
		willtoalmostgames[6].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game7enhancer' class='enhancer'></div>";
	}
}

function gameify8() {
	if (money >= 5000) {
		money -= 5000;
		willtoalmostgames[7].setAttribute('class', 'game');
		willtoalmostgames[7].setAttribute('onclick', 'game8open()');
		willtoalmostgames[7].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game8enhancer' class='enhancer'></div>";
	}
}

	//Updating available divs based off of money available (important)
window.setInterval(function() {
	appear(); buyingUpdate()}, 100);

function closeGamesIThink(arg) {
	state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[arg]);
}

	//Game2
function game2open() {
	closeGamesIThink(1);
}

	//Game3
function game3open() {
	closeGamesIThink(2);
}

	//Game4
function game4open() {
	closeGamesIThink(3);
}

	//Game5
function game5open() {
	closeGamesIThink(4);
}

	//Game6
function game6open() {
	closeGamesIThink(5);
}

	//Game7
function game7open() {
	closeGamesIThink(6);
}

	//Game8
function game8open() {
	closeGamesIThink(7);
}
	
	//Closing games off of clicks
function closegame() {
	$('canvas').remove();
	$('.realgame').remove();
	$('.game').show();
	$('.willbecomegame').show();
	$('.almostgame').show();
	state = 0;
}