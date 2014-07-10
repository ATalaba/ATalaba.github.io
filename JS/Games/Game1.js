	//Game1
function game1open() {
		//---------- Commenting states will cause auto money gain during games ----------
	if (!($(".enhancer:hover").length)) {
	state = 1
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
		speed: document.getElementById('game1enhancer1').getAttribute('speed'),
		x: 100,
		y: 300,
	};
		//Initiate the clouds (same warning as above)
	var cloud = [];
	j = 6;
	for (var i = 1; i < j; i++) {
		cloud[i] = {
			speed: 100 + (i * 50) + Math.random() * i * 200,
			x: 750 * i,
			y: Math.random() * 400,
		};
	};
		//Keyboard Controls (lol i have ABSOLUTELY no idea what this means/does)
	var keysDown = {};

	addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true;
	}, false);
	addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode];
	}, false);
		//Updates game objects or whatever
	var update = function (modifier) {
		if (38 /*why 38 why this code */ in keysDown && player.y >= 2) { //Apparently if the key is up iunno
			player.y -= player.speed * modifier;
		};
		if (40 /*Maybe these represent the keys somehow */ in keysDown && player.y <= 473) { //Player holding down
			player.y += player.speed * modifier;
		};
		if (37 in keysDown && player.x >= 2) { //Player holding left
			player.x -= player.speed * modifier;
		};
		if (39 in keysDown && player.x <= 573) { //Player holding right
			player.x += player.speed * modifier;
		};
		for (var i = 1; i < j; i++) {
			cloud[i].x -= cloud[i].speed * modifier;
			if (cloud[i].x <= -287) {
				cloud.splice(i, 1);
				j -= 1;
				break;
			};
			if (player.x <= (cloud[i].x + 287)
				&& cloud[i].x <= (player.x + 25)
				&& player.y <= (cloud[i].y + 159)
				&& cloud[i].y <= (player.y + 25)) {
					money += 1;
					cloud.splice(i, 1);
					j -= 1;
					break;
			};
		};
		if (cloud.length === 1) {
			closegame();
		}; 
	};
		//Create all the images
	var render = function () {
		if (bgReady) {
			ctx.drawImage(bgImage, 0, 0);
		};
		if (cloudReady) {
			for (var i = 1; i < j; i++) {
				ctx.drawImage(cloudImage, cloud[i].x, cloud[i].y);
			};
		};
		if (playerReady) {
			ctx.drawImage(playerImage, player.x, player.y);
		};

	};
		//Updating rendering and game play
	var main = function () {
		var now = Date.now();
		var delta = now - then;

		render();
		update(delta/1000);
		
		then = now;
		
		var w = window;
		requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
		requestAnimationFrame(main);
	}
		//Yeah I have no idea what this actually does
	var then = Date.now();
		//Running the game
	main();
	};
}