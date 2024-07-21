console.log("Super Mario Match Game");


// document.querySelector("").addEventListener('click', handleClick)

//Confetti 






/*-------------------------------- Constants --------------------------------*/
const backgroundMusic = new Audio("assets/audio/backgroundmusic.mp3")
const cardMatch = new Audio("assets/audio/cardmatch.mp3")
const cardMiss = new Audio("assets/audio/cardmiss.mp3")
const cardSelect = new Audio("assets/audio/cardselect.mp3")
const chestMatch = new Audio("assets/audio/chestmatch.mp3")
const gameOver = new Audio("assets/audio/gameover.mp3")
const gameWon = new Audio("assets/audio/gamewon.mp3")




/*---------------------------- Variables (state) ----------------------------*/
let table, win, loss, card1Idx, card2Idx
let cardsLeft = []
let turn = 1;
let deck = ["flower", "flower", "flower", "flower", "star", "star", "star", "star", "mushroom", "mushroom", "mushroom", "mushroom", "chest", "chest", "tencoin", "tencoin", "twentycoin", "twentycoin"]


/*------------------------ Cached Element References ------------------------*/
// const resetButton = document.getElementById("reset")
// // console.log(reset);

// const cards = document.querySelectorAll(".cards")
// // console.log(cards);



/*-------------------------------- Functions --------------------------------*/
// init()

// function init() {
//     deck = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
//     match = "yay"
//     miss = "nay"
//     render()
// }

// function render() {
//     updateCardPlay()
// }

// function updateCardPlay() {
//     cardPlay.forEach((selection, idx) => {
//         if (selection === "match") {
//         //  
//         }else (selection === "miss")
//         // 
//     });
// }




/*----------------------------- Event Listeners -----------------------------*/
// resetButton.addEventListener("click", resetGame)

// cards.forEach((cardSelect) => {
//     cardSelect.addEventListener("click", handleClick)  
// });





