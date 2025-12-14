// switch case statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case matched");
        break;
}
// in switch case statement if a case matches and you do not give break function then after that all cases executed but the
// default case do not executed other than default case all cases will be executed.