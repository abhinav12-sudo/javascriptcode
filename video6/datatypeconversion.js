let score = "33abc"

// console.log(typeof (score));//string

let valueinnumber = Number(score)
// console.log(typeof valueinnumber);//number
// console.log(valueinnumber);// NAN(not a number)

//if we assign them as Number(value) then the result will be appeared as--->>
// "33" => 33
// "33abc" => NaN => not a number
// true => 1; false=> 0
// null => 0
// undefined => nan

let isloggedin = 1

let booleanisloggedin = Boolean(isloggedin)
// console.log(booleanisloggedin);//true

//if we assign them as Boolean(value) then the result will be appeared as--->>
// 1 => true; 0=>false
// ""=> false
// "abhinav" => true

let somenumber = 35
let stringnumber = String(somenumber)
console.log(typeof stringnumber);//string
console.log(stringnumber);//35
