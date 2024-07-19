console.log("Super Mario Match Game");


// Button feature
// const playAgainBtn = document.getElementById("play-again")
// document.querySelector("").addEventListener('click', handleClick)

//Confetti 




/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
// let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
// const squareEls = document.querySelectorAll(".sqr")
// //console.log(squareEls);
// const messageEl = document.getElementById("message")
// //console.log(messageEl);
// const resetBtnEl = document.getElementById("reset")
// //console.log(reset);

/*-------------------------------- Functions --------------------------------*/
// init()

// function init() {
//     board = ["", "", "", "", "", "", "", "", ""]
//     turn = "X"
//     winner = false
//     tie = false
//     render()
//     // console.log(board);
//     // console.log(turn);
//     // console.log(winner);
//     // console.log(tie);
// }
// function render() {
//     updateBoard()
//     updateMessage()
// }

// function updateBoard() {
//    board.forEach((cell, idx) => {
//         if (cell === "X") {
//             squareEls[idx].textContent = "X" 
//             //squareEls[idx].style.backgroundColor = "blue"
//         }else if (cell === "O") {
//             squareEls[idx].textContent = "O"
//             //squareEls[idx].style.backgroundColor = "red"
//         }else {
//             squareEls[idx].textContent = ""
//             //squareEls[idx].style.backgroundColor = "white"
//         }
//     })  
// }
// function updateBoard() {
//     board.forEach((cell, idx) => {
//         if (cell === "X") {
//             squareEls[idx].textContent = "emoji" 
//             squareEls[idx].style.backgroundColor = "blue"
//         }else if (cell === "O") {
//             squareEls[idx].textContent = "emoji"
//             squareEls[idx].style.backgroundColor = "red"
//         }else {
//             squareEls[idx].textContent = ""
//             squareEls[idx].style.backgroundColor = "white"

// function updateMessage() {
//     if (!winner && !tie) {
//         messageEl.textContent = `It is ${turn}'s turn`
//     }   else if (!winner && tie) {
//         messageEl.textContent = "Cat's game. Meow!!! 😻"
//     }   else {
//         messageEl.textContent = `It is ${turn}'s turn`

//     }
// }

// function updateMessage() {
//     if (!winner && !tie) {
//         messageEl.textContent = `It is ${turn === "X" ? "emoji" : "emoji"}'s turn`
//     }   else if (!winner && tie) {
//         messageEl.textContent = "Cat's game. Meow!!! 😻"
//     }   else {
//         messageEl.textContent = `It is ${turn === "X" ? "emoji" : "emoji"}'s turn`

//     }
// }


// function handleClick(evt) {
//     const squareIndex = parseInt(evt.target.id)
//     if (board[squareIndex] === "X" || board[squareIndex] === "O" || winner){
//         return
//     }
//     placePiece(squareIndex)
//     checkForWinner()
//     checkForTie()
//     switchPlayerTurn()
//     render()
// }

// function placePiece(index) {
//     board[index] = turn
//     //console.log(board);
// }

// function checkForWinner() {
//     if (
//         (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) ||
//         (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) ||
//         (board[6] !== "" && board[6] === board[7] && board[6] === board[8]) ||
//         (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) ||
//         (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) ||
//         (board[2] !== "" && board[2] === board[5] && board[2] === board[8]) ||
//         (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) ||
//         (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) 
//     ){
//         winner = true 
//     }
// }

// function checkForTie() {
//     if (winner) {
//         return
//     }
//     if (!board.includes("")) {
//         tie = true
//     }
// }

// function switchPlayerTurn() {
//     if (winner) {
//         return
//     }
//     if (turn === "X") {
//         turn = "O"
//     }else {
//         turn = "X"
//     }
//     //turn = turn === "X" ? "O" : "X"
// }
/*----------------------------- Event Listeners -----------------------------*/
// squareEls.forEach((squareEl) => {
//     squareEl.addEventListener("click", handleClick)
// })

// resetBtnEl.addEventListener("click", init)





