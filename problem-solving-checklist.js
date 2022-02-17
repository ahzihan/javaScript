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
function bestFriend( data ) { 
    let longName = data[0];
    for ( let i = 0; i < data.length;i++ ) {
        let element = data[ i ];
        if ( element > longName ) {
            longName = element;
        }
    }
    return longName;
}

const friends = [ 'Alamin', 'Arif Adnan', 'Masum Billah', 'Emon', 'Bijoy Debnath','Md Akbar Hossain' ];
const friend=bestFriend(friends);
console.log('Friend Name is : ',friend); 

//5.will stop the loop if the array has any negative number and returns all the posetive number before the negative number

function onlyPosetive( data ) {
    let posetiveNumber = [];
    for ( let i = 0; i < data.length; i++ ){
        let element = data[ i ];
        if ( element > 0 ) {
            posetiveNumber[i] = element;
        } else {
            break; 
        }
        
    }
    return posetiveNumber;
 }
const values = [ 20, 40, 45, 12, 5, -7, 10, 30 ];
const value = onlyPosetive( values );
console.log( value );