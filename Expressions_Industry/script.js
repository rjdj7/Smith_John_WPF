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

// Formula for how many pages the person has to work with after subtracting the ones they've already done: 
var truePages = totalPages - soFar;

//
var pagesPerHour = truePages / hoursAvail; 

//
