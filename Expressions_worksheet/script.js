// John Smith
// 08/12/14
// Expressions Worksheet

// Problem 1: Dog Years

	// Declare my variables. regYear is Sparky's age in regular years. dogYear is Sparky's age in dog years. 
	var regYear;
	var dogYear;

	// Assigning Sparky a "regular year" age of 1
	regYear = 1;

	// The forumla for converting regular (human) years to dog years:
	dogYear = regYear * 7;

	// Declaring the string variable result:
	var result = new String("Sparky is " + regYear + " human year old which is " + dogYear " in dog years.");

	// Pring the result in the console:
	console.log(result);


// Problem 2: Slice of Pie pt 1

	// Declaring my variables and assigning values to them. 2 pizzas ordered, with 8 slices in each, for 8 students. 
	var pizzaSlice = 8;
	var partySize = 8;
	var pizzaOrdered = 2;

	// Formula for finding out total amount of pizza slices. This would make 16 slices total.
	var totalSlices = pizzaOrdered * pizzaSlice;

	// Formala for finding out total amout of slice for each student. This would make it 2 slices for each student. 
	var slicesEach = totalSlices / partySize;

	// Declaring the result:
	var result2 = new String("Each person ate " + slicesEach + " slices of pizza at the party.");

	// Print the result in the console:
	console.log(result2);


// Problem 3: Slice of Pie pt 2

	// Formula for finding out how much leftover pizza there is after dividing it up evenly among the party:
	var leftoverPizza = totalSlices % partySize;

	//Declaring the result:
	var result3 = new String("Sparky got " + leftoverPizza + " slices of pizza.")

	// Print the result in the console:
	console.log(result3)






