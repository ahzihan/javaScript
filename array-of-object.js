const phones=[
    {name:'Samsung j7', price: 23000, camera: 13, ram:2},
    {name:'Xiaomi note10', price: 22000, camera: 16, ram:4},
    {name:'Realme c25s', price: 15000, camera: 13, ram:4},
    {name:'Nokia n73', price: 25000, camera: 8, ram:2},
    {name:'Walton H8 pro', price: 8000, camera: 8, ram:3}
];

let cheapest=phones[0];
for(let phone of phones){
    if(phone.price<cheapest.price){
        cheapest=phone;
    }
}
console.log(cheapest);