//Ch. 3 pg. 55 The if Statement Exercise

//Declaring the degrees fahrenheit and degrees centigrade variables.
//A prompt will appear for the variable degFahren. The user must enter a number. The default value is 32. 
//"Number() is used to parse the users input, which is techinically a string."
var degFahren = Number(prompt("Enter the degrees Fahrenheit", 32));
var degCent;

//Fahrenheit to Centigrade converstion formula:
degCent = 5/9 * (degFahren - 32);

//Write the result onto the page:
document.write(degFahren + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade<br/>");

//If the value of degCent is less than zero then...
if (degCent < 0) {
	document.write("That's below the freezing point of water.");

}

//If the value of degCent is equal to 100 then...
if (degCent == 100){
	document.write("That's the boiling point of water.");
}