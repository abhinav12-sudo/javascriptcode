const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}Welcome to website`);
        console.log(this);
    }
    // this refers to the current context here it is referring to the given object
}
// user.welcomemessage()
// user.username= "sam"
// user.welcomemessage()
// we do not hardcode the object we give it a context with the help of this function 
// so if we print only "this" then it prints the context of the code that is why we use this 
console.log(this);
// if we are in node enviroment then it is referring to the global context so here is nothing for 
// context so it give us an empty object
// but if we execute the same code in browser then it gives an window object

// function chai(){
//     console.log(this);
// }
// chai()
// when we print this under the function we get various objects of different values.
// we cannot give context under a function or we can say that "this" does not work under an function.
const chai = ()=>{
    console.log(this);


}
// so we cannot give context under the arrow function same as we cannot give under a simple function
// but when we are printing "this" under a simple function it gives us various values but in arrow function it gives us a empty object
const addtwo = (num1,num2)=>{
    return num1 + num2

}
// this is a basic arrow function

const addTwo = (num1,num2) => num1 + num2
// and this is a implicit return

const addthree = (num1,num2)=> (num1 + num2)

const four = (num1,num2) => ({username: "hitesh"})
// for returning a object in an arrow function it is necessary that you wrap it in paranthesis otherwise your code will not work


const myarray = [1,2,3,4,5]
myarray.forEach(()=>{
    console.log("we can also use arrow function under loops");
})





