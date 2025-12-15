const mynums = [1,2,3]

const mytotal = mynums.reduce(function (acc,currval){
    return acc + currval
},0)
console.log(mytotal);