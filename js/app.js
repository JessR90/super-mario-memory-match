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
let deck = ["flower", "flower", "flower", "flower", "star", "star", "star", "star", "mushroom", "mushroom", "mushroom", "mushroom", "chest", "chest", "tencoin", "tencoin", "twentycoin", "twentycoin"]
let win
let loss
let card1
let card2
let dificultyMsg
let playAgainMsg

/*------------------------ Cached Element References ------------------------*/
const easyButton = document.getElementById("easy")
console.log(easyButton);

const classicButton = document.getElementById("classic")
console.log(classicButton);

const hardButton = document.getElementById("hard")
console.log(hardButton);

const resetButton = document.getElementById("reset")
console.log(resetButton);

/*-------------------------------- Functions --------------------------------*/
const play = (event) => {
    console.log(event.target);
}

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector("#easy").addEventListener("click", play)
document.querySelector("#classic").addEventListener("click", play)
document.querySelector("#hard").addEventListener("click", play)

document.querySelector("#reset").addEventListener("click", play)
