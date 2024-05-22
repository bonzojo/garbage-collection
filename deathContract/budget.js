const savingsPerYear = 777 * 12;
console.log(savingsPerYear);
const tenYears = savingsPerYear * 10;
console.log(tenYears);

const avgMonthlyWage = 2740;
const avgYear = avgMonthlyWage * 12;
console.log(avgYear);

//Death & Taxes

const lifespan = 80;
const currentAge = 35;
const deathDifference =  lifespan - currentAge;
console.log(deathDifference);

function tax(wage) {
    let incomeTax = wage / 100 * 40;
    return incomeTax;
}
console.log(tax(avgYear));