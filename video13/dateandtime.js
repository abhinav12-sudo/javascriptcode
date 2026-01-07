// Dates

let mydate = new Date()
// console.log(mydate.toString());//Wed Jan 07 2026 14:54:48 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString());//Wed Jan 07 2026
// console.log(mydate.toLocaleString());//1/7/2026, 2:55:26 PM
// Date is of a object datatype

let mycreateddate = new Date(2023,0,23)
let mycreateddate1 = new Date(2023,0,23,5,3)
// console.log(mycreateddate.toDateString());
// months started from 0 like january for 0 february for 1

let mycreateddate2 = new Date("2023-01-14")

let mytimestamp = Date.now()

// console.log(mytimestamp);//1767777980643
// console.log(mycreateddate2.getTime());1673654400000
// console.log(Math.floor(Date.now()/1000));//1767778021

let newDate= new Date()
// console.log(newDate);2026-01-07T09:27:18.209Z
// console.log(newDate.getMonth());//0
// console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday:"long"
})


