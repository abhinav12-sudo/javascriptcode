// immediately invoked function expressioons(IIFE)
(function chai(){
    // named iife
    console.log(`DB connected`);

})();
// this is the syntax for immediately invoked function
// sometimes we have difficulty by the global scope pollution so we use immediately invoked function
((name)=>{
    // unnamed iife with parameter
    console.log(`DB connected two${name}`);
})("abhinav");
// if we do not put semicolon after the paranthesis of the invoked function then it does not stop and it give error after 
// if we declare another function so we have to end this invoked function by placing a semicolon

