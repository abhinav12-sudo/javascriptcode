// setInterval(function(){
//     console.log("Abhinav");
// },1000)
// const saydate = function(){
//     console.log("Abhinav",Date.now());
// }
// setInterval(saydate,1000)


document.querySelector("#start").addEventListener('click',function(){
    const saydate1 = function(str){
    console.log(str,Date.now());
    }
    const intervalid = setInterval(saydate1,1000,"hi")
    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(intervalid)
    })

    
})

