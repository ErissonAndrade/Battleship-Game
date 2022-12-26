import Styles from "./styles/style.css"
import { createGrid } from "./createGrid"

import { placePlayerShip, placeComputerShips, attackGameBoard, computerAttack } from "./playGame"

createGrid()

const confirmButton = document.getElementById("confirm-btn")
const placeShipsSelector = document.querySelector(".place-ships")
const input = document.getElementById("player-name")
const gameInfoSelector = document.querySelector(".game-info")
const playerBoardName = document.querySelector(".player-name")
const shipsSelector = document.querySelectorAll("#select-ship")
const changeAxisBtn = document.querySelector(".change-axis")
const axis = document.querySelector(".axis")
const startGame = document.getElementById("start-game")
const mainSelector = document.querySelector("main")
const selectPlayerBoard = document.querySelector(".player-board")
const selectComputerBoard = document.querySelector(".computer-board")
const playerGameBoard = document.querySelectorAll(".player-board > .grid")
const computerGameBoard = document.querySelectorAll(".computer-board > .grid")

placeShipsSelector.style.display = "none"
selectPlayerBoard.style.display = "none"
selectComputerBoard.style.display = "none"
gameInfoSelector.style.display = "none"

function setAxis() {
    if (axis.textContent == "X") { 
        axis.textContent = "Y"
    }
    else {
        axis.textContent = "X"
    }
}

function placeShips(length) {
    playerGameBoard.forEach(cell => {
        cell.addEventListener("click", e => {
            const getCoord = cell.dataset.selection
            placePlayerShip(length, getCoord, axis.innerHTML)
        })
    })     
}

confirmButton.addEventListener("click", e =>  {
    if(input.value !== "") {
        e.target.parentElement.remove()
        placeShipsSelector.style.display = "flex"
        selectPlayerBoard.style.display = "grid"
        mainSelector.style.gap = 0
        gameInfoSelector.style.display = "inline"
        playerBoardName.textContent = input.value
    } else {
        alert("Please enter a name!")
    }
})

shipsSelector.forEach(shipSelected => {
    shipSelected.addEventListener("click", e => {
        const shipLength = shipSelected.dataset.length
        placeShips(shipLength)
        e.target.style.opacity = "0.1"
        e.target.style.cursor = "default"
    })
})

changeAxisBtn.addEventListener("click", e => {
    setAxis()
})


computerGameBoard.forEach(cell => {
    cell.addEventListener("click", e => {
        const getCoord = e.target.id
        attackGameBoard(getCoord, e)
    })
}) 

startGame.addEventListener("click", e => {
    placeComputerShips(playerGameBoard)    
})
