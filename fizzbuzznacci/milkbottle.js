const milkBottlePrice = 1.4;

function buyMilk(budget) {
    let amountOfBottles = Math.floor(budget / milkBottlePrice);
    let change = (budget % milkBottlePrice).toFixed(2);
    console.log(`Your budget is $${budget}`);
    console.log(`The Milk costs $1.40 a bottle.`)
    console.log(`You have bought ${amountOfBottles} bottles and your change is $${change}p`);
}
buyMilk(139); // 99 Bottles of Milk on the Wall. 99 Bottles of Milk...
console.log('-----------------------------------------------------')
let amountOfMilk = 99;
let i = 99;
while(i > 0) {
    console.log(`${amountOfMilk} bottles of Milk on the wall. ${amountOfMilk} bottles of Milk!`)
    console.log(`One fell off and smashed on the ground`)
    amountOfMilk -= 1;
    console.log(`Now theres only ${amountOfMilk} bottles of Milk on the wall!`)
    i--;
}