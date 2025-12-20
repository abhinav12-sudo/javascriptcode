// let myname = "abhinav"

// console.log(myname.truelength);


let myheroes = ["hero","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.abhinav = function(){
    console.log(`Abhinav is present in all objects `);
}
// here we have added an property to the object since all non primitive datatypes goes within an object so all of them acquire this property.


Array.prototype.heyabhinav = function(){
    console.log(`Abhinav says hello`);
}


heropower.abhinav()
myheroes.abhinav()
// heropower.heyabhinav()

// inheritance
const user ={
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makevideo: true
}
const teachingsupport ={
    isavailable: false
}
const tasupport ={
    makeassignment: 'JS assignment',
    fulltime: true,
    __proto__:teachingsupport
}
teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingsupport,teacher)
// so here teaching support inherits all property pf the teacher.

let anotherusername = "chaiaurcode    "

String.prototype.truelength = function(){
    // console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherusername.truelength()
