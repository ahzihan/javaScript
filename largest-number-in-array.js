function largestNumber(numbers){
    let largest=numbers[0];
    for(let i=0;i<numbers.length;i++){
        let element=numbers[i];
        if(element>largest){
            largest=element;
        }
    }
    return largest;
}
const ages=[32,24,56,45,96,27,76];
const result=largestNumber(ages);
console.log('The largest number is: ', result);

