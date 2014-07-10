var G1Bought = 5;
var G1BoughtTest = 5;
var G1BoughtArray = {
	"5" : "50",
	"50" : "100",
	"100" : "500"
};
var G1Speed = {
	'5' : "100",
	'50' : "200",
	"100" : "300",
	"500" : "600"
};

function buyingUpdate() {
	try {
	if (money >= G1Bought  && G1Bought == G1BoughtTest) {
		document.getElementById('game1enhancer1').setAttribute('class', 'enhancer');
		document.getElementById('game1enhancer1').setAttribute('onclick', 'G1ChangePlayerSpeed()');
		document.getElementById('game1enhancer1').innerHTML="<br><br>" + G1Bought + " to increase your speed";
		//break;
	};
	if(money > 20) { 
		document.getElementById('game1enhancer2').setAttribute('class', 'enhancer');
		//break;
	};
	if (money > 30) {
		document.getElementById('game2enhancer1')
	}
	}
	catch(err) {}
}

function G1ChangePlayerSpeed(arg) {
	money -= G1Bought;
	document.getElementById('game1enhancer1').setAttribute('speed', G1Speed[G1Bought]);
	G1Bought = G1BoughtArray[G1Bought];
	G1BoughtTest = G1Bought;
	console.log(G1BoughtTest + " Test");
	console.log(G1Bought);
	document.getElementById('game1enhancer1').setAttribute('onclick', '');
	document.getElementById('game1enhancer1').innerHTML="";
}