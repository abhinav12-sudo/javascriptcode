function setusername(username){
    // complex db calls
    this.username = username

}

function createuser(username,email,password){
    // setusername(username)
    // so like this we only get the reference of the function the function is called but this does not hold the reference the call method helps us to hold the reference.
    setusername.call(this,username) 
    this.email=email
    this.password = password

}

const chai = new createuser("chai","chai@fb.com","123")
console.log(chai);