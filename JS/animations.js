	//Creating the money (state is for stopping the money counter during a game) and updating it (important)
gamedivform();
var money = 0;
var state = 0;
var moneystate = [2, 10, 50, 100, 500, 1000, 2000, 5000];
var G1Specials = [['speed', 'cloudnumber', 'cloudvalue'], [], [], [], [], [], [], []];
var G1SpecialValues = [[50, 6, 1], [], [], [], [], [], [], []]
window.setInterval(function() {
    if (state == 0) {money += 1}; 
	}, 100);
	//Updating the money shown on the counter (important)
window.setInterval(function() {document.getElementById("moneyamount").innerHTML=money}, 100);

	//Setting up body for future appends (important)
var body = document.getElementsByTagName("body")[0];

function appeardivs(arg) {
	if (willtoalmostgames[arg].getAttribute("class") == "willbecomegame") {
		willtoalmostgames[arg].setAttribute('class', 'almostgame');
		willtoalmostgames[arg].setAttribute('onclick', 'gameify(' + arg + ')');
		willtoalmostgames[arg].innerHTML="<br><br><br><br>" + money + " <br><br> for the first game</div>";
	};
};

	//Making divs (to buy) off of money (important)
function appear() {
	for (var a = 0; a < 8; a++) {
		switch (money) {
			case moneystate[a]:
				appeardivs(a);
				break;
		};
	};
};

function gameify(arg) {
	if (money >= moneystate[arg]) {
		money -= moneystate[arg];
		willtoalmostgames[arg].setAttribute('class', 'game');
		willtoalmostgames[arg].setAttribute('onclick', "game" + (arg + 1) + "open()");
		willtoalmostgames[arg].innerHTML="<br><br>Hit the clouds<br><br><div id='game" + (arg + 1) + "enhancer1'></div><br><div id='game" + (arg + 1) + "enhancer2'></div><br><div id='game" + (arg + 1) + "enhancer3'></div>";
		document.getElementById('game' + (arg + 1) + 'enhancer1').setAttribute(G1Specials[arg][0], G1SpecialValues[arg][0])
		document.getElementById('game' + (arg + 1) + 'enhancer2').setAttribute(G1Specials[arg][1], G1SpecialValues[arg][1])
		document.getElementById('game' + (arg + 1) + 'enhancer3').setAttribute(G1Specials[arg][2], G1SpecialValues[arg][2])
	};
};

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
	
	//Closing games off of clicks
function closegame() {
	$('canvas').remove();
	$('.realgame').remove();
	$('.game').show();
	$('.willbecomegame').show();
	$('.almostgame').show();
	state = 0;
}