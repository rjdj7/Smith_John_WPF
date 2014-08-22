// John Smith
// 08/21/14
// Conditionals Worksheet

//Check The Login

//Setting up givens. Prompts for the users input, as well as the correct responses.
var username = prompt("Enter your Username:");
var password = prompt("Enter your Password:");
var correctUser = "jcsmith";
var correctPass = "fullsail";

//If both the username and password are correct: 
if(username = correctUser && password = correctPass){
	console.log("Welcome, " + username + "!");
}
