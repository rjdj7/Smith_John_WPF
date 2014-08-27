// John Smith
// 08/27/14
// Assignment: Functions Industry

//Calculating Pay for the week using money per hour, the amout of hours, and a (probably unrealistic) bonus:

function myPay(money, hours, bonus){
	var totalPay = money * hours + bonus;
	console.log(totalPay);

	return totalPay;
}

//Different payday examples (testing out the function: 
myPay(50, 60, 200);

myPay(60, 67, 230);

myPay(55, 40, 0);