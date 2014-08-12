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
	var result3 = new String("Sparky got " + leftoverPizza + " slices of pizza.");

	// Print the result in the console:
	console.log(result3);


// Problem 4: Average Shopping Bill

	// Declaring variable and creating array with input for the 5 weeks:
	var weeklySpending;
	weeklySpending = new Array(135, 30, 25, 77, 50);

	// Formula for finding out the total amount spent in the 5 weeks: 
	var totalSpending = weeklySpending[0] + weeklySpending[1] + weeklySpending[2] + weeklySpending[3] + weeklySpending[4];

	// Formula for finding out the average amount spent a week:
	var spendingAverage = totalSpending / 5;

	// Declaring the result:
	var result4 = new String("You have spent a total of " + totalSpending + " on groceries over 5 weeks. That is an average of " + spendingAverage + " per week.");

	// Print the result in the console:
	console.log(result4);


// Problem 5: Discounts

	// Declaring my variables and assigning values to the purchased item, original price, discount, and sales tax:
	var purchasedItem = new String("cologne")
	var originalPrice = 17.00;
	var percentOff = .10;
	var salesTax = .635;
	
	// Forumula for finding out the amount from the discount that will be taken off of the original price:
	var itemDiscount = originalPrice * percentOff;

	// Formula for finding out what the new, discounted price of the item will be (without tax):
	var discountedPrice = originalPrice - itemDiscount;

	// Forumla for finding out the sales tax on that discounted item:
	var taxAmount = discountedPrice * salesTax;

	// Formula for the new discounted price of the item (with tax)
	var discountedPriceWithTax = disountedPrice + taxAmount;

	// Declaring the result string:
	var result5 = new String("Your " + purchasedItem + " was originally " + originalPrice + ", but after a " + percentOff + "% dicount, it is now " + discountedPrice + " without tax, and " + discountedPriceWithTax + " with tax.");

	// Pring the result in the console:
	console.log(result5);






