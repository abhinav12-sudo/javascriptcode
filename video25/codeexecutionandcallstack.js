// Javascript execution context
// When we make a javascript file firstly a global execution context is made.
// and the global execution context put it in the "this".
// in browser we have global execution context as there the value of this comes 
// as windows.
// and then we have function execution context.
// and then we have also a eval execution context.
// the code runs in two phases---->>>
// MEMORY CREATION PHASE(Creation phase)--->>SO IN MEMORY CREATION PHASE ONLY THE MEMORY IS ALLOCATED
// EXECUTION PHASE----->>BUT IN THE EXECUTION PHASE THE CODE EXECUTES.
let val1 = 10
let val2 = 5
function addnum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)

// Step1--> Global execution is allocated to "this"
// Step2--> Memory Phase---> val1=undefined, val2 =undefined, addnum = definition of function , result1 = undefined , result2 = undefined
// Step3--> Execution Phase----> val1 = 10, val2 = 5 , addnum ={new variable environment and execution thread
// and now the memory phase and execution phase again executes for addnum, MEMORY PHASE----> val1=undefined , val2=undefined, total= undefined   EXECUTION PHASE--->> num1 = 10,num2=5,total=15}
// so the total returns to the global execcution context when our addnum context works completed then it deleted the nested context or we can say it deleted the box.
// result1 = 15
//now for result2 there defined a 
// {new variable environment and thread. Phase1--> Memory phase val1=undefined,val2=undefined,total=undefined Execution phase--->> val1=10,val2=2,total=12}
// result2=12
// this process works on the stack base as these follows first in first out concept

