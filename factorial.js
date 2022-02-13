// var fact=1;
// for(var i=1;i<=4;i++){
//     fact=fact*i;
// }
// console.log('Factorial Result is : ', fact);

// function getFactorial(number){
//     let fact=1;
//     for(let i=1; i<=number;i++){
//         fact *= i;
//     }
//     return fact;
// }
// let result = getFactorial(10);
// console.log(result);

function getFactorial(number){
    let fact=1;
    for(let i=number; i>=1;i--){
        fact *= i;
    }
    return fact;
}
let result = getFactorial(4);
console.log(result);