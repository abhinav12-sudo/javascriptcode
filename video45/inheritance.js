class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`A new course added by ${this.username}`);
    }
}
const chai = new Teacher("chai","chai@teacher.com","123")
chai.addcourse()
const masalachai = new User("masalachai")
masalachai.logme()

// console.log(chai === masalachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
