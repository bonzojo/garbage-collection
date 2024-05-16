// surreal sentences
//------------------
const colorArray = [
    'red', 'blue', 'green', 'yellow', 'gold', 'pink', 'grey', 'orange', 'white', 'purple', 'aqua', 'brown', 'cornflowerblue', 'chocolate', 'coral', 'burlywood', 'crimson', 'cyan'
];

const fontArray = [
    'Times New Roman', 'Verdana', 'Garamond', 'Arial', 'Impact', 'Georgia', 'Comic Sans MS', 'Futura', 'Tahoma', 'Trebuchet', 'Courier New', 'monospace'
];

// Three sets of Arrays... Noun, Verb and Adjective. Picked at random from the array and concatenated into a string and displayed on the html.
const nounArray = [
    'apple', 'banana', 'cake', 'donkey', 'elephant', 'fedora', 'guitar', 'house', 'igloo', 'jacket', 'key', 'lamp', 'monkey', 'nest',
    'orange', 'pizza', 'queen', 'robot', 'sun', 'tree', 'umbrella', 'violin', 'whale', 'xylophone', 'yak', 'zebra' 
];
const verbArray = [
    'approached', 'built', 'climbed', 'danced', 'echoed', 'flew', 'grew', 'hopped', 'investigated', 'jumped', 'kicked', 'laughed',
    'made', 'navigated', 'observed', 'played', 'questioned', 'ran', 'swam', 'talked', 'understood', 'ventured', 'wandered', 'x-rayed',
    'yearned', 'zoomed' 
];
const adjectiveArray = [
    'aggressively', 'bravely', 'cautiously', 'daringly', 'excitedly', 'fulfilled', 'gladdened', 'heightened', 'illuminated', 'joyfully',
    'lively', 'magnificently', 'naturally', 'overwhelmingly', 'pleasantly', 'quietly', 'refreshed', 'satisfied', 'thrilled', 'uplifted',
    'vitalized', 'wokeful', 'exorbantly', 'yearly', 'zealously'
];

// randomizer function
let noun;
let verb;
let adj;
const randomSelector = () => {
    // Changing Words
    let noun = nounArray[Math.floor(Math.random() * nounArray.length)];
    let verb = verbArray[Math.floor(Math.random() * verbArray.length)];
    let adj = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    console.log(`The ${noun} ${verb} ${adj}!`);
    document.getElementById("header").innerHTML = `The ${noun} ${verb} ${adj}!`;
    // Changing Color
    let randoColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.getElementById("header").style.color=randoColor;
    // Changing Font
    let randoFont = fontArray[Math.floor(Math.random() * fontArray.length)];
    document.getElementById("header").style.fontFamily = randoFont;
};

