const products=[
    {name:'iphone 13', price:76000},
    {name:'samsung note9', price:70000},
    {name:'Xiaomi note 10', price:32000},
    {name:'Ralme c25s', price:15000},
    {name:'walton laptop', price:22000},
    {name:'Apple watch', price:10000},
    {name:'Dell laptop', price:45000},
    {name:'smart watch', price:3000},
    {name:'Hp-zx', price:50000},
    {name:'Asus laptop', price:60000}
];

//Break
for(const product of products){
    if(product.price<5000){
        break;
    }
    console.log(product);
}

//Continue

for(const product of products){
    if(product.price>50000){
        continue;
    }
    console.log(product);
}