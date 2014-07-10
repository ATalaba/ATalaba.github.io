var G1Bought = [5, 20, 50];
var G1BoughtTest = [5, 20, 50];
var G1Values = ['speed', 'cloudnumber', 'cloudvalue'];
var G1Costs = [
	{"5" : "50",
	"50" : "100",
	"100" : "400"},
	{'20' : '150',
	'150' : '300',
	'300' : '500'},
	{'50' : '200',
	'200' : '400',
	'400' : '1000'}
];
var G1Upgrades = [
	{'5' : "100",
	'50' : "200",
	"100" : "300",
	"400" : "600"},
	{'20' : '10',
	'150' : '15',
	'300' : '20',
	'500' : '25'},
	{'50' : '2',
	'200' : '3',
	'400' : '4',
	'1000' : '6'}
];

function buyingUpdate() {
	try {
		for (var k = 0; k < 3; k++) {
			if (money >= G1Bought[k]  && G1Bought[k] == G1BoughtTest[k]) {
			document.getElementById('game1enhancer' + (k + 1)).setAttribute('class', 'enhancer');
			//document.getElementById('game1enhancer' + (k + 1)).setAttribute('onclick', G1Descriptions[k]);
			document.getElementById('game1enhancer' + (k + 1)).innerHTML="<br><br>" + G1Bought[k] + " to increase your speed";
			document.getElementById('game1enhancer' + (k + 1)).setAttribute('onclick', 'G1Change(' + k + ')');
			};
		};
	}
	catch(err) {}
}

function G1Change(arg) {
	money -= G1Bought[arg];
	document.getElementById('game1enhancer' + (arg + 1)).setAttribute(G1Values[arg], G1Upgrades[arg][G1Bought[arg]]);
	G1Bought[arg] = G1Costs[arg][G1Bought[arg]];
	G1BoughtTest[arg] = G1Bought[arg];
	console.log(G1BoughtTest[arg] + " Test");
	console.log(G1Bought[arg]);
	document.getElementById('game1enhancer' + (arg + 1)).setAttribute('onclick', '');
	document.getElementById('game1enhancer' + (arg + 1)).innerHTML=""
}