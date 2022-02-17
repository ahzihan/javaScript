function sum(i){
    console.log(i);
    if(i==1){
        return 1;
    }
    return i+sum(--i);
}
console.log(sum(5));

//Factorial

function factorial(i){
    let fact=1;
    if(i==1){
        return 1;
    }
    return i*factorial(--i);
}
console.log(factorial(5));