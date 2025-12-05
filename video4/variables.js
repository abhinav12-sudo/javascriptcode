const accountId = 144553
let email = "abhitomar212007@gmail.com"
var accountpassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
email = "abhitomar"
accountpassword = "12"
accountCity = " mumbai"

console.log(accountId);
console.table([accountId,email, accountpassword , accountCity])
/*
Prefer not to use var because of issue in block 
scope and functional space
*/
/* If let a variable and did not assign the 
value to it then javascript automatically assign it undefined. 
*/

