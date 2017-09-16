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
	function declareWinner(){
		alert("Player " + currentPlayer + " won!");
	}
	function resetGame(){
		$("#board").fadeOut();
		$("#reset").hide();
		$("#board").hide();
		$("#choosePlayer").hide();
		$("#chooseMode").show();

		currentPlayer = "X";
		moves = [0,1,2,3,4,5,6,7,8];
		turns = 0;
		$(".X").removeClass("X");
		$(".O").removeClass("O");
	}
	function checkWinner(){
		if(moves[0] === currentPlayer && moves[1] === currentPlayer && 
		   moves[2] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if(moves[3] === currentPlayer && moves[4] === currentPlayer && 
		   moves[5] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if(moves[6] === currentPlayer && moves[7] === currentPlayer && 
		   moves[8] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if(moves[0] === currentPlayer && moves[3] === currentPlayer && 
		   moves[6] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if(moves[1] === currentPlayer && moves[4] === currentPlayer && 
		   moves[7] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if(moves[2] === currentPlayer && moves[5] === currentPlayer && 
		   moves[8] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if(moves[0] === currentPlayer && moves[4] === currentPlayer && 
		   moves[8] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if(moves[2] === currentPlayer && moves[4] === currentPlayer && 
		   moves[6] === currentPlayer){
		   	declareWinner();
		   	return true;
		}else if (turns === 9){
			alert("It's a tie!");
			return true;
		}else{
			return false;
		}
	}
	function makeMove(){
		$(this).addClass(currentPlayer);
		moves[theIndex] = currentPlayer;
		turns++;
		console.log(moves);
		console.log("turns: " + turns);
	}

	//initial page display
	$("#reset").hide();
	$("#board").hide();
	$("#choosePlayer").hide();

	$("#pVp").click(function(){
		//proceed as usual
		$("#chooseMode").hide();
		$("#board").show();
		$("#reset").show();
	});
	$("#pVc").click(function(){
		//prompt user to choose game piece
		$("#chooseMode").hide();
		$("#choosePlayer").show();
	});

	//assign player to gamepiece
	$("#chooseX").click(function(){

	});
	$("#chooseO").click(function(){
		
	});

	$(".square").click(function(){
		var theIndex = $(this).data("index");
		console.log(theIndex);
		if($(this).hasClass("X") === false || 
			$(this).hasClass("O") === false){

			//move this part to a function?
			$(this).addClass(currentPlayer);
			moves[theIndex] = currentPlayer;
			turns++;

			if(checkWinner() === true){
				resetGame();
			}else{
				switchPlayer(currentPlayer);
			}
		}
	});
	$("#reset").click(function(){
		resetGame();
	});
});