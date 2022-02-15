
function animalCount(miles){
    const first10MilesAnimalDensity=10;
    const second10MilesAnimalDensity=20;
    const third10MilesAnimalDensity=30;
    const first10Miles=10*first10MilesAnimalDensity;
    
        if(miles<=10){
            const firstTotalAnimals=first10Miles;
            return firstTotalAnimals;
        }
        else if(miles<=20){
            const second10Miles=(miles-10)*second10MilesAnimalDensity;
            const secondTotalAnimals=first10Miles+second10Miles;
            return secondTotalAnimals;
        }
        else{
            const second10Miles=10*second10MilesAnimalDensity;
            const third10Miles=(miles-20)*third10MilesAnimalDensity;
            const thirdTotalAnimals=first10Miles+second10Miles+third10Miles;
            return thirdTotalAnimals;
        }
}

const miles=animalCount(35);
console.log('Total Animals : ', miles);