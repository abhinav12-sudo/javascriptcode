const course = {
    coursename: "js",
    price: "999",
    courseinstructor: "hitesh"
}

const {courseinstructor: instructor} = course
// in this way you can destructure an object to get the values of that object in an easy way
// we can also give the name to an key according to our neccessity
console.log(instructor);
// {
//     "name": "Abhinav",
//     "coursename": "Js",
//     "price": "free"
// }
// this is a type of api
// We have also get api in the form of array
// [
//     {},
//     {},
//     {}
// ]


