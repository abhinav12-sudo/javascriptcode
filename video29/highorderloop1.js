const myobject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift: "swift by apple"
}
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}
const programming = ["js","cpp","html"]
for (const key in programming) {
    console.log(programming[key]);

}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")

// for (const key in map) {
//     console.log(key);
// }
// so this loop does not give us an result because map is not iterable