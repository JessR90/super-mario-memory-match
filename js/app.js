console.log("Super Mario Match Game");


/*-------------------------------- Constants --------------------------------*/
const board = ["flower", "flower", "flower", "flower", "mushroom", "mushroom", "mushroom", "mushroom", "star", "star", "star", "star", "tencoin", "tencoin", "twentycoin", "twentycoin", "chest", "chest"]
let currentDeck
let match
let miss
let firCarSel = ""
let secCarSel = ""
let isFlipping = true 
let timeLeft = 30
let win = 0
let loss = 0
/*------------------------ Cached Element References ------------------------*/
const classicButton = document.getElementsByClassName("classic")
const cardEls = document.querySelectorAll(".facedown")
const resetButton = document.getElementsByClassName("reset")
const playAgainBtn = document.getElementById('play-again')
const winTotal = document.getElementById('win-count')
const lossTotal = document.getElementById('loss-count')
/*-------------------------------- Functions --------------------------------*/
// Shuffle board and start game
function init() {
  currentDeck = shuffle(board)
}
init()

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

// Checks if there is a miss or match
function handleClick(evt) {
  if (isFlipping === false) 
    return
  const cardIdx = parseInt(evt.target.id)
  evt.target.classList.add(currentDeck[cardIdx])  
  if (cardEls[cardIdx].classList.contains("revealed")) 
    return
  revealCard(cardIdx)
  if (firCarSel === "") {
      firCarSel = cardIdx
  } else {
      secCarSel = cardIdx
      isFlipping = false
      if (currentDeck[firCarSel] === currentDeck[secCarSel]) {
          cardEls[firCarSel].classList.add("matched")
          cardEls[secCarSel].classList.add("matched")
          win++
          resetPicks()
      } else {
          setTimeout(() => {
              hideCard(firCarSel)
              hideCard(secCarSel)
              loss++
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
  cardEls[idx].className = "facedown"
}

function resetPicks() {
  firCarSel = ""
  secCarSel = ""
  isFlipping = true  
}

function countdownTimer(timeLeft = 30) {
  const intervalID = setInterval(() => {
    timeLeft--
    document.getElementById('countdown-timer').textContent = timeLeft
    if (timeLeft <= 0) {
      clearInterval(intervalID)
      endGame()
    }
  }, 1000)
}

function endGame(){
  winTotal.innerText = win
  lossTotal.innerText = loss
  const winLoss = document.getElementsByClassName('count-results')
  for (let i=0; i< winLoss.length; i++){
    winLoss[i].style.display = "block"
  }
  playAgainBtn.style.display = "block"
  isFlipping = false
}

function resetGame(){
  playAgainBtn.style.display = "none"
  win = 0
  loss = 0
  winTotal.innerText = win
  lossTotal.innerText = loss
  console.log('win or loss in reset func' + win + loss)
  const winLoss = document.getElementsByClassName('count-results')
  for (let i=0; i< winLoss.length; i++){
      winLoss[i].style.display = "none"
  }
  countdownTimer()
  const revealedCards = document.getElementsByClassName('revealed')
  const revCardsArray = Array.from(revealedCards)
  const revCardsArrayLength = revCardsArray.length
  for (let i=0; i<revCardsArrayLength; i++){
      revCardsArray[i].className = 'facedown'
  }
  init()
  isFlipping = true
}
        
// Start page
var loader = document.querySelector(".loader")
function vanish() {
  loader.classList.add("disappear")
  countdownTimer()
}

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector(".classic").addEventListener("click", vanish)
playAgainBtn.addEventListener("click", resetGame)
cardEls.forEach((cardEl) => {
  cardEl.addEventListener("click", handleClick)
})
