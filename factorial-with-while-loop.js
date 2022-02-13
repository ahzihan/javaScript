// function getFactorial(number){
//     let fact=1;
//     let i=1;
//     while(i<=number){
//         fact *= i;
//         i++;
//     }
//     return fact;
// }
// let result = getFactorial(5);
// console.log(result); 

function getFactorial(number){
    let fact=1;
    let i=number;
    while(i>=1){
        fact *= i;
        i--;
    }
    return fact;
}
let result = getFactorial(5);
console.log(result); 