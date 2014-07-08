var G1Bought = 0;

function buyingUpdate() {
	if (money >= 10  && G1Bought == 0) {
		document.getElementById('game1enhancer1').setAttribute('class', 'enhancer');
		document.getElementById('game1enhancer1').setAttribute('onclick', 'G1ChangePlayerSpeed');
		document.getElementById('game1enhancer1').innerHTML="<br><br>5 dollars to increase your speed";
		G1Bought = 1;
		//break;
	};
	if(money > 20) { 
		document.getElementById('game1enhancer2').setAttribute('class', 'enhancer');
		//break;
	};
}

function G1ChangePlayerSpeed() {
	document.getElementById('game1enhancer1').setAttribute('speed', '300');
}