// John Smith
// 08/21/14
// Conditionals Worksheet

//Declaring givens and assigning values:
var mpg = 25; //miles per gallon
var gasLeft = tankCap / 2; //50% of gas tank (9 gallons left)
var tankCap = 18; //car's tank capacity
var milesLeft = 200; //the miles left

//Forumula for gas needed for the remainder of the trip:
var gasNeeded = milesLeft / mpg;

if(tankCap >= gasNeeded){
	console.log("Yes, you can make it without stopping for gas!");
}
