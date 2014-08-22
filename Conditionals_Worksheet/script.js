// John Smith
// 08/21/14
// Conditionals Worksheet

//Multiple Conditions

//Declared givens. Original ticket price, customers age, the discount, the movies time:
var originalTicketPrice = 12;
var customerAge = 54;
var moneyOff = 7;
var movieTime = 4;

//Forumula for the dicounted price is the orginal ticket price minus the money taken off:
var discountedPrice = originalTicketPrice - moneyOff;

//If the customers is is greater than or equal to 55 OR is less than or equal to 10, they get the discout.
if(customerAge >= 55 || customerAge <= 10){
	console.log("The ticket price is $" + discountedPrice + ".");
}else if(movieTime >= 3 && movieTime <= 5){
	console.log("The ticket price is $" + discountedPrice + ".");
}else{
	console.log("The ticket price is $" + originalTicketPrice + ".");
}

//^ Also applies if the movie time is between 3 and 5. If the movie time and age don't line up, then they have to pay the original price.