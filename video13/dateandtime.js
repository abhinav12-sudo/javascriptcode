// Dates

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// Date is of a object datatype

let mycreateddate = new Date(2023,0,23)
let mycreateddate1 = new Date(2023,0,23,5,3)
console.log(mycreateddate.toDateString());
// months started from 0 like january for 0 february for 1

let mycreateddate2 = new Date("2023-01-14")

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(mycreateddate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday:"long"
})


