function addlanguage(langname){
    const li = document.createElement('li');
    li.innerHTML = `${langname}`
    document.querySelector('.language').appendChild(li)

}
addlanguage("python")
function addoptilanguage(langname){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langname))
    document.querySelector('.language').appendChild(li)
}
// Edit
const secondlang = document.querySelector("li:nth-child(2)")
// secondlang.innerHTML = "Mojo"
const newli = document.createElement('li')
newli.textContent = "mojo"
secondlang.replaceWith(newli)

// edit
const firstlang = document.querySelector("li:first-child")
firstlang.outerHTML = '<li>Typescript</li>'

// remove
const lastlang = document.querySelector('li:last-child')
lastlang.remove()
