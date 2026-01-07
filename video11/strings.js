const name = "abhinav"
const repocount= 50

// console.log(name + repocount + "value");//abhinav50value

// console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('marshall-abhinav-tomar')


// console.log(gamename[0]);//m
// console.log(gamename.__proto__);//it gives an empty object.



// console.log(gamename.length);//it gives the length of the string
// console.log(gamename.toUpperCase());//it changes the string into uppercase
// console.log(gamename.charAt(2));//it gives the character at index 2
// console.log(gamename.indexOf('a'));//it gives the index of the given character.
const newstring = gamename.substring(0,4)
console.log(newstring);//substring function gives mars as you can see it does not involve the index 4 it gives the value from index 0 to 3

const anotherstring = gamename.slice(-5,4)
console.log(anotherstring);
// only in slice we can use negative value but in substring we cannot use negative value if we put negative value then it consider it as 0

const newstringone = "   hitesh  "
console.log(newstringone);
console.log(newstringone.trim());//trim function removes all the whitespaces present in it.


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))//the replace function takes two value first which you want to replaced and second with which you want to replaced.
console.log(url.includes('hitesh'));//it gives a boolean type value which tells us whether it includes the value which is taken by the includes function.
console.log(gamename.split('-'));//this function returns an array by splitting the text with the given condition.



