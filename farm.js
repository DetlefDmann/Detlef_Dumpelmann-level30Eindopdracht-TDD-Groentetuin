
//takes an object with name and yield
const getYieldForPlant = (plant, environmentFactors={}) => {
    let totalFactor = 1;
    if (environmentFactors.hasOwnProperty("sun")) {
        if (plant.factors.hasOwnProperty("sun")) {
            totalFactor *= (plant.factors.sun[environmentFactors.sun] + 100)/100;
        };
    }
    if (environmentFactors.hasOwnProperty("wind")) {
        if (plant.factors.hasOwnProperty("wind")){
            totalFactor *= (plant.factors.wind[environmentFactors.wind] + 100)/100;
        };
    }
    if (environmentFactors.hasOwnProperty("soil")) {
        if (plant.factors.hasOwnProperty("soil")){
            totalFactor *= (plant.factors.soil[environmentFactors.soil] + 100)/100;
        };
    }
    return plant.yield*totalFactor ;
};

 //takes an object with crop and numCrops
const getYieldForCrop = (input, environmentFactors) => {
    return input.numCrops*getYieldForPlant(input.crop, environmentFactors);
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
    return getYieldForCrop(input)*input.crop.salePrice ;
}

//takes an object with crop and numCrops
const getProfitForCrop = (input) => {
    return getRevenueForCrop(input) - getCostsForCrop(input);
}

//takes an array of objects with crop and numCrops
const getTotalProfit = ({crops}) => {
    return crops.map(crop => getProfitForCrop(crop)).reduce((total,current) => {
        return total + current ;
    });
}
 
 module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit 
 }