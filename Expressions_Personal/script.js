// John Smith
// 08/13/14
// Expressions Personal

// Declaring the givens. 758 pages. 30 days.
var bookPages = prompt("Please enter the amount of pages in your book:");
var days = prompt("Now enter the amount of days you wish to finish it in:");
var hoursInDay = 24;

// Formula for the amount of pages per day, which is the amount of pages in the book divided into 30 days. 
var pagesPerDay = bookPages / days;

// Forumla for amount of pages per hour, which is the amount of pages in a day divided by the hours in a day. 
var pagesPerHour = pagesPerDay / hoursInDay;

// Alert to notify the user how many pages per day it would take to finish their book. 
alert("You would have to read " + pagesPerDay + " pages per day to finish the book. That's " + pagesPerHour + " pages an hour!");