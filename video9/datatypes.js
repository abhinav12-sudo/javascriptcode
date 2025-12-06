// Primitive

// 7 types : String , Number , Boolean , Null , undefined , symbol, bigint

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null

const id = Symbol('123')
const anotherid = Symbol('123')
// so if we are using symbol then this gives a unique value to the variable independent of the value given it always not equal to the other one whether you are taking the equal value or not

const bigNumber = 342544524542523948493n



// Reference(Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman","naagraj","doga"];
let myobj = {
    name: "hitesh",
    age: 22,
}
const myfunction = function(){
    console.log("Hello world");
}
// datatype of myfunction is "function"
// datatype of symbol is also symbol 