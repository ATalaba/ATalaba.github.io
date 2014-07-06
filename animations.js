	//Creating the money (state is for stopping the money counter during a game) and updating it (important)
var money = 0;
var state = 0;
window.setInterval(function() {
    if (state == 0) {money += 1}; 
	}, 1000);
	//Updating the money shown on the counter (important)
window.setInterval(function() {document.getElementById("moneyamount").innerHTML=money}, 100)

	//Setting up body for future appends (important)
var body = document.getElementsByTagName("body")[0];

	//Creating the divs (boxes and actual games) (important)
for (var i = 1; i < 9; i++) {
	eval("var game" + i + "div = document.createElement('div')");
	eval("var game" + i + "enhancer = document.createElement('div')");
	eval("body.appendChild(game" + i + "div)");
	eval("game" + i + "div.appendChild(game" + i + "enhancer)");
	eval("game" + i + "enhancer.setAttribute('class', 'enhancer')");
	eval("game" + i + "div.setAttribute('class', 'willbecomegame')");
	eval("var game" + i + " = document.createElement('div')");
	eval("game" + i + ".setAttribute('id', 'game" + i + "')");
	eval("game" + i + ".setAttribute('class', 'realgame')");
	eval("game" + i + ".setAttribute('onclick', 'closegame()')");
}

	//Making divs (to buy) off of money (important)
function appear() {
	switch (money) {
		case 2:
			if (game1div.getAttribute('class') == "willbecomegame") {
				game1div.setAttribute('class', 'almostgame');
				game1div.setAttribute('onclick', 'gameify1()');
				game1div.innerHTML="<br><br><br><br>2 dollars<br> for the first game"
			};
			break;
		case 10:
			if (game2div.getAttribute('class') == "willbecomegame") {
				game2div.setAttribute('class', 'almostgame');
				game2div.setAttribute('onclick', 'gameify2()');
				game2div.innerHTML="<br><br><br><br>10 dollars<br> for the second game"
			};
			break;
		case 50:
			if (game3div.getAttribute('class') == 'willbecomegame') {
				game3div.setAttribute('class', 'almostgame');
				game3div.setAttribute('onclick', 'gameify3()');
				game3div.innerHTML="<br><br><br><br>50 dollars<br> for the third game"
			};
			break;
		case 100:
			if (game4div.getAttribute('class') == 'willbecomegame') {
				game4div.setAttribute('class', 'almostgame');
				game4div.setAttribute('onclick', 'gameify4()');
				game4div.innerHTML="<br><br><br><br>100 dollars<br> for the fourth game"
			};
			break;
		case 500:
			if (game5div.getAttribute('class') == 'willbecomegame') {
				game5div.setAttribute('class', 'almostgame');
				game5div.setAttribute('onclick', 'gameify5()');
				game5div.innerHTML="<br><br><br><br>500 dollars<br> for the fifth game"
			};
			break;
		case 1000:
			if (game6div.getAttribute('class') == 'willbecomegame') {
				game6div.setAttribute('class', 'almostgame');
				game6div.setAttribute('onclick', 'gameify6()');
				game6div.innerHTML="<br><br><br><br>1000 dollars<br> for the sixth game"
			};
			break;
		case 2000:
			if (game7div.getAttribute('class') == 'willbecomegame') {
				game7div.setAttribute('class', 'almostgame');
				game7div.setAttribute('onclick', 'gameify7()');
				game7div.innerHTML="<br><br><br><br>2000 dollars<br> for the seventh game"
			};
			break;
		case 5000:
			if (game8div.getAttribute('class') == 'willbecomegame') {
				game8div.setAttribute('class', 'almostgame');
				game8div.setAttribute('onclick', 'gameify8()');
				game8div.innerHTML="<br><br><br><br>5000 dollars<br> for the eighth game"
			};
			break;
	}
};

	//All gameifys change bought divs into their game divs (importanty)
function gameify1() {
	if (money >= 2) {
		money -= 2;
		game1div.setAttribute('class', 'game');
		game1div.setAttribute('onclick', 'game1open()');
		game1div.innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game1enhancer' class='enhancer'></div>";
	}
}

function gameify2() {
	if (money >= 10) {
		money -= 10;
		game2div.setAttribute('class', 'game');
		game2div.setAttribute('onclick', 'game2open()');
		game2div.innerHTML="<br><br><br><br>Hit the clouds";
	}
}

function gameify3() {
	if (money >= 50) {
		money -= 50;
		game3div.setAttribute('class', 'game');
		game3div.setAttribute('onclick', 'game3open()');
		game3div.innerHTML="<br><br><br><br>Hit the clouds";
	}
}

function gameify4() {
	if (money >= 100) {
		money -= 100;
		game4div.setAttribute('class', 'game');
		game4div.setAttribute('onclick', 'game4open()');
		game4div.innerHTML="<br><br><br><br>Hit the clouds";
	}
}

function gameify5() {
	if (money >= 500) {
		money -= 500;
		game5div.setAttribute('class', 'game');
		game5div.setAttribute('onclick', 'game5open()');
		game5div.innerHTML="<br><br><br><br>Hit the clouds";
	}
}

function gameify6() {
	if (money >= 1000) {
		money -= 1000;
		game6div.setAttribute('class', 'game');
		game6div.setAttribute('onclick', 'game6open()');
		game6div.innerHTML="<br><br><br><br>Hit the clouds";
	}
}

function gameify7() {
	if (money >= 2000) {
		money -= 2000;
		game7div.setAttribute('class', 'game');
		game7div.setAttribute('onclick', 'game7open()');
		game7div.innerHTML="<br><br><br><br>Hit the clouds";
	}
}

function gameify8() {
	if (money >= 5000) {
		money -= 5000;
		game8div.setAttribute('class', 'game');
		game8div.setAttribute('onclick', 'game8open()');
		game8div.innerHTML="<br><br><br><br>Hit the clouds";
	}
}

	//Updating available divs based off of money available (important)
window.setInterval(function() {
	appear()}, 100);

	//Game1
function game1open() {
		//---------- Uncommenting states will cause auto money gain to stop during games ----------
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game1);
		//Creating the canvas inside game1
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 500;
	game1.appendChild(canvas);
		//Background image (tbh I'm not entire sure what the rest of this code means, I sort of just 
		// copied it from http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/)
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
	bgImage.src = "images/G1Sky.png";
		//Player circle image
	var playerReady = false;
	var playerImage = new Image();
	playerImage.onload = function () {
		playerReady = true;
	};
	playerImage.src = "images/G1Player.png";
	var cloudReady = false;
	var cloudImage = new Image();
	cloudImage.onload = function() {
		cloudReady = true;
	};
	cloudImage.src = "images/G1Cloud.png";
		//Initiate the player  (I'm not sure I know what the word initiate means)
	var player = {
		speed: 256,
		x: 100,
		y: 300,
	};
		//Initiate the clouds (same warning as above)
	var cloud = {
		speed: 100,
		x: 0,
		y: 0,
	}
		//Keyboard Controls (lol i have ABSOLUTELY no idea what this means/does)
	var keysDown = {};

	addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true;
	}, false);
	addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode];
	}, false);
		//Resets the game (which is unnecessary but I don't know how to do it without it so there)
	var reset = function () {

	}
		//Updates game objects or whatever
	var update = function (modifier) {
		if (38 /*why 38 why this code */ in keysDown) { //Apparently if the key is up iunno
			player.y -= player.speed * modifier;
		};
		if (40 /*Maybe these represent the keys somehow */ in keysDown) { //Player holding down
			player.y += player.speed * modifier;
		};
		if (37 in keysDown) { //Player holding left
			player.x -= player.speed * modifier;
		};
		if (39 in keysDown) { //Player holding down
			player.x += player.speed * modifier;
		};
		//for (var i = 1; i < 6; i++) {
		//	cloud[i].x -= cloud.speed * modifier;
		//};
	}
		//Create all the images
	var render = function () {
		if (bgReady) {
			ctx.drawImage(bgImage, 0, 0);
		};
		if (playerReady) {
			ctx.drawImage(playerImage, player.x, player.y);
		};
		if (cloudReady) {
			for (var i = 1; i < 6; i++) {
				cloud.x = 100 * i;
				cloud.y = Math.random() * 300;
				ctx.drawImage(cloudImage, cloud.x, cloud.y);
			};
		};
	};
		//Updating rendering and game play
	var main = function () {
		var now = Date.now();
		var delta = now - then;
		update(delta/1000);
		render();
		then = now;
		requestAnimationFrame(main);
	}
		//Yeah I have no idea what this actually does
	var then = Date.now();
		//Running the game
	main();
}

	//Game2
function game2open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game2);
}

	//Game3
function game3open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game3);
}

	//Game4
function game4open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game4);
}

	//Game5
function game5open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game5);
}

	//Game6
function game6open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game6);
}

	//Game7
function game7open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game7);
}

	//Game8
function game8open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(game8);
}
	
	//Closing games off of clicks
function closegame() {
	$('canvas').remove();
	$('.realgame').remove();
	$('.game').show();
	$('.willbecomegame').show();
	$('.almostgame').show();
	//state = 0;
}