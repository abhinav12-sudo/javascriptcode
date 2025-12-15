// document.getElementById("title")
// document.getElementById("title").id
// document.getElementById("title").getAttribute('id')
// document.getElementById("title").setAttribute('class','test','heading')
const title = document.getElementById('title')
// title.style.backgroundColor = 'green'
// title.style.padding = "15px"
// title.style.borderRadius = "15px"
// title.textContent
// title.innerHTML
// title.innerText
// difference between textcontent and innertext is when you set display none then 
// innertext does not show you the display none part but textcontent display all the part whether it is set display none or not it does not depend on it.
// inner html gives all the things in the node if there is a tag it also give the tag.
// document.getElementsByClassName('heading')
// document.querySelector('#title')
// document.querySelector('.heading')
// document.querySelector('input[type="password"]')
// document.querySelector("p:first-child")
// const myul = document.querySelector('ul')
// const turngreen = myul.querySelector('li')
// turngreen.style.backgroundColor = "green"
// turngreen.style.padding = "15px"
const templilist = document.querySelectorAll("li")
// templilist.style.color = 'green'
// so we cannot do like that because it is an node list
templilist[0].style.color = "green"
const myh1 = document.querySelectorAll('h1')
myh1.style.color = "green"
templilist.forEach(function (l){
    l.style.backgroundColor = 'green'
})
const tempclasslist = document.getElementsByClassName('list-items')
// getelementbyclassname give us an html collection so we cannot give it a foreach loop firstly we have to convert it into an array.



const myconvertedarray  = Array.from(tempclasslist)
myconvertedarray.forEach(function(li){
    li.style.color = 'orange'
})







