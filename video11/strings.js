const name = "abhinav"
const repocount= 50

// console.log(name + repocount + "value");

// console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('marshall-abhinav-tomar')


// console.log(gamename[0]);
// console.log(gamename.__proto__);



// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('a'));
const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(-5,4)
console.log(anotherstring);
// only in slice we can use negative value but in substring we cannot use negative value if we put negative value then it consider it as 0

const newstringone = "   hitesh  "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'));
console.log(gamename.split('-'));



