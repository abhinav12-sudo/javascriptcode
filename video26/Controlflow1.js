// if statement

if(false){

}else{
    // condition
}
// if condition is true then code under the scope will executed and if the conditioin is false the code under the scope will not executed.
// We check condition under the if condition.
// <,>,<=,>=,==,===,!=,!==
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// Short hand notation
const balance = 1000
// if(balance > 500) console.log("test"); 
// this is implicit scope

// if(balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
if(userloggedin && debitcard){
    console.log("Allowed to buy courses");
}
if(loggedinfromemail || loggedinfromemail){
    console.log("User logged in");
}
