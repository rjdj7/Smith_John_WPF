// John Smith
// 08/25/14
// Assignment: Functions Worksheet - Circumference

//C = 2 * 3.14 * r

//The arguments. What's being stored in the parameters. 
//The forumula for the circumference of a circle
circumference (2, 3.14, 90);

//Declaring the function and added the parameters:
function circumference(two, pie, radius){
	var circum = two * pie * radius;
	console.log(circum);

	return circum;
}

//Calling the function:
circumference();