// John Smith
// 08/21/14
// Conditionals Worksheet

//Last Chance for Gas!

//Declaring givens and assigning values:
var mpg = 25; //miles per gallon
var gasLeft = 9; //50% of gas tank 
var tankCap = 18; //car's tank capacity
var milesLeft = 200; //the miles left

//Forumula for gas needed for the remainder of the trip:
var gasNeeded = milesLeft / mpg;

//If gas left is greater than or equal to the gas needed for the trip then:
if(gasLeft >= gasNeeded){
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can!");
}

