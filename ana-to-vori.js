//problem:1 conversion  16 ana = 1 vori
function anaToVori( ana ) { 
    let totalVori = ana / 16;
    return totalVori;
}

let vori = anaToVori( 32 );
console.log( 'Total Vori : ',vori );