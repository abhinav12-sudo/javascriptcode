const useremail = []
// if there is an email then the code will assume that it is a truthy value and if the string is empty then it is a falsy value.
// but if we have an empty array then it will assume it as a truthy value.
if(useremail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false , 0 , -0 , Bigint 0n, "" , null , undefined , NaN
// truthy values
// "0", "false" , " ",[],{}, function(){}
// if we gave a space in empty string then it will become a truthy values...
// if(useremail.length === 0){
//     console.log("Array is empty");
// }
const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log(" Object is empty");
}
// if we compare false with 0 then the output of the condition will be true so this is an important note to remember.
// same as false with 0 we also compare false with empty string and 0 with empty string both give the true value.


// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
let val2 = undefined ?? 15
let val3 = null ?? 10 ?? 20
// so nullish coalescing operator assign the first non null value that it firstly got.

// Coalescing operator do the safety check as like if we get null in the above case so it give it 10.




console.log(val1);
console.log(val2);

// Terniary operator

// condition ? true : false
