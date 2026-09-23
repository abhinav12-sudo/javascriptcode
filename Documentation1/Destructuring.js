const foo = { bar: 42, name: "Alice" };

const { bar } = foo;
const {name} = foo;

console.log(bar); // 42
console.log(name);

// you can call the function anywhere in the scope whether you reach its intialization or not
// Because it is hoisted.if you are intialising a variable with the help of var then it is also hoisted.
// But it is only intialize not assigned so if you are accessing it before the intialisation it should 
// carry the value undefined but unlike let const it does not throw an reference error.\


// As you all know the rule of intialising a variable--->
//  it must start with a letter, underscore, or dollar sign ($), and can contain alphabetic, numeric, or underscore characters.

// In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.
// With all other operators, JavaScript does not convert numeric values to strings
// An alternative method of retrieving a number from a string is with the + (unary plus) operator. This implicitly performs number conversion, which is the same process as the Number() function.
// (+"1.1") + (+"1.1"); // 2.2