// Array is collection of data.
var countries = ["India", "UAE", "USA", "UK"] //array declaration style 1

var states = new Array("Bihar", "Delhi", "Karnataka")  //array declaration style 2

// console.log(countries[2]);    // reflects the element present at given index(index starts with 0)
// console.log(states.length);  //Reflects the length of the array

// Replace the value at any certain index

states[2] = "Uttar Pradesh";
// console.log(states);
// we can remove the last element of any array by
states.pop()
// console.log(states);
// We can add elements in the last of the array by 
states.push("Punjab");
// console.log(states);
// To add value at the very first position
states.unshift("Mumbai");
console.log(states);
console.log(states.indexOf("Punjab"));