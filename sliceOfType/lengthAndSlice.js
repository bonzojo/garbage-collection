// Length & Slice
let charCounter = document.getElementById("charCount");
const tweetSlicer = document.getElementById("sliceTweetBtn");
const userTweetData = document.getElementById("userData");
const elon = document.getElementById("elon");
const tweetMaxLength = 139;
let userTweet = prompt('Please input your tweet...');

alert(`If this was Twitter, your tweet would be ${userTweet.length} characters long, and you would have ${tweetMaxLength - userTweet.length} characters remaining before Elon Musk hunts you down!`);

userTweetData.addEventListener("input", updateChar);
function updateChar() {
    const characterCount = userTweetData.value.length;
    charCounter.textContent = characterCount;

}

userTweetData.value=userTweet;
charCounter.innerHTML=userTweet.length;

function sliceTweet() {
    userTweetData.value=userTweet.slice(0,tweetMaxLength)
    charCounter.innerHTML=userTweet.length;
}
tweetSlicer.addEventListener("click", sliceTweet);

if (userTweet.length > tweetMaxLength) {
    elon.src = "https://s.abcnews.com/images/Business/elon-musk-file-gty-jef-220711_1657563938913_hpMain_16x9_992.jpg";
} else if (userTweet.length <= tweetMaxLength) {
    elon.src = "https://fortune.com/img-assets/wp-content/uploads/2024/04/GettyImages-2074368931_9d4d00-e1714155461115.jpg?w=1440&q=75";
}