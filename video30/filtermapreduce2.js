const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc + currval

// },0)
const mytotal = mynums.reduce((acc,curr)=> acc+curr,0)
console.log(mytotal);


const shoppingcart = [
    {
        itemname: "jscourse",
        price: 2999
    },
    {
        itemname: "datascience",
        price: 3999
    },
    {
        itemname: "python",
        price: 4999
    },
    {
        itemname: "aiml",
        price: 5999
    },
]

const total = shoppingcart.reduce((acc,item)=>acc + item.price,0)
console.log(total);