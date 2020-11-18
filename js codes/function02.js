
// Admin= can access every thing
// subadmin: can delete or add courses
// testprep: can delete or add test
// user: can consume all content
// other: trial user
// input: getUserRole(name, role)
function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
             //break isn't necessary in case we use return, beacause return execute the code before it reaches to break
        case "subadmin":
            return `${name} is subadmin with access to delete or add courses`;
            // break statememt is require if we use console.log()
        case "testprep":
            return `${name} is testprep with access to delete or add test`;
            
        case "user":
            return `${name} is user with access to consume all content`;
            
        default:
            return `${name} is a trial user`;
            
    }
    
}
var roleDecide = getUserRole("Arif","testprep");
console.log(roleDecide);