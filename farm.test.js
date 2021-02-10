//const { expect } = require("@jest/globals");
//const { describe } = require("yargs");
const { expect } = require("@jest/globals");
const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

 describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

 describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

 describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("Calculate cost for ten corn crops", () => {
        const corn = {
            name: "corn",
            cost: 1,
        };
        const input = { 
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
    test("Calculate cost for ten tomato crops", () => {
        const tomato = {
            name: "tomato",
            cost: 2,
        };
        const input = { 
            crop: tomato,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(20);
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate revenue for ten tomato crops", () => {
        const tomato = {
            name: "tomato",
            salePrice: 3,
            yield: 4
        };
        const input = { 
            crop: tomato,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(120);
    });
    test("Calculate revenue for zero tomato crops", () => {
        const tomato = {
            name: "tomato",
            salePrice: 3,
            yield: 4
        };
        const input = { 
            crop: tomato,
            numCrops: 0,
        };
        expect(getRevenueForCrop(input)).toBe(0);
    });
});

describe("getProfitForCrop", () => {
    test("Calculate profit for ten tomato crops", () => {
        const tomato = {
            name: "tomato",
            salePrice: 3,
            yield: 4,
            cost:2
        };
        const input = { 
            crop: tomato,
            numCrops: 10,
        };
        expect(getProfitForCrop(input)).toBe(100)
    });
    test("Calculate profit for zero tomato crops", () => {
        const tomato = {
            name: "tomato",
            salePrice: 3,
            yield: 4,
            cost:2
        };
        const input = { 
            crop: tomato,
            numCrops: 0,
        };
        expect(getProfitForCrop(input)).toBe(0);
    });
});

describe("getTotalProfit", () => {
    test("Calculate the total profit for two different crops", () => {
        const corn = {
            name: "corn",
            salePrice: 2,
            yield: 3,
            cost: 1,
        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 10,
            yield: 4,
            cost:3
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({crops})).toBe(99);
    });
    test("Calculate the total profit for no crops", () => {
        const corn = {
            name: "corn",
            salePrice: 2,
            yield: 3,
            cost: 1,
        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 10,
            yield: 4,
            cost:3
        };
        const crops = [
            { crop: corn, numCrops: 0 },
            { crop: pumpkin, numCrops: 0 },
        ];
        expect(getTotalProfit({crops})).toBe(0);
    });
});