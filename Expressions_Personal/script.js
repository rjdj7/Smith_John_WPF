// John Smith
// 08/13/14
// Expressions Personal

// 758 pages in Beginning JavaScript book. To finish the book, how many pages would I need to read a day for 30 days? How many pages per hour? 

// Declaring the givens. 758 pages. 30 days.
var bookPages = 758;
var days = 30;
var hoursInDay = 24;

// Formula for the amount of pages per day, which is the amount of pages in the book divided into 30 days. 
var pagesPerDay = bookPages / days;

// Forumla for amount of pages per hour, which is the amount of pages in a day divided by the hours in a day. 
var pagesPerHour = pagesPerDay / hoursInDay;