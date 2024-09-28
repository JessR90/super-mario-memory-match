console.log("Super Mario Match Game");


/*-------------------------------- Constants --------------------------------*/
const board = ["flower", "flower", "flower", "flower", "mushroom", "mushroom", "mushroom", "mushroom", "star", "star", "star", "star", "tencoin", "tencoin", "twentycoin", "twentycoin", "chest", "chest"]
let currentDeck
let match
let miss
let firstCardPicked = ""
let secondCardPicked = ""
let isFlipping = false 
let timer
let timeLeft

/*------------------------ Cached Element References ------------------------*/
const classicButton = document.getElementsByClassName("classic")

const cardEls = document.querySelectorAll(".facedown")

const messageEl = document.getElementsByClassName("lossmsg")[0]

const timerEl = document.querySelector("timer")

/*-------------------------------- Functions --------------------------------*/
// Shuffle board and start game
function init() {
  currentDeck = shuffle(board)
  console.log(currentDeck)
  timeLeft = 30
  timerEl.textContent = `Time Left: ${timeLeft}s`
  startTime()
}

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  let oldElement
  for (let i = array.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1))
      oldElement = array[i]
      array[i] = array[rand]
      array[rand] = oldElement
  }
  return array
}

function handleClick(evt) {
  if (isFlipping) 
    return  
  const cardIdx = parseInt(evt.target.id)
  console.log(cardIdx);
  
  if (cardEls[cardIdx].classList.contains("revealed")) 
    return 
  revealCard(cardIdx)
  if (firstCardPicked === "") {
      firstCardPicked = cardIdx
  } else {
      secondCardPicked = cardIdx
      isFlipping = true 
  if (currentDeck[firstCardPicked] === currentDeck[secondCardPicked]) {
    console.log("match");    
      cardEls[firstCardPicked].classList.add("matched")
      cardEls[secondCardPicked].classList.add("matched")
  resetPicks()
  } else {
    console.log("miss");
  setTimeout(() => {
    hideCard(firstCardPicked)
    hideCard(secondCardPicked)
      resetPicks()
        }, 1000) 
    }
  }
}

function revealCard(idx) {
  cardEls[idx].classList.remove("facedown")
  cardEls[idx].classList.add("revealed")
}

function hideCard(idx) {
  cardEls[idx].classList.remove("revealed")
  cardEls[idx].classList.add("facedown")
}

function resetPicks() {
  firstCardPicked = ""
  secondCardPicked = ""
  isFlipping = false  
}

// Loader
var loader = document.querySelector(".loader")
function vanish() {
  loader.classList.add("disappear")
}

const startTime = () => {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time Left: ${timeLeft}s`
    if (timeLeft <= 0) {
      clearInterval(timer);
      messageEl.textContent = "YOU LOST!!! 😢"
      cardEls.forEach((card) => {
        card.classList.add("facedown")
      });
    }
  }, 1000);
};

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector(".classic").addEventListener("click", vanish)

cardEls.forEach((cardEl, idx) => {
  cardEl.addEventListener("click", handleClick)
})
init()