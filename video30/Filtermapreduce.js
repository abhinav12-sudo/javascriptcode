// const coding = ["js", "python","java","cpp"]


// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);
// so in this way foreach does not return any value it return undefined

// const mynum =[1,2,3,4,5,6,7,8,9,10]

// const newnums = mynum.filter((num)=> num > 4)
// console.log(newnums);
// in this function we can return the values without writing return
const mynum =[1,2,3,4,5,6,7,8,9,10]

// const newnums = mynum.filter((num)=>{
//     return num > 4
// })
// console.log(newnums);
// but here in this function we have to write return because without return it gives us an empty array.
const newnums = []
mynum.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums);
const books = [
    {title: 'Book one', genre: 'fiction', publish:1981 , edition:2004},
    {title: 'Book two', genre: 'non-fiction', publish:1992, edition:2008},
    {title: 'Book three', genre: 'history', publish:1999, edition:2007},
    {title: 'Book four', genre: 'non-fiction', publish:1976, edition:2006},
    {title: 'Book five', genre: 'science', publish:1992, edition:2005},
    {title: 'Book six', genre: 'fiction', publish:1989, edition:2010},
    {title: 'Book seven', genre: 'history', publish:1996, edition:2011},
    {title: 'Book eight', genre: 'science', publish:1992, edition:2012},
    {title: 'Book nine', genre: 'non-fiction', publish:1972, edition:2013},
    {title: 'Book ten', genre: 'fiction', publish:1954, edition:2014},
    {title: 'Book eleven', genre: 'history', publish:1982, edition:2015},
];
let userbooks = books.filter((bk)=> bk.genre === 'history')
userbooks = books.filter((bk)=> bk.publish >= 1990)
console.log(userbooks);

