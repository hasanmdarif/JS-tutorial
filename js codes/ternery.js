// Show user to sign out button if he is authenticated
// otherwise signup
var isAuthenticated = false;
// if(isAuthenticated) {
//     console.log("Show SIgnout button");
// }
// else {
//     console.log("Show Login option");
// }
// Using ternery method we can write the code as

isAuthenticated?console.log("Show Signout button"):console.log("Show sign in button");