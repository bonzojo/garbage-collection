const {checkMogShopInv, mooglePay, postOrder} = require('./librum.js');

const order = {
    items: [['elixirs', 5], ['scrollOfTownPortal', 2]],
    mogCreditBalance: 45000 
};

checkMogShopInv(order)
.then((resolvedValueArray) => {
    return mooglePay(resolvedValueArray);
})
.then((resolvedValueArray) => {
    return postOrder(resolvedValueArray);
})
.then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});

