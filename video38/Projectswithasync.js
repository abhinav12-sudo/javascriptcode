// setTimeout(function(){
//     console.log("Abhinav");
// },2000)
const sayAbhinav = function(){
    console.log("Abhinav");
}
const changetext = function(){
    document.querySelector('h1').innerHTML = "best JS series"
}
setTimeout(sayAbhinav,2000)
const changeme = setTimeout(changetext,2000)
// clearTimeout(changeme)
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeme)
})

