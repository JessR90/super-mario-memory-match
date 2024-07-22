console.log("Super Mario Match Game");


/*-------------------------------- Constants --------------------------------*/
const backgroundMusic = new Audio("assets/audio/backgroundmusic.mp3")
const cardMatch = new Audio("assets/audio/cardmatch.mp3")
const cardMiss = new Audio("assets/audio/cardmiss.mp3")
const cardSelect = new Audio("assets/audio/cardselect.mp3")
const chestMatch = new Audio("assets/audio/chestmatch.mp3")
const gameOver = new Audio("assets/audio/gameover.mp3")
const gameWon = new Audio("assets/audio/gamewon.mp3")

/*---------------------------- Variables (state) ----------------------------*/
let table
let cardChoice
let deck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]
let win
let loss
let card1
let card2
let dificultyMsg
let playAgainMsg

/*------------------------ Cached Element References ------------------------*/
const easyButton = document.getElementsByClassName(".easy")
console.log(easyButton);
const classicButton = document.getElementsByClassName(".classic")
console.log(classicButton);
const hardButton = document.getElementsByClassName(".hard")
console.log(hardButton);
const resetButton = document.getElementsByClassName(".reset")
console.log(resetButton);

/*-------------------------------- Functions --------------------------------*/
const play = (event) => {
    console.log(event.target);
}

var loader = document.querySelector(".startGame")
window.addEventListener("click", vanish);

function vanish() {
  loader.classList.add("disppear");
}

deck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]

for(let i = 0; i < deck.length; i++) {
    let temp = deck[i];
    let r = math.floor(math.random() * deck.length);
    deck[i] = deck[r]
    deck[r] = temp;
}
console.log(deck);











/*----------------------------- Event Listeners -----------------------------*/
document.querySelector(".easy").addEventListener("click", play)
document.querySelector(".classic").addEventListener("click", play)
document.querySelector(".hard").addEventListener("click", play)
document.querySelector(".reset").addEventListener("click", play)





