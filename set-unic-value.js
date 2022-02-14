function removeDuplicate(names){
    let unicName=[];
    for(let i=0; i<names.length; i++){
        let element=names[i];
        if(unicName.indexOf(element)==-1){
            unicName.push(element);
        }
    }
    return unicName;
}
const names=['abul','babul','kabul','habul','jabul','abul','kabul','babul','sabul','babul'];
let result=removeDuplicate(names);
console.log(result);

function checkUnicValue(numbers){
    let unicNumber=[];
    for(let value of numbers){
        if(unicNumber.indexOf(value)==-1){
            unicNumber.push(value);
        }
    }
    return unicNumber;
}

const numbers=[12,54,34,56,12,34,78,90,45,67,34,78,90,21,23,54,69,90,45,64,32,45,23];
const value=checkUnicValue(numbers);
console.log(value);