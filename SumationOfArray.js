
function arrayTotal(number){
    let sum=0;
    for(let i=0;i<number.length;i++){
        let element=number[i];
        sum=sum+element;
    }
    return sum;
}
let number=[12,54,34,67,56,90,21];
const total=arrayTotal(number);
console.log(total);