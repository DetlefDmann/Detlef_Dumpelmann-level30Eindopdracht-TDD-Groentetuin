const { expect } = require("@jest/globals");
const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");


// Don't change the code below this line !!!!!!!
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

//don't change code above this line !!!!!

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

//code for steps six and beyond.
// getYieldForPlant with environment factors
describe("getYieldForPlant with environment factor sun", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
        },
      };
    test("Get yield for plant with environment factor sun low", () => {
        const environmentFactors = {
            sun: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
    test("Get yield for plant with environment factor sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });
});
describe("getYieldForPlant with environment factor wind", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          wind: {
            low: -50,
            medium: 0,
            high: 50,
          },
        },
      };
    test("Get yield for plant with environment factor wind low", () => {
        const environmentFactors = {
            wind: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
    test("Get yield for plant with environment factor wind high", () => {
        const environmentFactors = {
            wind: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });
});
describe("getYieldForPlant with environment factor soil", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          soil: {
            low: -50,
            medium: 0,
            high: 50,
          },
        },
      };
    test("Get yield for plant with environment factor soil low", () => {
        const environmentFactors = {
            soil: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
    test("Get yield for plant with environment factor soil high", () => {
        const environmentFactors = {
            soil: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });
});

// getYieldForCrop with environment factors

 describe("getYieldForCrop with environment factor sun", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
        },
      };
    test("Get yield for crop, sun low", () => {
        const environmentFactors = {
            sun: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input,environmentFactors)).toBe(150);
    });
    test("Get yield for crop, sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(450);
    });
});
// getYieldForCrop with multiple factors

 describe("getYieldForCrop with multiple environment factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          soil: {
              low: -50,
              medium: 0,
              high: 50,
          },
          wind: {
              low: -50,
              medium: 0,
              high: 50,
          }
        },
      };
    test("Get yield for crop, sun low soil high", () => {
        const environmentFactors = {
            sun: "low",
            soil: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input,environmentFactors)).toBe(225);
    });
    test("Get yield for crop, sun high soil low", () => {
        const environmentFactors = {
            sun: "high",
            soil: "low"
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(225);
    });
    test("Get yield for crop with sun high, soil high, wind low", () => {
        const environmentFactors = {
            sun: "high",
            soil: "high",
            wind: "low"
        };
        const input = {
            crop: corn,
            numCrops: 20,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(675);
    });
});

//getProfitForCrops with environment factors

describe("getProfitForCrop with multiple environment factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        salePrice: 6,
        cost: 2,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          soil: {
              low: -50,
              medium: 0,
              high: 50,
          },
          wind: {
              low: -50,
              medium: 0,
              high: 50,
          }
        },
      };
    test("Get profit for crop, sun low soil high", () => {
        const environmentFactors = {
            sun: "low",
            soil: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getProfitForCrop(input,environmentFactors)).toBe(1330);
    });
    test("Get profit for crop, sun high soil low", () => {
        const environmentFactors = {
            sun: "high",
            soil: "low"
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(1330);
    });
    test("Get Profit for crop with sun high, soil high, wind low", () => {
        const environmentFactors = {
            sun: "high",
            soil: "high",
            wind: "low"
        };
        const input = {
            crop: corn,
            numCrops: 20,
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(4010);
    });
});

// get total Profit with environment factors

describe("getTotalProfit with environment factors", () => {
    test("Calculate the total profit for two different crops with env. factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            salePrice: 6,
            cost: 2,
            factors: {
              sun: {
                low: -50,
                medium: 0,
                high: 50,
              },
              soil: {
                  low: -50,
                  medium: 0,
                  high: 50,
              },
              wind: {
                  low: -50,
                  medium: 0,
                  high: 50,
              }
            },
          };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 10,
            yield: 4,
            cost:3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                }
            },
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "high",
            soil: "high",
            wind: "low"
        };
        expect(getTotalProfit({crops}, environmentFactors)).toBe(2059);
    });
    test("Calculate the total profit for crops with other env factors", () => {
        const corn = {
            name: "corn",
            salePrice: 2,
            yield: 3,
            cost: 1,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
                soil: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                }
              },
        };
        const pumpkin = {
            name: "pumpkin",
            salePrice: 10,
            yield: 4,
            cost:3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                }
            },
        };
        const crops = [
            { crop: corn, numCrops: 20 },
            { crop: pumpkin, numCrops: 10 },
        ];
        const environmentFactors = {
            sun: "medium",
            soil: "medium",
            wind: "medium"
        };
        expect(getTotalProfit({crops},environmentFactors)).toBe(470);
    });
});
