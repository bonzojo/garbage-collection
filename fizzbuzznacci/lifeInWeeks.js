function lifeInYears(age) {
const weeks = age * 52;
const days = age * 365;
const months = age * 12;
const oldAge = 70;
const difference = oldAge - age;
const differenceWeeks = difference * 52;
const differenceDays = difference * 365;
const differenceMonths = difference * 12;
function lifeInSevens(age) {
    console.log('Here is a representation of your age in weeks. Each 7 represents a week you have been alive.');
    const sevens = '7 '.repeat(52 * age);
    const sevensWithNewLines = sevens.match(/.{1,100}/g).join('\n');
    console.log(sevensWithNewLines);
};
lifeInSevens(35);
console.log(`You are ${days} days, ${weeks} weeks, and ${months} months old.`)
console.log(`You have ${differenceDays} days, ${differenceWeeks} weeks, and ${differenceMonths} months left until you are ${oldAge}.`)
};
lifeInYears(35);