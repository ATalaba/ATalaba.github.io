var G1Bought = [[5, 20, 50], [50, 100, 200], [], [], [], [], [], []];
var G1BoughtTest = [[5, 20, 50], [50, 100, 200], [], [], [], [], [], []];
var G1Values = [['speed', 'cloudnumber', 'cloudvalue'], [], [], [], [], [], [], []];
var G1Descriptions = [['increase your speed', 'increase the amount of clouds', 'increase the values of the clouds'], [], [], [], [], [], []]
var G1Costs = [
	[{"5" : "50", "50" : "100", "100" : "400"},
	{'20' : '150', '150' : '300', '300' : '500'},
	{'50' : '200', '200' : '400', '400' : '1000'}],
	[{},
	{},
	{}],
	[{},
	{},
	{}],
	[{},
	{},
	{}],
	[{"5" : "50", "50" : "100", "100" : "400"},
	{'20' : '150', '150' : '300', '300' : '500'},
	{'50' : '200', '200' : '400', '400' : '1000'}],
	[{},
	{},
	{}],
	[{},
	{},
	{}],
	[{},
	{},
	{}]
];
var G1Upgrades = [
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}],
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}],
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}],
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}],
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}],
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}],
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}],
	[{'5' : "100", '50' : "200", "100" : "300", "400" : "600"},
	{'20' : '10', '150' : '15', '300' : '20', '500' : '25'},
	{'50' : '2', '200' : '3', '400' : '4', '1000' : '6'}]
];

function buyingUpdate() {
	try {
		for (var m = 0; m < 8; m++) {
			for (var k = 0; k < 3; k++) {
				if (money >= G1Bought[m][k]  && G1Bought[m][k] == G1BoughtTest[m][k]) {
				document.getElementById('game' + (m + 1) + 'enhancer' + (k + 1)).setAttribute('class', 'enhancer');
				document.getElementById('game' + (m + 1) + 'enhancer' + (k + 1)).innerHTML="<br><br>" + G1Bought[m][k] + " to " + G1Descriptions[m][k];
				document.getElementById('game' + (m + 1) + 'enhancer' + (k + 1)).setAttribute('onclick', 'G1Change(' + m + ', ' + k + ')');
				};
			};
		};
	}
	catch(err) {}
}

function G1Change(argm, argk) {
	if (money >= G1BoughtTest[argm][argk]) {
		money -= G1Bought[argm][argk];
		document.getElementById('game' + (argm + 1) + 'enhancer' + (argk + 1)).setAttribute(G1Values[argm][argk], G1Upgrades[argm][argk][G1Bought[argm][argk]]);
		G1Bought[argm][argk] = G1Costs[argm][argk][G1Bought[argm][argk]];
		G1BoughtTest[argm][argk] = G1Bought[argm][argk];
		console.log(G1BoughtTest[argm][argk] + " Test");
		console.log(G1Bought[argm][argk]);
		document.getElementById('game' + (argm + 1) +'enhancer' + (argk + 1)).setAttribute('onclick', '');
		document.getElementById('game' + (argm + 1) + 'enhancer' + (argk + 1)).innerHTML=""
	};
}