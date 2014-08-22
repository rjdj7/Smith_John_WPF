// John Smith
// 08/21/14
// Assignment: Conditionals

//Wacky: Apocalypse

//It's the apocalypse! What happened!?
//War, Zombies, Aliens, Natural Disaster

var whatHappened = Number(prompt("It's the apocalypse! What happened!? Was it: 1. War. 2. Zombies 3. Aliens 4. Natural Disaster. Insert a number:"));

//Different answers based on what happened. 
if (whatHappened === 1){
	console.log("Grab a gun and prepare to fight. Chances are, no place is safe.");
}else if (whatHappened === 2){
	console.log("Stock up on supplies and stay barricaded in your home until things cool down. When supplies begin to dwindle, find your nearest military base and pray that it's still standing.");
}else if (whatHappened === 3){
	console.log("Keep out of the open and hope that law enforcement deals with this new threat.");
}else if (whatHappened === 4){
	console.log("You're pretty much screwed");
}

//Validation
if (whatHappened == ""){
	console.log("Please insert a number. 1, 2, 3, or 4.");
}