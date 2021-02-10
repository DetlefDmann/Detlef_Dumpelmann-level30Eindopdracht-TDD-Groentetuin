
//takes an object with name and yield
const getYieldForPlant = (plant) => {
    return plant.yield ;
};

 //takes an object with crop and numCrops
const getYieldForCrop = (input) => {
    return input.numCrops*getYieldForPlant(input.crop);
};
 

 //takes an array of objects with crop and numCrops
const getTotalYield = ({crops}) => crops.map(crop => getYieldForCrop(crop)).reduce((total, input) => {
    return total + input
});

const getCostForPlant = (plant) => {
    return plant.cost ;
}

//takes an object with crop and numCrops
const getCostsForCrop = (input) => {
    return input.numCrops*getCostForPlant(input.crop) ;
}  
//takes an object with crop and numCrops
const getRevenueForCrop = (input) => {
    return input.numCrops*input.crop.yield*input.crop.salePrice
}
 
 module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop 
 }