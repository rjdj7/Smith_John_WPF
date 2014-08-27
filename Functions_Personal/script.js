// John Smith
// 08/27/14
// Assignment: Functions Personal

//Determining your BMI (Body Mass Index)

//Prompting the user to enter in their height in inches:
var userHeight = prompt("How tall are you? (In inches)");

//Prompting the user to enter in their weight:
var userWeight = prompt("How much do you weigh?");

//Squaring the users height for the first step in the formula:
var sqauredHeight = userHeight * userHeight;

//Dividing the users weight by the sqaured height as the second step:
var dividedWeight = userWeight / sqauredHeight;

//The final step to determining your BMI, which is multiplying your divided weight by 703:
var bmi = dividedWeight * 703;

//Alerting the user of their BMI: 

alert("Your BMI is " + bmi + ".");

//BMI Scale:

if (bmi <= 18){
	alert("You are underweight.");
}
else if (bmi <= 18.5){
	alert("You are thin for your height.");
}
else if (bmi >= 18.6 && bmi <= 24.9){
	alert("You are at a healthy weight.");
}
else if (bmi >= 25 && bmi <= 29.9){
	alert("You are overweight.");
}
else if (bmi >= 30){
	alert("You are obese.");
}

//Validating to make sure the user is putting in a number:
if (isNaN(userHeight)){
	alert("Please enter your inches (in numbers)");
} 
else if (isNaN(userWeight)){
	alert("Please enter your weight (in numbers)");
} 