const moogleShop = {
    elixirs: {
        inventory: 34,
        price: 150
    },
    healthPotions: {
        inventory: 21,
        price: 100
    },
    manaPotions: {
        inventory: 8,
        price: 120
    },
    scrollOfTownPortal: {
        inventory: 12,
        price: 500
    }
};
// Check shop inventory, total order kupo
const checkMogShopInv = (order) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            const itemsArr = order.items;
            let inStock = itemsArr.every(item => moogleShop[item[0]].inventory >= item[1]);

            if (inStock) {
                let total = 0;
                itemsArr.forEach(item => {
                    total += item[1] * moogleShop[item[0]].cost
                });
                console.log(`All items in stock! Kupo! The total cost of your order is ${total}, kupo!`);
                resolve([order, total]);
            } else {
                reject(`I don't have those item to sell to you Kupo! Take a hike!`);
            }
        }, mognetTimeDelay());
    });
};
const mooglePay = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let hasEnoughMoney = order.mogCreditBalance>= total;
            if (hasEnoughMoney) {
                console.log(`Payment processed with mooglePay. Generating your moogle tracking number...`);
                let trackingNum = mognetPostalNumber();
                resolve([order, trackingNum]);
            } else {
                reject(`Cannot pay Kupo! YOu need more mog credits kupo!`)
            }
        },mognetTimeDelay());
    });
};
const postOrder = (responseArray) => {
    const order = responseArray[0];
    const trackingNum = responseArray[1];
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(`Your order has been posted Kupo! Your postal number is: ${trackingNum}.`);
        }, mognetTimeDelay());
    });
};

// This function emulates async operations by generating a random integer for setTimeout()
function mognetTimeDelay() {
    return Math.floor(Math.random() * 3000);
};
// This function acts like a shipping.
function mognetPostalNumber() {
    return Math.floor(Math.random() * 1000000);
};
module.exports = {checkMogShopInv, mooglePay, postOrder};
