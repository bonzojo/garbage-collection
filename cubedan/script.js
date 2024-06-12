let shodan = [
    './images/1.jpg',
    './images/r2.png',
    './images/2.jpg',
    './images/3.webp',
    './images/r5.png',
    './images/4.png',
    './images/5.webp',
    './images/r6.png',
    './images/6.png',
    './images/dog.jpg',
    './images/7.webp',
    './images/r3.png',
    './images/8.webp',
    './images/9.jpg',
    './images/r4.png',
    './images/10.png',
    './images/11.webp',
    './images/r1.png'
];

let currentIndex = 0;
let userName = '';
let intervalId = null;

function submitName() {
    userName = document.getElementById('nameInput').value;
    if (userName) {
        document.getElementById('message').innerText = `Hello, ${userName}! You pathetic lump of meat and bone.`;
    } else {
        document.getElementById('message').innerText = 'Hello! Welcome to the Matrix.';
    }
    setTimeout(() => {
        startCountdown();
    }, 2000);
}

function startCountdown() {
    document.getElementById('message').innerText = `You are tasked with solving a Rubik's cube, ${userName}. Starting Now...`; // Change Challenge Message as you feel like.
    let nums = 100; // Seconds timer
    
    document.getElementById('timer').innerText = `You have ${nums} seconds left, ${userName}.`;
    if (nums === 0) {
        document.getElementById('currentImage').src = './images/morpheus.jpg';
        clearInterval(intervalId);
        return;
    }

    cycleImages();

    intervalId = setInterval(() => {
        nums--;
        if (nums > 0) {
            document.getElementById('timer').innerText = `You have ${nums} seconds left, ${userName}.`;
        } else {
            document.getElementById('timer').innerText = `Time is up, ${userName}.`;
            clearInterval(intervalId);
            document.getElementById('currentImage').src = './images/morpheus.jpg';
            clearInterval(imgInterval);
            currentImage.style.borderRadius = 0;
            currentImage.style.
            currentImage.style.position = absolute;
            currentImage.style.top = '25%';
            currentImage.style.left = '25%';
            currentImage.style.width = '50vw';
            currentImage.style.height = "70vh";
            currentImage.style.objectFit = "fill";
        }
    }, 1000);
}



function cycleImages() {
    imgInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % shodan.length;
        document.getElementById('currentImage').src = shodan[currentIndex];
        const borderRadiusValue = Math.floor(Math.random() * 51) + '%';
        currentImage.style.borderRadius = borderRadiusValue;
    }, 50);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('nameInput');
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            submitName();
        }
    });
});