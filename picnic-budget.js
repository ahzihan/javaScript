//problem:3 1st-100 jon=5000tk, 101-200 jon=4000tk, 201-upper=3000tk then total return
function picnicBudget( person ) {
    let first100 = 5000;
    let second100 = 4000;
    let upper200 = 3000;
    
    if ( person <= 100 ) {
        let first100Budget = first100 * person;
        let first100Amount = first100Budget;
        return first100Amount;
    }
    else if ( person <= 200 ) {
        let first100Budget = first100 * 100;
        let second100Budget = ( person - 100 ) * second100;
        let second100Amount = first100Budget + second100Budget;
        return second100Amount;
    }
    else {
        let first100Budget = first100 * 100;
        let second100Budget = second100 * 100;
        let upper200Budget = ( person - 200 ) * upper200;
        let totalAmount = first100Budget + second100Budget + upper200Budget;
        return totalAmount;
    }
 }

let totalAmount = picnicBudget( 350 );
console.log('Total Picnic Budget : ', totalAmount );