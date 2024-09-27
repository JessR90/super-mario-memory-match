console.log("Super Mario Match Game");


/*-------------------------------- Constants --------------------------------*/
const board = ["flower", "flower", "flower", "flower", "mushroom", "mushroom", "mushroom", "mushroom", "star", "star", "star", "star", "tencoin", "tencoin", "twentycoin", "twentycoin", "chest", "chest"]

/*---------------------------- Variables (state) ----------------------------*/
// let cardChoice
// let win
// let loss
// let playAgainMsg
let currentDeck
let match
let miss
let firstCardPicked = ""
let secondCardPicked = ""




/*------------------------ Cached Element References ------------------------*/
const classicButton = document.getElementsByClassName(".classic")
console.log(classicButton);

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

document.querySelector(".classic").addEventListener("click", vanish)

cardEls.forEach((downCard) => {
    downCard.addEventListener("click", handleClick)
})