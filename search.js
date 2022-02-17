const products=[
    {name:'iphone 13', price:76000},
    {name:'samsung note9', price:70000},
    {name:'Xiaomi note 10', price:32000},
    {name:'Ralme c25s', price:15000},
    {name:'walton laptop', price:22000},
    {name:'Apple watch', price:10000},
    {name:'Dell laptop', price:45000},
    {name:'smart watch', price:50000},
    {name:'Hp-zx', price:50000},
    {name:'Asus laptop', price:60000}
];

function searchProducts(products,serchText){
    const result=[];
    for( let product of products){
        if(product.name.includes(serchText)){
            result.push(product);
        }
    }
    return result;
}
const items=searchProducts(products,'laptop');
console.log(items);