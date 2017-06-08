$(document).ready(function(){
	var currentPlayer = "X";
	var moves = [0,1,2,3,4,5,6,7,8];
	var turns = 0;
	function switchPlayer(thePlayer){
		if(currentPlayer === "X"){
			currentPlayer = "O";
		}else{
			currentPlayer = "X";
		}
	}
	function checkWinner(){
		if(moves[0] === currentPlayer && moves[1] === currentPlayer && 
		   moves[2] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if(moves[3] === currentPlayer && moves[4] === currentPlayer && 
		   moves[5] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if(moves[6] === currentPlayer && moves[7] === currentPlayer && 
		   moves[8] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if(moves[0] === currentPlayer && moves[3] === currentPlayer && 
		   moves[6] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if(moves[1] === currentPlayer && moves[4] === currentPlayer && 
		   moves[7] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if(moves[2] === currentPlayer && moves[5] === currentPlayer && 
		   moves[8] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if(moves[0] === currentPlayer && moves[4] === currentPlayer && 
		   moves[8] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if(moves[2] === currentPlayer && moves[4] === currentPlayer && 
		   moves[6] === currentPlayer){
			alert("Player " + currentPlayer + " won!");
			resetGame();
		}else if (turns === 9){
			alert("It's a tie!");
			resetGame();
		}else{
			return false;
		}
	}
	function resetGame(){
		currentPlayer = "X";
		moves = [0,1,2,3,4,5,6,7,8];
		turns = 0;
		$(".X").removeClass("X");
		$(".O").removeClass("O");
	}
	$(".square").click(function(){
		var theIndex = $(this).data("index");
		if($(this).hasClass("X") === false || 
			$(this).hasClass("O") === false){
			$(this).addClass(currentPlayer);
			moves[theIndex] = currentPlayer;
			turns++;
			console.log(moves);
			console.log("turns: " + turns);
			//console.log(theIndex);	
			checkWinner();
			switchPlayer(currentPlayer);
		}
	});
	$("#reset").click(function(){
		resetGame();
	});
});