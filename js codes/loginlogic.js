// Allow user to access
// loggedin from email
// loggedin from google
// loggedin from facebook
 var isEmail = false;
 var isGoogle = false;
 var isFacebook = false;

 if(isEmail || isGoogle || isFacebook) {
     console.log("Welcome to our website");
 }
else {
    console.log("Please login to continue");
}
