//Smolest Number in array

function smallestNumber(numbers){
    let smallest=numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element=numbers[i];
        if(element<smallest){
            smallest=element;
        }
    }
    return smallest;
}
const ages=[32,24,56,45,96,27,76];
const result=smallestNumber(ages);
console.log('The smallest number is: ', result);