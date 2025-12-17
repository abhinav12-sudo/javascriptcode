const promiseone = new Promise(function(resolve,reject){
    // Do an async task
    // database calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

promiseone.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()

    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const Promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai",email:"chai@example.com"})

    },1000)
})
Promisethree.then(function(user){
    console.log(user);


})
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "abhinav", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }

    },1000)
})

promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected."))

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript",password:"123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
});

async function consumepromisefive(){
    try{
        const response = await promisefive
        console.log(response);
    }catch(error){
        console.log(error);
    }

}
consumepromisefive()

// async function getallusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

}).then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);

})