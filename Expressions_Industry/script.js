// John Smith
// 08/13/14
// Expressions Industry

// How many webpages do you have to code total?
// How many have you coded so far? 
// How many hours do you have available to you? 

// Declaring prompts:
var totalPages = prompt("How many webpages do you have to code total?");
var soFar = prompt("How many have you coded so far?");
var hoursAvail = prompt("How many hours do you have available to you?");

// Formula for how many webpages the person has to work with after subtracting the ones they've already done: 
var truePages = totalPages - soFar;

// Formula for the amount of webpages the person will have to code per hour, which is dividing the true amount of pages by the hours the person has available: 
var pagesPerHour = truePages / hoursAvail; 

// Alert to notify the user how many pages they will have to code per hour in order to finish their site:
alert("You will have to code " + pagesPerHour + " pages per hour in order to finish your website.");
