// John Smith
// 08/27/14
// Assignment: Functions Wacky

//Experience Points

//Anonymous function:
var expPoints = function(){ //parameters
	var hits = 10;
	var expPoints = hits * 2000;
	console.log("You have gained a total of " + expPoints + " exp." );
}

//Ternary. If the exp earned is greater than 1000, say Congrats, if not: keep training:
console.log = expPoints > 5000 ? "Congrats. You've leveled up." : "Keep training.";
