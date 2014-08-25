//Functions - Variable Scope

var width = 5;

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

calcArea();
console.log(width);

// 5 is printed because width = 5 is being preferred over width = 20, 
// because width = 20 is scoped to calcArea, while width = 5 is scoped to the
// entire document.