var isLoggedin = true;
var isEmailVerified = true;
var cardInfo = false;
//  if all of three conditions are true then only you can make a payment


// if (isLoggedin) {
//     console.log("Successfully loggedin");
//     if(isEmailVerified) {
//         console.log("Email is varified");
//         if(cardInfo) {
//             console.log("Your payment succeed!")
//         }
//         else {
//             console.log("Card declined");
//         }
//     }
//     else {
//         console.log("Please write the valid email");
//     }   
// }
// else {
//     console.log("Please log in to make a payment");
    
// }
if(isLoggedin && isEmailVerified && cardInfo) {
    console.log("You can make payment");
}
else {
    console.log("Please fix the criteria");
}