// function init(){
//     let name="Mozzila";
//     function displayname(){
//         console.log(name);
//     }
//     displayname()
// }
// init()
// function outer(){
//     let username = "hitesh"
//     function inner(){
//         console.log(username);
//     }
//     inner()
// }
// outer()

// function makefunc(){
//     const name = "Mozzila";
//     function displayname(){
//         console.log(name);
//     }
//     return displayname;
// }
// const myfunc = makefunc();
// myfunc(); 
// jab aap pura function he return kar dete ho kisi or function m to uska function is return nhi hota balki uska outer function ka bhi scope return hota hai ise he closure kehte h.
// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = 'orange'
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = 'green'
// }


function clickhandler(color){
    // document.body.style.backgroundColor = `${color}`
    return function(){
        document.body.style.backgroundColor = `{color}`
    }
}
document.getElementById('orange').onclick = clickhandler("orange")