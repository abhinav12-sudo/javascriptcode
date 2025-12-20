const user = {
    username: "abhinav",
    logincount: 8,
    signedin: true,
    getuserdetails: function(){
        // console.log("got user details from database");
        console.log(`Username of the user is:${this.username}`);
    }
}

// console.log(user.username);

function User(username,logincount,isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    return this
}


const userone = new User("hitesh",12,true)
const usertwo = new User("tom",11,false)
console.log(userone);
console.log(usertwo);
// so here because of this usertwo overwrite the value of userone with its own value so thats why we use constructor function(new)

// when we use (new) constructor function
// Step 1 --- Firstly an empty object is created which will be called as instance.
// Step 2 --- an constructor function is called.(it packs all the arguments)
// Step 3 --- in step 3 all arguments injects
// Step 4 --- we get all arguments in function.
console.log(userone.constructor);
