

var translateTable = {};

translateTable['zero'] = 0;
translateTable['one'] = 1;
translateTable['two'] = 2;

var playerOneMoves = {};
playerOneMoves.id = 1;

var playerTwoMoves = {};
playerTwoMoves.id = 2;

var curMove = 0;

var isGameOver = false;


var verifyWin = (table) => {

	console.log(table);

	if (table['zerozero'] && table['zeroone'] && table['zerotwo'] || 
		table['onezero'] && table['oneone'] && table['onetwo'] ||
		table['zerozero'] && table['onezero'] && table['twozero'] ||
		table['zeroone'] && table['oneone'] && table['twoone'] ||
		table['zerotwo'] && table['onetwo'] && table['twotwo'] ||
		table['twozero'] && table['twoone'] && table['twotwo'] ||
		table['zerozero'] && table['oneone'] && table['twotwo'] ||
		table['twozero'] && table['oneone'] && table['zerotwo'] ) {

		if (table.id === 1) {
			alert('Player One wins !');
			isGameOver = true;

		} else {
			alert('Player Two wins !');
			isGameOver = true;
		}	
	}
	
}

function getKeyByValue(value) {
  return Object.keys(translateTable).find(key => translateTable[key] === value);
}

var handleClick = (event) => {

	if (!isGameOver) {

		var clickedId = event.target.id;
		console.log(clickedId);

		if (curMove % 2) {
			document.getElementById(clickedId).innerHTML = 'X';
			playerOneMoves[clickedId] = true;
			verifyWin(playerOneMoves);
		} else {
			document.getElementById(clickedId).innerHTML = 'O';
			playerTwoMoves[clickedId] = true;
			verifyWin(playerTwoMoves);
		}
		curMove += 1;
	
	}
}

for (var row = 0; row <= 2; row++) {	
	for( var column = 0; column <= 2; column++) {
		document.getElementById(getKeyByValue(row).concat(getKeyByValue(column))).addEventListener('click',handleClick);
	}
}


