const imgArray = [
    './testImgs/earth0.png',
    './testImgs/earth1.png',
    './testImgs/earth2.png',
    './testImgs/earth3.png',
    './testImgs/earth4.png',
    './testImgs/earth5.png',
    './testImgs/earth6.png',
    './testImgs/earth7.png',
    './testImgs/earth8.png',
    './testImgs/earth9.png',
    './testImgs/earth10.png',
    './testImgs/earth11.png'
];
let index = 0;
let animPlay = false;
let intervalId = null;

let money = 0;

const saverInput = document.getElementById('saverInput');
const moneyDisplay = Number(saverInput.value);


let numDays = 0;
let numWeeks = 0;
let numMonths = 0;
let numYears = 0;

const toggler = document.getElementById('btnToggle');
toggler.addEventListener('click', () => {

    animPlay = !animPlay;
    if (animPlay) {
        intervalId = setInterval(imgUpdate, 50);
    } else {
        clearInterval(intervalId);
    }
});

function imgUpdate() {

    document.getElementById('image').src = imgArray[index];
    document.getElementById('days').innerHTML = numDays;
    document.getElementById('weeks').innerHTML = numWeeks;
    document.getElementById('months').innerHTML = numMonths;
    document.getElementById('years').innerHTML = numYears;
    document.getElementById('moneyAmount').innerHTML = money;
    index = (index + 1) % imgArray.length;
    if(index === 11){
        money+=moneyDisplay; //The average yearly salary for a web developer in the uk is £31,892.
        numDays+=1;
        numWeeks = Math.floor(numDays/7);
        numMonths = Math.floor(numDays / 30);
        numYears = Math.floor(numDays/365);
    }
}
