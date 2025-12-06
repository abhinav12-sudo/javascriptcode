// stack and heap memory

// Stack(Primitive) , Heap(Non-Primitive)

let myyoutubename = "abhinavtomar"
let anothername = myyoutubename
anothername = "chaiorcode"

let user1 = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let user2 = user1
user2.email = "abhitomar@google.com"
console.log(user1.email);
console.log(user2.email);
// so here the program change the value of user1 and user2 both because in non primitive it gives the reference value but in the primitive one it gives the copy of the real value so it does not change.
