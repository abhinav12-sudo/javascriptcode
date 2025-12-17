// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }
// this method does not have a problem but it does not give us propogation so we should use eventlistener in place of them.
// attachEvent()
// jQuery- on
// type,timestamp,defaultPrevented
// target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
// altkey,ctrlkey,shiftkey,keycode
document.getElementById('images').addEventListener('click',function(e){
    console.log("Click inside the ul");
},false)
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked");
},false)
// if we put false value here like we have taken so this is known as bubbling here owl is under the ul so when we clicked on the owl firstly owl clicked but 
// second event listener also works because owl is under the ul so both event listeners activates.so in this firstly owl clicked and then ul one.
document.getElementById('images').addEventListener('click',function(e){
    console.log("Click inside the ul");
},true)
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked");
    e.stopPropagation()
},true)
// But if we have taken true value then it is known as capturing when we clicked on the owl firstly we seen the clicked inside the ul and then we see the owl 
// clicked. this is the difference between the true and false value. Bydefault we have false value.
// if we give the event stoppropogation then it does not bubble it stops after it.means bubbling will not occur
document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
},false)

document.querySelector("#images").addEventListener('click',function(e){
    console.log(e.target);
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        let removeit = e.target.parentNode
        removeit.remove()

    }

    // so if we take e.target then we get the img so we try to remove the image after click but e.target gives us the image not li so for taking whole li we have to take e.target.parentNode
    // this gives us the whole li which we want to delete.
    
    // removeit.parentNode.removeChild(removeit)
    // you can use any method to remove the image from both methods there is no limitation in that.

},false)



