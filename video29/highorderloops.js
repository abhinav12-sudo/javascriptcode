// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "HEllo world"
for (const greet of greetings) {
    // console.log(greet);
}
// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")
console.log(map);

for (const [key , value] of map) {
    console.log(key,":-",value);
}

const myobject = {
    'game1' : 'NFS',
    'game2' : 'freefire'
}
// for (const [key,value] of myobject) {
//     console.log(key, ':-' , value);
// }
// so in this way we cannot iterate an object this method only works for maps not for object

