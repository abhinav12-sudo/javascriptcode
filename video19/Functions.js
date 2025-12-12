function saymyname(){
    console.log("Abhinav");
}
// saymyname()
function add(number1,number2){
    console.log(number1+number2);

}
function addtwo(number1,number2){
    // let result = number1 + number2
    // return result
    return number1+number2
}
// when we make a function so what we give them in the function we call them parameters but when we call the function and then we give the value to the function that is called as arguments

// const result = add(3,4)
// so here the result value is undefined because function does not return anything it only printing the number
const result = addtwo(3,4)

function loginmessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginmessage("Hitesh"))
// if we donot give the value to the user it automatically takes the undefined value


