console.log("Super Mario Match Game");


// Button feature
// const playAgainBtn = document.getElementById("play-again")
// document.querySelector("").addEventListener('click', handleClick)

//Confetti 






/*-------------------------------- Constants --------------------------------*/
const backgroundSound = new Audio("assets/audio/Background N Spade.mp3")
const cardMatch = new Audio("assets/audio/Card Match Match.wav")
const cardMiss = new Audio("assets/audio/Card Miss No match.wav")
const cardSelect = new Audio("assets/audio/Card Select Item Inventory Open or Close.wav")
const chestMatch = new Audio("assets/audio/Chest match 1-Up Match.wav")
const gameOver = new Audio("assets/audio/If lost Game Over.mp3")
const gameWon = new Audio("assets/audio/Game Won.mp3")




/*---------------------------- Variables (state) ----------------------------*/
let cardPlay, win, loss
let cardsLeft = []
let turn = 1;


/*------------------------ Cached Element References ------------------------*/
const resetButton = document.getElementById("reset")
// console.log(reset);

const cards = document.querySelectorAll(".cards")
// console.log(cards);



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    cardPlay = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    match = "yay"
    miss = "nay"
    render()
}

function render() {
    updateCardPlay()
}

function updateCardPlay() {
    cardPlay.forEach((selection, idx) => {
        if (selection === "match") {
        //  
        }else (selection === "miss")
        // 
    });
}




/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener("click", resetGame)

// cards.forEach((cardSelect) => {
//     cardSelect.addEventListener("click", handleClick)  
// });





