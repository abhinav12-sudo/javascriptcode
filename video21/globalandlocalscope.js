

if(true){
    let a = 10
    const b = 20
    var c = 30

}
// there is a problem in the block scope because when we are declaring a
// b and c we are declaring them with different methods but const and let are same
// they only work for their local scope but when we are declaring a variable with var 
// then  a problem occur because it is declaring globally as it prints the value beyond the
// curly braces also so this is a major problem that's why we avoid this method to introduce variables
// what we are writing under the if statement this is known as local or block scope but what we are writing
// outside the if statement that is known as global scope
// console.log(a);
// console.log(b);
console.log(c);