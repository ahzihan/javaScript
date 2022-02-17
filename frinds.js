//problem:4 first odd name length of friend name display
function oddFriend( data ) {
    let oddLength = [];
    for ( let i = 0; i < data.length;i++ ) {
        let element = data[ i ];
        if ( element.length % 2 != 0 ) {
            oddLength = element;
            break;
        }
        
    }
    return oddLength;

 }

const friendsList = [ 'Alamin', 'Arif Adnan', 'Bijoy Debnath', 'Emon', 'Md Akbar Hossain' ];
const oddNameCount = oddFriend( friendsList );
console.log( oddNameCount.length );