 const getYieldForPlant = (plant) => {
     return plant.yield
 };

 
 const getYieldForCrop = (input) => {
     return input.numCrops*getYieldForPlant(input.crop)
 };
 

 
 const getTotalYield = (crops) => {
     return "hi"
 }; 

 module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield 
 }