
// Admin= can access every thing
// subadmin: can delete or add courses
// testprep: can delete or add test
// user: can access courses

var user = "testprep";
switch (user) {
    case "admin":
        console.log("You can access every thing.");
        break;
    case "subadmin":
        console.log("You can delete or add courses");
        break;
    case "testprep":
        console.log("You can delete or add test");
        break;
    case "user":
        console.log("You can access courses");
        break;
    default:
        console.log("Demo Login");
        break;
}