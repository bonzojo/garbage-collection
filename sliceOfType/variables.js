//Variables

const thisIsAConstantVariable = 'x = I am a constant Variable. You cannot change my value!';
let thisIsAVariable = 'y = Am I alive?';
console.log(thisIsAConstantVariable);
setTimeout(() => {
    console.log(thisIsAVariable)
}, 2000);

setTimeout(() => {
    thisIsAVariable = 'y = No I am just a computer!?'
    console.log(thisIsAVariable)
}, 3500);

setTimeout(() => {
    thisIsAVariable = 'y = No. I am actually a mutable variable. My value can be reasigned unlike my cousin Constant';
    console.log(thisIsAVariable)
}, 6000);

setTimeout(() => {
    console.log(thisIsAConstantVariable);
}, 10000)

setTimeout(() => {
    thisIsAVariable = 'y = I think he is a bit stuck in his ways!'
    console.log(thisIsAVariable)
},12000)