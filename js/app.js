console.log("Super Mario Match Game");


// Button feature
// const playAgainBtn = document.getElementById("play-again")
// document.querySelector("").addEventListener('click', handleClick)

//Confetti 






/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, win, loss


/*------------------------ Cached Element References ------------------------*/
const resetBtnEl = document.getElementById("reset")
// console.log(reset);
const 


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    render()
}

function render() {
    updateBoard()
}




/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener("click", init)





