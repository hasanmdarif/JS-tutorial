// Scope chain: Take necessary one from the bigger value
// 

var name ="Arif"; //GLobal variable
console.log("Line number 5", name);

function sayName() 
{
    console.log("line number 9", name); //will take name from the global variable
    function sayNameTwo() {
        console.log("Line number 11", name); //Will take name from global variable

        
    }
    sayNameTwo();
}
sayName();