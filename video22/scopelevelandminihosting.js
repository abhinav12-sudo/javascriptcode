function one(){
    const username = "abhinav"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // so we cannot access website because it is under another function so we can say thay website is a block scp[e.]
    two()
}
one()

if(true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
    // so as in function we cannot access website here also before we make a block scope variable
}
// +++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++

function addone(num){
    return num+1

}
addone(5)

const addtwo = function(num){
    return num+2
}
addtwo(5)
// here addone is a function and addtwo is also a function but sometimes we also called it as expression
// we can also execute a function before writing it and it executes without an error in function addone
// but in function addtwo we cannot do that this gives us an error because we declare it under a variable this concept is also called as hoisting
