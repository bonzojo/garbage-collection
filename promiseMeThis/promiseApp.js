const {checkInventory} = require('./checkPromise.js');

const order = [['bottlesOfMilk', 1], ['moviePosters', 2]];

const handleSuccess = (value) => {
    console.log(value);
};
const handleFailure = (value) => {
    console.log(value);
}
checkInventory(order).then(handleSuccess).catch(handleFailure);