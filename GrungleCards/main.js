// Element Selectors for How To Play
const htpButton = document.getElementById('howToPlay');
const htpDescription = document.getElementById('htpContainer');

// Add click event listener to htp button
htpButton.addEventListener('click', function(){
    if(htpDescription.style.display === 'none'){
        htpDescription.style.display = 'block';
    } else {
        htpDescription.style.display = 'none';
    }
});

// Define suits and values
const transparentReverse = [
    { name: 'Reverse', img: 'images/CardReverse.png'},
    { name: 'Transparent', img: 'images/CardTransparent'},
]
const suits = [
    { name: 'Dragon', img: 'images/DragonCard.png'},
    { name: 'Kraken', img: 'images/KrakenCard.png'},
    { name: 'Unicorn', img: 'images/UnicornCard.png'}
];
const values = ['1','2','3','4','5','6','7'];

// Initialise empty array to hold the deck of cards
let deck = [];

// Create the deck
for (const suit of suits) {
    for (const value of values) {
        deck.push({ suit: suit.name, value: value, img: suit.img});
    }
}

// Shuffle the deck
const shuffleDeck = (deck) => {
    for (let i = deck.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Shuffle Board button - temp
const shuffleBtn = document.getElementById('refreshBoard');
shuffleBtn.addEventListener('click', () => {
    // Remove old elements
    gridSquares.forEach(gridSquare => {
        while (gridSquare.firstChild) {
            gridSquare.removeChild(gridSquare.firstChild);
        }
    });

    shuffleDeck(deck);
    generateBoard();

})

// Get Grid Squares id
const gridSquares = document.querySelectorAll('.gridSquare')

function generateBoard() {
    gridSquares.forEach((gridSquare, index) => {

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        const cardImg = document.createElement('img');
        cardImg.setAttribute('src', deck[index].img);

        const cardValue = document.createElement('div');
        cardValue.classList.add('card-value');
        cardValue.textContent= deck[index].value;

        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(cardValue);

        gridSquare.innerHTML = '';
        gridSquare.appendChild(cardContainer);
        

    })
}

shuffleDeck(deck)
console.log(deck);