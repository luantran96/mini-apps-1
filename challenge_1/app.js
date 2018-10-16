

var translateTable = {};

translateTable['zero'] = 0;
translateTable['one'] = 1;
translateTable['two'] = 2;

var playerOneMoves = {};
playerOneMoves.id = 1;

var playerTwoMoves = {};
playerTwoMoves.id = 2;

var curMove = 1;
var numMoves = 0;
var maxNumMoves = 8;

var isGameOver = false;
var lastWinner;
var player1,player2;

var score = {};


document.addEventListener("DOMContentLoaded", function() {

player1 = prompt('Player 1 name:');
player2 = prompt('Player 2 name:');

score[player1] = 0;
score[player2] = 0;

var mode = 'normal';


document.getElementById('player1Name').innerHTML = player1 + ' (X) :';
document.getElementById('player2Name').innerHTML = player2 + ' (O) :';

console.log('curMove:',curMove);

});




var updateScore = (playerId) => {
	if (playerId === 'player1') {
	document.getElementById(playerId).innerHTML = score[player1];
	} else if(playerId === 'player2') {
	document.getElementById(playerId).innerHTML = score[player2];
	}
};

var resetGame = () => {

	//console.log(document.getElementsByTagName('th'));

	var tableElements = document.getElementsByTagName('th');

	for (var i = 0; i < tableElements.length; i++) {
		tableElements[i].innerHTML = '';
	}

	isGameOver = false;
	numMoves = 0;
	playerOneMoves = {};
	playerOneMoves.id = 1;
	playerTwoMoves = {};
	playerTwoMoves.id = 2;

	if (lastWinner === 1) {
		curMove = 1;
	} else {
		curMove = 2;
	}
};

var postWinningProcess = (playerId) => {

	lastWinner = playerId;	
	if (playerId === 1) {
		alert(player1 + ' wins!');
		score[player1] += 1 ;
		updateScore('player1');
	} else if(playerId === 2){
		alert(player2 + ' wins!');
		score[player2] += 1 ;
		updateScore('player2');
	}

	isGameOver = true;
};

var verifyWin = (table) => {

	if (table['zerozero'] && table['zeroone'] && table['zerotwo'] || 
		table['onezero'] && table['oneone'] && table['onetwo'] ||
		table['zerozero'] && table['onezero'] && table['twozero'] ||
		table['zeroone'] && table['oneone'] && table['twoone'] ||
		table['zerotwo'] && table['onetwo'] && table['twotwo'] ||
		table['twozero'] && table['twoone'] && table['twotwo'] ||
		table['zerozero'] && table['oneone'] && table['twotwo'] ||
		table['twozero'] && table['oneone'] && table['zerotwo'] ) {

		postWinningProcess(table.id);
		isGameOver = true;
		resetGame();
	}
	
}

function getKeyByValue(value) {
  return Object.keys(translateTable).find(key => translateTable[key] === value);
};

var handleReset = (event) => {
	resetGame();
};

var checkMode = (event) => {
	mode = event.target.id;
	console.log('mode:',mode);
};

var handleClick = (event) => {

	if (!isGameOver && numMoves <= maxNumMoves) {

		var clickedId = event.target.id;
		console.log(clickedId);
		console.log('numMoves:',numMoves);
		if (curMove === 1) {	// Currently Player 1 
			if (playerTwoMoves[clickedId] === undefined && playerOneMoves[clickedId] === undefined) {
			document.getElementById(clickedId).innerHTML = 'X';
			playerOneMoves[clickedId] = true;
			curMove = 2;
			numMoves += 1;
			verifyWin(playerOneMoves);
			}

		} else if (curMove === 2) {		// Currently Player 2 
			if (playerOneMoves[clickedId] === undefined && playerTwoMoves[clickedId] === undefined) {			
			document.getElementById(clickedId).innerHTML = 'O';
			playerTwoMoves[clickedId] = true;
			curMove = 1;
			numMoves += 1;
			verifyWin(playerTwoMoves);
			}

		}
	} 

}

for (var row = 0; row <= 2; row++) {	
	for( var column = 0; column <= 2; column++) {
		document.getElementById(getKeyByValue(row).concat(getKeyByValue(column))).addEventListener('click',handleClick);
	}
}

	document.getElementById('reset').addEventListener('click',resetGame);
	document.getElementById('normal').addEventListener('click',checkMode);
	document.getElementById('hard').addEventListener('click',checkMode);


