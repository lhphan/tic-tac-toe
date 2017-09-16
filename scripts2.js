$(document).ready(function(){
	var primaryPlayer;
	var compPlayer;
	var currentPlayer = "X";
	var gameboard = [0,1,2,3,4,5,6,7,8];
	function showGame(player){
		$("#choosePlayer").hide();
		$(".declarePlayer").text("You are player " + player);
		$(".declarePlayer").show();
		$("#board").show();
		$("#reset").show();
	}
	function checkIfWon(){

	}
	// $("#board").hide();
	// $(".declarePlayer").hide();
	$("#reset").hide();
	// $("#chooseX").click(function(){
	// 	primaryPlayer = "playerX";
	// 	console.log("you chose X");
	// 	showGame("X");
	// });
	// $("#chooseO").click(function(){
	// 	primaryPlayer = "playerO";
	// 	console.log("you chose O");
	// 	showGame("O");
	// });
	$(".square").click(function(){
		if($(this).hasClass("playerX")===false || $(this).hasClass("playerO")===false){
			$(this).css("background-color", "yellow");
			$(this).addClass(primaryPlayer);
		}	
	});
	$("#reset").click(function(){
		$(".declarePlayer").hide();
		$("#board").hide();
		$("#reset").hide();
		// code to reset gameboard
		$("#choosePlayer").show();
	});
});