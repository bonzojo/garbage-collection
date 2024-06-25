const sfxWalrus = new Audio('./resources/sounds/walrus.mp3');
const sfxSeaLion = new Audio('./resources/sounds/seaLion.mp3');
const sfxDolphin = new Audio('./resources/sounds/dolphin.mp3');
const sfxWhaleBass = new Audio('./resources/sounds/whaleBass.mp3');
const sfxWhaleMid = new Audio('./resources/sounds/whaleMid.mp3');
const sfxWhaleHigh = new Audio('./resources/sounds/whaleHigh.mp3');

const buttons = document.querySelectorAll(".sound").length;

for (let i = 0; i < buttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

    })

    document.addEventListener("keypress", function (event) {

        makeSound(event.key);
    })
};

function makeSound(key) {

    switch(key) {
        case "w":
            sfxWalrus.play();
            break;
        case "s":
            sfxSeaLion.play();
            break;
        case "d":
            sfxDolphin.play();
            break;
        case "j":
            sfxWhaleBass.play();
            break;
        case "k":
            sfxWhaleMid.play();
            break;
        case "l":
            sfxWhaleHigh.play();
            break;
        default: "this should not be seen";

    }
}