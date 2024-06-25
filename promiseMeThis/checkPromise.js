const inventory = {
    bottlesOfMilk: 99,
    moviePosters: 0,
    books: 29,
    brews: ['Chai', 'Dark Roast', 'Americano', 'Yorkshire Tea']
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thanks a bunchsky! Your order is confirmed!`);
            } else {
                reject(`Item is missing! Please see the paper manifest for more accurate results!`);
            }
        }, 1000);
    })
};
module.exports = { checkInventory };