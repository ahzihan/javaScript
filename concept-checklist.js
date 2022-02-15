
//1. write 3 variables(number,string,boolean)

var num1=32;
var string1='Md Akbar Hossain';
var age=true;

//2. 2 variables (let,const);

let first=20; //Changable
first=30;
const roll=10101; //unchangable

//3.Simple Math Operation +,-,*,/,%

let number1=20;
let number2=5;
const add=number1+number2;
console.log(add);
const sub=number1-number2;
console.log(sub);
const mul=number1*number2;
console.log(mul);
const div=number1/number2;
console.log(div);
const mod=number1%number2;
console.log(mod);

//4.comparison among 2 variable

const x=20;
const y=30;
const z=25;
if(x>y && x>z){
    console.log("Largest number is X");
}
else if(y>x && y>z){
    console.log("Largest number is Y");
}
else{
    console.log("Largest number is Z");
}

//5.Two conditions, case-1: fulfill both conditions. case-2: fulfill at least one Condition
var name='samsung';
var color='yellow';
var price=12000;
var ram=4;
if((color!='yellow') && (price<=12000)){
    console.log('I do not like this');
}
else if((color=="yello") || (ram==4)){
    console.log('Buy this Phone Now');
}

//6.while loop to display 7 to 19 all numbers and display odd numbers including 7 to 19 .
let i=7;
while(i<=19){
    //console.log(i);
    if(i%2 !=0){
        console.log(i);
    }
    i++;
}
//7.declare an array, number of elements. update or change 4th position element and add or remove elements. check whether a specific value exists in the array.
 const numbers=[12,45,43,65,82,34,67,87,90];
 console.log(numbers);
 numbers[4]=100;
 console.log(numbers);
 numbers.push(29);
 numbers.push(79);
 console.log(numbers);
 numbers.pop()
 console.log(numbers);

 function SearchValue(numbers){
    let largest=numbers[5];
    for(let i=0;i<numbers.length;i++){
        let element=numbers[i];
        if(element=largest){
            largest=element;
        }
    }
    return largest;
}
const result=SearchValue(numbers);
console.log('The Search Value is: ', result);

//8. use any for loop to display every elements of an array.
const ages=[34,32,23,54,25,67,40];
for(let i=0; i<ages.length;i++){
    console.log(ages[i]);
}

//9. you have an array of numbers, display only the numbers bigger than 80.
function biggerNumber(numbers){
    let largest=numbers[0];
    for(let i=0; i<numbers.length;i++){
        let element=numbers[i];
        if(element>largest){
            largest=element;
        }
    }
    return largest;
}
const list=[80,30,40,20,90,50,70,100,60];
const bigNumber=biggerNumber(list);
console.log('The Largest Number is: ',bigNumber);

//10.write a function that takes three numbers and returns the multiplication of the three numbers.
function multiflyThreeNumbers(num1,num2,num3){
const multi=num1*num2*num3;
return multi;
}
const multiResult=multiflyThreeNumbers(2,5,9);
console.log('Multiflication : ',multiResult);

//11.declare an object and change any property of that

const mobile={
    name:'Xiaomi',
    color: 'lightBlue',
    ram: '8gb',
    price:28000
}
console.log(mobile);
mobile.color='Black';
mobile.ram='4gb';
console.log(mobile);
