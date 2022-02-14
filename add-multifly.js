function woodCalculator(chairQuentity, tableQuantity, bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    const chairWoodQuentity=chairQuentity*perChairWood;
    const tableWoodQuantity=tableQuantity*perTableWood;
    const bedWoodQuentity=bedQuantity*perBedWood;
    const totalWood=chairWoodQuentity+tableWoodQuantity+bedWoodQuentity;
    return totalWood;
}
const total=woodCalculator(2,2,1);
console.log(total);