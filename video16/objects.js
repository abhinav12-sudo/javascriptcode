// singleton
// Object.create

// object literals

const my = Symbol("key1")

const jsusers = {
    name: "Abhinav",
    age: 18,
    location: "Srinagar",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    [my]: "mykey1"
}
// this is the syntax of using a symbol as a key in an object
console.log(jsusers.email);
console.log(jsusers["email"]);
// there are two methods to access the object first one have certain limitations if we define the key as a string with a gap then we cannot access it through the first method we have to go with the second method necessarily

jsusers.email = "abhitomar@gmail.com"
// Object.freeze(jsusers)
//this function freezes the object after it we cannot change the value of the object

jsusers.greeting = function(){
    console.log("Hello js users");
}
jsusers.greeting2 = function(){
    console.log(`Hello js users,${this.name}`);
}
console.log(jsusers.greeting());
console.log(jsusers.greeting2());