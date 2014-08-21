//GoToTraining Week 3

//setup an array
var fruit = ["peach", "pear", "apple", "banana"];

//call the array
console.log(fruit);

//change an item in the array
fruit[0] = "pear";

//call one item from the array using the index
console.log(fruit[2]);

//use dot sytax (period) to find the length of the array
console.log(fruit.length);

//create a var to store the number of pears
var numPears = 0;

//use if statements to check items in the array
if(fruit[0] === "pear"){
	numPears ++;
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");
}

	//check to see if item 1 is a pear
	//If it is a pear, add to numPears

if(fruit[1] === "pear"){
	numPears ++;
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");
}

if(fruit[2] === "pear"){
	numPears ++;
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");
}

if(fruit[3] === "pear"){
	numPears ++;
}else{ //if not equal, then...
	console.log("Fruit is not a pear!");
}

console.log(numPears);

//ask the name of the fruit owner
var name = prompt("What is your name?");

//validate the prompt
if(name === ""){
		//if name is blank, then re-prompt the user for their name
	name = prompt("Please enter you name!");
}

//how many pears are in the bowl?
console.log("Hello " + name + ", you have " + numPears + " pears in your bowl.");
