// John Smith
// 08/21/14
// Assignment: Conditionals

//Personal: Subscribing to an adult newsletter.

//First Name, Last Name, E-mail Address, Age:
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var email = prompt("Please enter your email address:");
var age = Number(prompt("Please enter your age:"));

//Correct info:
var correctFName = "John";
var correctLName = "Smith";
var correctEmail = "rjdj7@yahoo.com";

//If the first and last names are incorrect: invalid name. If email is: invalid email. 
//If the age is under 18: must be 18 or over. Otherwise: Thank you
if(firstName != correctFName || lastName != correctLName){
	console.log("Invalid name.");
 }else if(email != correctEmail){
 	console.log("Invalid email.");
 }else if(age < 18){
 	console.log("Sorry, must be 18 or older to subscribe to our newsletter.");
 }else{
 	console.log("Thank you. You have successfully subscribed to our newsletter.");
 }

 //Validation:
if(firstName === "" || lastName === ""){
	console.log("Please fill out both your first and last name.");
}else if(email === ""){
	console.log("Please fill out your email.");
}else if(age === ""){
	console.log("Please fill out your age.");
}
