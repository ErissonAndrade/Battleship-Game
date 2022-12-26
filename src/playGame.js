import { Player } from './player';

const gameInfoSelector = document.querySelector('.game-info')
const computerBoardName = document.querySelector('.computer-name')
const placeShipsSelector = document.querySelector('.place-ships')
const mainSelector = document.querySelector('main')
const selectComputerBoard = document.querySelector('.computer-board')

const newPlayer = Player('Player')
const newComputer = Player('Computer')

function placePlayerShip(length, coordSelected, axis) {
  try {
    const placeShip = newPlayer.placePlayerShip(length, coordSelected, axis)
    const getShip = placeShip.filter((ship) => ship.length.includes(length))
    const getCoords = getShip.map((ship) => ship.coords)[0]
    getCoords.forEach((coord) => {
      document.getElementById(coord).style.backgroundColor = 'green'
    })
  } catch {
    alert(`Please select at least ${length} free spaces!`)
  }
}

function placeComputerShips() {
  if (newPlayer.playerShipsOnBoard == 4) {
    computerBoardName.textContent = 'Computer'
    selectComputerBoard.style.display = 'grid'
    mainSelector.style.gap = '5rem'
    placeShipsSelector.style.display = 'none'
    return newComputer.placeComputerShip();
  }
  alert('You need to poisition all your ships before starting the game!')
}

function attackGameBoard(coord, e) {
  const attack = newComputer.playerAttack(coord)
  const setBackground = e.target.style.backgroundColor

  if (attack == true) {
    e.target.style.backgroundColor = 'red'
    gameInfoSelector.innerHTML = 'You hit a ship!'
    setTimeout(computerAttack, 1000)
  }
  if (attack == false && setBackground == '') {
    e.target.style.backgroundColor = 'white'
    gameInfoSelector.innerHTML = 'You missed the shot!'
    setTimeout(computerAttack, 1000)
  }

  if (attack == null) {
    gameInfoSelector.innerHTML = 'You have sunk all enemy ships!'
  }
}

function computerAttack() {
  const attack = newPlayer.computerAttack();
  const coordsAttacked = newPlayer.computerAttacked;
  const selectCell = document.getElementById(`${coordsAttacked}`)

  if (attack == true) {
    selectCell.style.backgroundColor = 'red'
    gameInfoSelector.innerHTML = 'Computer hit a ship!'
  }
  if (attack == false && selectCell.style.backgroundColor == '') {
    selectCell.style.backgroundColor = 'white'
    gameInfoSelector.innerHTML = 'Computer missed the shot!'
  }

  if (attack == null) {
    gameInfoSelector.innerHTML = 'Computer have sunk all enemy ships!'
  }
}

export {
  placePlayerShip, placeComputerShips, attackGameBoard, computerAttack,
}
