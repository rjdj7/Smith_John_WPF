//Ch. 3 pg. 61: Multiple Conditions 

//Prompting the user to enter their age. Default value is 30:
var myAge = Number(prompt("Enter your age", 30));

//If the age is greater than or equal to zero AND less than or equal to 10, then...
if (myAge >= 0 && myAge <=10){

	document.write("My age is between 0 and 10 <br/>");
}

//The NOT operator reverses this otherwise false statement, making it true. (Because 30 is out of the age range.)
if (!(myAge >= 0 && myAge <= 10)){

	document.write("My age is not between 0 and 10 </br>");
}

//If the age is greater than or equal to 80 OR the age is less than or equal to 10, then...
if (myAge >= 80 || myAge is <= 10){

	document.write("My age is 80 or above OR 10 or below <br/>");
}

//If the age is greater than or equal to 30 and less than or equal to 39 OR if the age is greater than or equal to 80 and less than or equal to 89, then...
if (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89){

	document.write("myAge is between 30 and 39 or myAge is between 80 and 89");
}