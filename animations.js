	//Creating the money (state is for stopping the money counter during a game) and updating it (important)
gamedivform();
var money = 0;
var state = 0;
window.setInterval(function() {
    if (state == 0) {money += 1}; 
	}, 1000);
	//Updating the money shown on the counter (important)
window.setInterval(function() {document.getElementById("moneyamount").innerHTML=money}, 100)

	//Setting up body for future appends (important)
var body = document.getElementsByTagName("body")[0];

	//Making divs (to buy) off of money (important)
function appear() {
	switch (money) {
		case 2:
			if (willtoalmostgames[0].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[0].setAttribute('class', 'almostgame');
				willtoalmostgames[0].setAttribute('onclick', 'gameify1()');
				willtoalmostgames[0].innerHTML="<br><br><br><br>2 dollars<br> for the first game</div>";
			};
			break;
		case 10:
			if (willtoalmostgames[1].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[1].setAttribute('class', 'almostgame');
				willtoalmostgames[1].setAttribute('onclick', 'gameify2()');
				willtoalmostgames[1].innerHTML="<br><br><br><br>10 dollars<br> for the first game</div>";
			};
			break;
		case 50:
			if (willtoalmostgames[2].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[2].setAttribute('class', 'almostgame');
				willtoalmostgames[2].setAttribute('onclick', 'gameify3()');
				willtoalmostgames[2].innerHTML="<br><br><br><br>50 dollars<br> for the first game</div>";
			};
			break;
		case 100:
			if (willtoalmostgames[3].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[3].setAttribute('class', 'almostgame');
				willtoalmostgames[3].setAttribute('onclick', 'gameify4()');
				willtoalmostgames[3].innerHTML="<br><br><br><br>100 dollars<br> for the first game</div>";
			};
			break;
		case 500:
			if (willtoalmostgames[4].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[4].setAttribute('class', 'almostgame');
				willtoalmostgames[4].setAttribute('onclick', 'gameify5()');
				willtoalmostgames[4].innerHTML="<br><br><br><br>500 dollars<br> for the first game</div>";
			};
			break;
		case 1000:
			if (willtoalmostgames[5].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[5].setAttribute('class', 'almostgame');
				willtoalmostgames[5].setAttribute('onclick', 'gameify6()');
				willtoalmostgames[5].innerHTML="<br><br><br><br>1000 dollars<br> for the first game</div>";
			};
			break;
		case 2000:
			if (willtoalmostgames[6].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[6].setAttribute('class', 'almostgame');
				willtoalmostgames[6].setAttribute('onclick', 'gameify7()');
				willtoalmostgames[6].innerHTML="<br><br><br><br>2000 dollars<br> for the first game</div>";
			};
			break;
		case 5000:
			if (willtoalmostgames[7].getAttribute("class") == "willbecomegame") {
				willtoalmostgames[7].setAttribute('class', 'almostgame');
				willtoalmostgames[7].setAttribute('onclick', 'gameify8()');
				willtoalmostgames[7].innerHTML="<br><br><br><br>5000 dollars<br> for the first game</div>";
			};
			break;
	}
};

	//All gameifys change bought divs into their game divs (importanty)
function gameify1() {
	if (money >= 2) {
		money -= 2;
		willtoalmostgames[0].setAttribute('class', 'game');
		willtoalmostgames[0].setAttribute('onclick', "game1open()");
		willtoalmostgames[0].innerHTML="<br><br><br><br>Hit the clouds<br><br><div id='game1enhancer' class='enhancer'></div>";
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
	appear()}, 100);

	//Game1
function game1open() {
		//---------- Uncommenting states will cause auto money gain to stop during games ----------
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[0]);
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
	containter.appendChild(realgames[1]);
}

	//Game3
function game3open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[2]);
}

	//Game4
function game4open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[3]);
}

	//Game5
function game5open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[4]);
}

	//Game6
function game6open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[5]);
}

	//Game7
function game7open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[6]);
}

	//Game8
function game8open() {
	//state = 1
	$('.game').hide();
	$('.willbecomegame').hide();
	$('.almostgame').hide();
	body.appendChild(realgames[7]);
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