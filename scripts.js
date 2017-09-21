$(document).ready(function(){
	var currentPlayer = "X";
	var opponent = "O";
	var moves = [0,1,2,3,4,5,6,7,8];
	var turns = 0;
	var gameMode = null;

	function switchPlayer(thePlayer){
		if(currentPlayer === "X"){
			currentPlayer = "O";
			opponent = "X";
		}else{
			currentPlayer = "X";
			opponent = "O";
		}
	}

	function resetGame(){
		$("#board").fadeOut();
		$('.declarePlayer').hide();
		$("#reset").hide();
		$("#board").hide();
		$("#choosePlayer").hide();
		$("#chooseMode").show();

		currentPlayer = "X";
		opponent = "O";
		gameMode = null;
		moves = [0,1,2,3,4,5,6,7,8];
		turns = 0;
		$(".X").removeClass("X");
		$(".O").removeClass("O");
	}
	
	function declareWinner(){
		$('.declarePlayer').text('Player ' + currentPlayer + ' won!');
		$('.declarePlayer').show();
		console.log("Player " + currentPlayer + " won!");
		setTimeout(function(){resetGame();}, 2000);	
	}
	
	
	function checkWinner(){
		if(moves[0] === currentPlayer && moves[1] === currentPlayer && 
		   moves[2] === currentPlayer){
		   	return true;
		}else if(moves[3] === currentPlayer && moves[4] === currentPlayer && 
		   moves[5] === currentPlayer){
		   	return true;
		}else if(moves[6] === currentPlayer && moves[7] === currentPlayer && 
		   moves[8] === currentPlayer){
		   	return true;
		}else if(moves[0] === currentPlayer && moves[3] === currentPlayer && 
		   moves[6] === currentPlayer){
		   	return true;
		}else if(moves[1] === currentPlayer && moves[4] === currentPlayer && 
		   moves[7] === currentPlayer){
		   	return true;
		}else if(moves[2] === currentPlayer && moves[5] === currentPlayer && 
		   moves[8] === currentPlayer){
		   	return true;
		}else if(moves[0] === currentPlayer && moves[4] === currentPlayer && 
		   moves[8] === currentPlayer){
		   	return true;
		}else if(moves[2] === currentPlayer && moves[4] === currentPlayer && 
		   moves[6] === currentPlayer){
		   	return true;
		}else if (turns === 9){
			$('.declarePlayer').text('It\'s a tie!');
			$('.declarePlayer').show();
			setTimeout(function(){resetGame();}, 2000);
			return false;
		}else{
			return false;
		}
	}

	function checkIfUnplayed(boxNum){
		//is the box with this data-index taken?
		if($('.square[data-index="' + boxNum +'"]').hasClass('X') || 
			$('.square[data-index="' + boxNum +'"]').hasClass('O')){
			return false; //square is taken
		}else{
			return true; //square is not taken
		}
	} 

	function compMove(){
		setTimeout(function(){
			//make array of unplayed spots
			var unplayed = [];
			for(var i = 0; i < 9; i++){
				if(checkIfUnplayed(i)){
					unplayed.push(i);
				}		
			}
			console.log('unplayed: ' + unplayed);
			//check to see if comp needs to block a move
			
			//pick random square from array
			var randPos = unplayed[Math.floor(Math.random() * unplayed.length)];
			console.log('randPos: ' + randPos );
			//make move
			$('.square[data-index="' + randPos +'"]').addClass(currentPlayer);
			moves[randPos] = currentPlayer;
			turns++;
			console.log("computer played: " + randPos);
			console.log(moves);
			console.log("turns: " + turns);
			if(checkWinner() === true){
					declareWinner();
			}else{
				switchPlayer(currentPlayer);
			}
		}, 0);	
	}

	// function makeMove(){
	// 	$(this).addClass(currentPlayer);
	// 	moves[theIndex] = currentPlayer;
	// 	turns++;
	// 	console.log(moves);
	// 	console.log("turns: " + turns);
	// }

	//initial page display
	$("#reset").hide();
	$("#board").hide();
	$("#choosePlayer").hide();

	function showGame(){
		$("#board").show();
		$("#reset").show();
	}

	$("#pVp").click(function(){
		gameMode = "pVp";
		//proceed as usual
		$("#chooseMode").hide();
		showGame();
	});
	$("#pVc").click(function(){
		gameMode = "pVc";
		$("#chooseMode").hide();
		$("#choosePlayer").show();
	});

	//assign player to gamepiece
	$("#chooseX").click(function(){
		$("#choosePlayer").hide();
		showGame();
	});
	$("#chooseO").click(function(){
		$("#choosePlayer").hide();
		showGame();
		compMove();
	});

	$(".square").click(function(){
		var theIndex = $(this).data("index");
		console.log("human played: " + theIndex);
		if($(this).hasClass("X") === false && 
			$(this).hasClass("O") === false){
			$(this).addClass(currentPlayer);
			moves[theIndex] = currentPlayer;
			turns++;
			console.log(moves);
		}
		if(checkWinner() === true){
				declareWinner();
		}else if(gameMode === "pVc"){
			switchPlayer(currentPlayer);
			compMove();
		}else{
			switchPlayer(currentPlayer);
		}
	});

	$("#reset").click(function(){
		resetGame();
	});
});