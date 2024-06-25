let userBMI = bmiCalculator(65, 1.8)
function bmiCalculator(weight, height) {
    bmi = Math.floor(weight / (height*height));
    return bmi;
}
console.log(bmi)