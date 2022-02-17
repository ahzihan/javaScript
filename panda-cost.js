//problem:2 calculation  3-parameeter, singara-7tk, somucha-10tk, jilapi-15tk then total amount return
function pandaCost( singara, somucha, jilaphi ) {
    let singleSingara = 7;
    let singleSomucha = 10;
    let singleJilaphi = 15;
    let singaraPrice = singara * singleSingara;
    let somuchaPrice = somucha * singleSomucha;
    let jilaphiPrice = jilaphi * singleJilaphi;
    let totalAmount = singaraPrice + somuchaPrice + jilaphiPrice;
    return totalAmount;

 }

let totalAmount = pandaCost( 5, 8, 5 );
console.log( 'Total Panda Cost : ',totalAmount );