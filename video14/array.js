//array

const myarr = [0,1,2,3,4,5]
const myheroes = ["shaktiman","naagraj"]
const myarray= new Array(1,2,3,4)
console.log(myarr[0]);

// Array Methods

myarr.push(6)
// It push an element in the last of an array
myarr.pop()
// it deletes the last element of an array
myarr.unshift(0)
// it adds an element in the starting of an array but it is a time consumming operation because it requires to shift all the values of array since it adds the element at the start of the array
myarr.shift()
// it removes the element from the start of an array 
myarray.includes(0)
// it gives the true or false it gives us whether it contains that element or not
myarray.indexOf(1)
// it gives the index of the element in an array but if it does not contain that element then it returns the -1
const newarr = myarr.join()
// join function changes the datatype of an array and converts it into string


// slice and splice

console.log("A",myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("b",myarr);

const myn2 = myarr.splice(1,3)
console.log(myn2);
// slice do not delete the item from the array and it also does not include the last give digit but on the other hand splice delete the element from the original array and make a new array 