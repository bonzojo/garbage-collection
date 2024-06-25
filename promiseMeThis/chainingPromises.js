checkInventory(order).then((resolvedValueArray)=> {
    return processPayment(resolvedValueArray);
})
.then((resolvedValueArray)=> {
    return shipOrder(resolvedValueArray);
})
.then((successMessage)=> {
    console.log(successMessage);
});
/*
A common mistake is to nest promises instead of
chaining them together. Above is best practise.
*/