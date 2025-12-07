const myarr = [1,2,3,4]
const marvelheroes = ["thor","superman","antman"]
const dc = ["superman","flash","batman"]

// marvelheroes.push(dc)
// console.log(marvelheroes);
// console.log(marvelheroes[3][1]);

// const newarr=marvelheroes.concat(dc);
// console.log(newarr);

// const allnewheroes = [...marvelheroes, ...dc]
// this is called as spreading it is used in the place of concat like concat it also add two arrays
// and it also has a advantage we can give no of values to it how many value we want
const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = anotherarray.flat(Infinity)
console.log(realanotherarray);
// flat property helps us to sort a array we can say in another language that it converts a nested array into a single array

console.log(Array.from("Abhinav"))
console.log(Array.from({name: "abhinav"}));
// it is interesting since it returns a empty array until we do not specify it that for what  he has to make an array
let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
