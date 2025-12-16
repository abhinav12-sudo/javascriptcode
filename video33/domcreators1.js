const div = document.createElement('div')
div.className = "main"
div.id = Math.round(Math.random()*10 + 1)
div.setAttribute("title","generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerText = "Chai aur code"
// innertext and classname overwrite the value so good developers does not prefer that
const addtext = document.createTextNode("Chai aur code")
div.appendChild(addtext)

document.body.appendChild(div)


