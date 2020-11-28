// var isEven = (Element) =>  //Arrow function
//  {  
//     return Element % 2 === 0;
// }
// var result = [2,3,6,10].every(isEven)   
// console.log(result);


var isOdd = [3,11,23,21].every((e)=>{
    return e%2 != 0;
})
console.log(isOdd);