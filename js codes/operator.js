var num1 = 8;
var num2 = 7;
var input = "Arif"; 

// console.log("Sum of num1 and num2 is:"+(num1+num2));
// console.log("Multiplication of num1 and num2 is:"+(num1*num2));
// console.log("Substraction of num1 and num2 is:"+(num1-num2));
// console.log("Division of num1 and num2 is:"+(num1/num2));
// console.log("Modulo of num1 and num2 is:"+(num1%num2));
// // console.log("integer division of num1 and num2 is:"+(num1/num2));

var answer = num1>num2;
console.log(answer);
console.log(typeof input);  //typeof is used to check the datatype of variable.

var listingPrice = 799;
var sellingPrice = 199;
// Find prcentage discount
var discountPercent = ((listingPrice - sellingPrice)/listingPrice)*100;
console.log("The discount percentage is: "+ Math.round(discountPercent)+"%"); //Math.round function is used to round the number to integer.
