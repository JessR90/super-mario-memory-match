console.log("Super Mario Match Game");


/*-------------------------------- Constants --------------------------------*/
const backgroundMusic = new Audio("assets/audio/backgroundmusic.mp3")
const cardMatch = new Audio("assets/audio/cardmatch.mp3")
const cardMiss = new Audio("assets/audio/cardmiss.mp3")
const cardSelect = new Audio("assets/audio/cardselect.mp3")
const chestMatch = new Audio("assets/audio/chestmatch.mp3")
const gameOver = new Audio("assets/audio/gameover.mp3")
const gameWon = new Audio("assets/audio/gamewon.mp3")

const board = ["flower", "flower", "flower", "flower", "mushroom", "mushroom", "mushroom", "mushroom", "star", "star", "star", "star", "tencoin", "tencoin", "twentycoin", "twentycoin", "chest", "chest"]

/*---------------------------- Variables (state) ----------------------------*/
// let cardChoice
// let win
// let loss
// let playAgainMsg
let currentDeck
let match
let miss
let firstCardPicked
let secondCardPicked




/*------------------------ Cached Element References ------------------------*/
const easyButton = document.getElementsByClassName(".easy")
console.log(easyButton);
const classicButton = document.getElementsByClassName(".classic")
console.log(classicButton);
const hardButton = document.getElementsByClassName(".hard")
console.log(hardButton);
const resetButton = document.getElementsByClassName(".reset")
console.log(resetButton);

const cardEls = document.querySelectorAll(".facedown")

/*-------------------------------- Functions --------------------------------*/
function init() {
    currentDeck = shuffle(board)
    console.log(currentDeck);
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

// function render()
//     updateBoard()
// )

// function updateBoard() {
//     board.forEach((card, idx) => {
//         if (card === ".facedown") {
//             faceDown[idx].textContent = ""
//         }else if (card === "") {
//             faceDown[idx].textContent = ""
//         }
//     })
// }

function handleClick(evt) {
       const cardIdx = parseInt(evt.target.id)
       console.log(cardIdx);
       revealCard(cardIdx)
        if (currentDeck[cardIdx] === "" || currentDeck[cardIdx] === "") {
            console.log("match");
        }else if (currentDeck[cardIdx] !== "" || currentDeck[cardIdx] !== ""){
            console.log("miss");
    }
}

function revealCard(idx) {
    cardEls[idx].classList.remove("facedown")
    cardEls[idx].classList.add(currentDeck[idx])
    cardEls[idx].classList.add("faceup")
}




var loader = document.querySelector(".loader")

function vanish() {
    loader.classList.add("disappear");
  }
/*----------------------------- Event Listeners -----------------------------*/
// document.querySelector(".reset").addEventListener("click", play)

document.querySelector(".easy").addEventListener("click", vanish)
document.querySelector(".classic").addEventListener("click", vanish)
document.querySelector(".hard").addEventListener("click", vanish)

cardEls.forEach((downCard) => {
    downCard.addEventListener("click", handleClick)
})






// Create function to check to see if cardPicked vars are truthy or falsy 
// Use cardPicked vars function to return if both are truthy 
// Use cardPicked vars to assign the cardPicked values ex: "chest", "star","tencoin", "star"
// Create function to check for match
// If match clear CardPicked variable values and tic-tac toe logic not clicked again after match
// return once all cards are clicked 
// Rock paper scissors for comparison 