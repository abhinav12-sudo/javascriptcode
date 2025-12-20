class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value

    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()

    }
}
// set only set the value which means that it set the value in the database or whereever you want but if someone try to get the value it get from the get password one so we can give him any value we want


const hitesh = new User("abhinav@gmail.com","123")
console.log(hitesh.email);
