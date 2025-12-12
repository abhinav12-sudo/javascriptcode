function calculateprice(...num1){
    return num1

}
// if we give ...(threedots) before the parameters then it takes as many values as you want and this is known as rest it is like spread but here it is called as rest
function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500,2000));
// here we first define the val1 and val2 but we are returning num1 and we also give rest operator to the num1
// so we get here an array of 500 and 2000 because val1 and val2 have taken the value 200 and 400 respectively so num1 gets 
// all the remaining values as it have the rest.
const user ={
    username: "Abhinav",
    price: 199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username: "sam",
    price: 399
})
const mynewarray = [200,400,600,100]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([100,200,300,400]));

