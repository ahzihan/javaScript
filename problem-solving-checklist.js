//1.conversation
function feetToInch(feet){
    const inch=12*feet;
    return inch;
}

const Totalinch=feetToInch(10);
console.log(Totalinch);


//2.conversion
function centimeeterToMeter(centimeeter){
    const meeter=centimeeter*0.01;
    return meeter;
}

const meeter=centimeeterToMeter(1000);
console.log(meeter);


//3.calculation
function pageRequirments(book1,book2,book3){
    let book1Page=100*book1;
    let book2Page=100*book2;
    let book3Page=100*book3;
    let totalPages=book1Page+book2Page+book3Page;
    return totalPages;

}
const totalPages=pageRequirments(2,3,3);
console.log('Total Pages : ',totalPages); 


//4.friend name lenth in an array
function bestFriend(){}

//5.will stop the loop if the array has any negative number and returns all the posetive number before the negative number

function onlyPosetive(){}