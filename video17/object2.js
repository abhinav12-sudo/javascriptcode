// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123ab"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "abhinav",
            lastname: "tomar"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 ={
    1: "a",
    2: "b"
}
const obj2={
    3: "c",
    4: "d"
}
// const obj3 = {obj1 , obj2}
// if we use this method to concat two objects then it arise a problem like in arrays there occur nested objects like one object in another
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users =[
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail1.com"
    },
    {
        id:1,
        email: "h@gmail2.com"
    },

]
console.log(users[1].email)
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
// these two methods gives an array of keys and values respectively
console.log(Object.entries(tinderuser));
// it gives a nested array of key and values respectively
console.log(tinderuser.hasOwnProperty('isloggedin'));