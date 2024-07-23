console.log("Super Mario Match Game");


/*-------------------------------- Constants --------------------------------*/
const backgroundMusic = new Audio("assets/audio/backgroundmusic.mp3")
const cardMatch = new Audio("assets/audio/cardmatch.mp3")
const cardMiss = new Audio("assets/audio/cardmiss.mp3")
const cardSelect = new Audio("assets/audio/cardselect.mp3")
const chestMatch = new Audio("assets/audio/chestmatch.mp3")
const gameOver = new Audio("assets/audio/gameover.mp3")
const gameWon = new Audio("assets/audio/gamewon.mp3")

const deck = ["flower", "flower", "flower", "flower", "mushroom", "mushroom", "mushroom", "mushroom", "star", "star", "star", "star", "tencoin", "tencoin", "twentycoin", "twentycoin", "chest", "chest"]

/*---------------------------- Variables (state) ----------------------------*/
// let table
// let cardChoice
// let win
// let loss
// let card1
// let card2
// let dificultyMsg
// let playAgainMsg
let currentDeck



/*------------------------ Cached Element References ------------------------*/
const easyButton = document.getElementsByClassName(".easy")
console.log(easyButton);
const classicButton = document.getElementsByClassName(".classic")
console.log(classicButton);
const hardButton = document.getElementsByClassName(".hard")
console.log(hardButton);
// const resetButton = document.getElementsByClassName(".reset")
// console.log(resetButton);

/*-------------------------------- Functions --------------------------------*/
function init() {
    currentDeck = shuffle(deck)
    console.log(currentDeck);
}

var loader = document.querySelector(".loader")

function vanish() {
    loader.classList.add("disppear");
  }

function shuffle(array) {
    let oldElement;
    for (let i = array.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = array[i];
      array[i] = array[rand];
      array[rand] = oldElement;
    }
    return array;
  } 
init()
















/*----------------------------- Event Listeners -----------------------------*/

// document.querySelector(".reset").addEventListener("click", play)

document.querySelector(".easy").addEventListener("click", vanish)
document.querySelector(".classic").addEventListener("click", vanish)
document.querySelector(".hard").addEventListener("click", vanish)





