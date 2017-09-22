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
	
	function almostWin(player){
		if(moves[0] === player && moves[1] === player && checkIfUnplayed(2) === true){
			return 2;
		}else if(moves[3] === player && moves[4] === player && checkIfUnplayed(5) === true){
			return 5;
		}else if(moves[6] === player && moves[7] === player && checkIfUnplayed(8) === true){
			return 8;
		}else if(moves[1] === player && moves[2] === player && checkIfUnplayed(0) === true){
			return 0;
		}else if(moves[4] === player && moves[5] === player && checkIfUnplayed(3) === true){
			return 3;
		}else if(moves[6] === player && moves[8] === player && checkIfUnplayed(7) === true){
			return 7;
		}else if(moves[0] === player && moves[4] === player && checkIfUnplayed(8) === true){
			return 8;
		}else if(moves[8] === player && moves[4] === player && checkIfUnplayed(0) === true){
			return 0;
		}else if(moves[0] === player && moves[8] === player && checkIfUnplayed(4) === true){
			return 4;
		}else if(moves[2] === player && moves[4] === player && checkIfUnplayed(6) === true){
			return 6;
		}else if(moves[0] === player && moves[3] === player && checkIfUnplayed(6) === true){
			return 6;
		}else if(moves[3] === player && moves[6] === player && checkIfUnplayed(0) === true){
			return 0;
		}else if(moves[0] === player && moves[6] === player && checkIfUnplayed(3) === true){
			return 3;
		}else if(moves[1] === player && moves[4] === player && checkIfUnplayed(7) === true){
			return 7;
		}else if(moves[1] === player && moves[7] === player && checkIfUnplayed(4) === true){
			return 4;
		}else if(moves[4] === player && moves[7] === player && checkIfUnplayed(1) === true){
			return 1;
		}else if(moves[2] === player && moves[5] === player && checkIfUnplayed(8) === true){
			return 8;
		}else if(moves[5] === player && moves[8] === player && checkIfUnplayed(2) === true){
			return 2;
		}else if(moves[2] === player && moves[8] === player && checkIfUnplayed(5) === true){
			return 5;
		}else{
			return false;
		}
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
		var square;
		setTimeout(function(){
			if(almostWin(opponent) !== false){
				square = almostWin(opponent);
				$('.square[data-index="' + square + '"]').addClass(currentPlayer);
				moves[square] = currentPlayer;
				turns++;
				console.log("computer blocked & played: " + square);
				console.log(moves);
				console.log('square: ' + square);
				console.log("turns: " + turns);
			}else if(almostWin(currentPlayer) !== false){
				square = almostWin(currentPlayer);
				$('.square[data-index="' + square + '"]').addClass(currentPlayer);
				moves[square] = currentPlayer;
				turns++;
				console.log("computer completed row & played: " + square);
				console.log(moves);
				console.log('square: ' + square);
				console.log("turns: " + turns);
			}else{
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
			}
			
			if(checkWinner() === true){
					declareWinner();
			}else{
				switchPlayer(currentPlayer);
			}
		}, 0);	
	}

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