const animalButtons = ['cow', 'donkey', 'monkey', 'pig'];
let cpuArray = [];
let userChoiceArray = [];
let level = 0;
let levelNum = document.querySelector('#numOfLevels');
let playerScore = document.querySelector('#playerScore');
let ps = 0; // player score variable.

// Sound config
const playSound = (name) => {
    var audio = new Audio("./resources/sounds/" + name + ".mp3");
    audio.play();
};

// Function to make CPU choice and add to the sequence
const cpuChoice = function() {
    setTimeout(() => {
        cpuArray.push(animalButtons[Math.floor(Math.random() * 4)]);
        playSequence();
    }, 1000);
};

// This iterates the cpuArray and provides visual feedback
const playSequence = function() {
    for (let i = 0; i < cpuArray.length; i++) {
        setTimeout(() => {
            playSound(cpuArray[i]);
            $('#' + cpuArray[i]).fadeOut(250).fadeIn(250);
        }, i * 1000);
    }
};

// Player functionality
$(".btn").on("click", function () {
    let userChosenAnimal = this.id;
    userChoiceArray.push(userChosenAnimal);
    playSound(userChosenAnimal);
    animatePress(userChosenAnimal);
    checkUserInput();
});

// Adds visual effect when user clicks image
const animatePress = (userChosenAnimal) => {
    $('#' + userChosenAnimal).addClass("pressed");
    setTimeout(() => {
        $('#' + userChosenAnimal).removeClass("pressed");
    }, 100);
};

// Check to see if both arrays are the same length and match
const checkUserInput = () => {
    if (userChoiceArray.length === cpuArray.length) {
        let match = true;
        for (let i = 0; i < cpuArray.length; i++) {
            if (cpuArray[i] !== userChoiceArray[i]) {
                match = false;
                window.alert(`Game Over! You managed to get to level ${level} and achieved a high score of ${ps}`);
                break;
            }
        }
        if (match) {
            level += 1;
            ps += 50;
            levelNum.innerHTML = level;
            playerScore.innerHTML = ps;
            userChoiceArray = [];
            setTimeout(cpuChoice, 1000);
        } else {
            console.log('You input the wrong sequence');
            level = 0;
            ps = 0;
            levelNum.innerHTML = level;
            playerScore.innerHTML = ps;
            userChoiceArray = [];
            cpuArray = [];
        }
        console.log(`This is level: ${level}`);
    }
};

// Initialise game start
const startGame = document.querySelector('#startGameBtn'); 
startGame.addEventListener('click', () => {
    level = 0;
    ps = 0;
    userChoiceArray = [];
    cpuArray = [];
    cpuChoice(); // Call this function to start the sequence
});
