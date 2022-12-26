import { Gameboard } from "./gameBoard"

function Player(name) {
    let player = {}

    player.name = name

    player.computerAttacked = null

    const newGameBoard = Gameboard()

    let playerAttacks = 0
    player.playerShipsOnBoard = null

    player.placePlayerShip = (shipLength, coords, position) => {
        newGameBoard.placeShipsOnBoard(shipLength, coords, position)
        player.playerShipsOnBoard = newGameBoard.shipsOnBoard.length
        return newGameBoard.shipsOnBoard
    }

    player.placeComputerShip = () => {
        do {
            const lengthSizes = [5, 4, 3, 2]
            const randomRow = Math.floor(Math.random() * 9) + 1;
            const randomColumn = String.fromCharCode(65+Math.floor(Math.random() * 10))
            const randomCoords = randomRow + randomColumn
            const positionsTypes = ["Y", "X"]
            const randomPosition = positionsTypes[Math.floor(Math.random() * positionsTypes.length)]
            const randomLength = lengthSizes[Math.floor(Math.random() * lengthSizes.length)]

            newGameBoard.placeShipsOnBoard(randomLength, randomCoords, randomPosition) 
        } while(newGameBoard.shipsOnBoard.length < 4)

        return newGameBoard.shipsOnBoard
    }

    player.playerAttack = (coords) => {
        playerAttacks++
        return (newGameBoard.endGame == false) ? newGameBoard.receiveAttack(coords) : null
    } 

    player.computerAttack = () => {
        do{
            const randomRow = Math.floor(Math.random() * 9) + 1;
            const randomColumn = String.fromCharCode(65+Math.floor(Math.random() * 10))
            const coords = randomRow + randomColumn
            player.computerAttacked = coords
            return newGameBoard.receiveAttack(coords)
        } while(newGameBoard.coordsAttacked.length < playerAttacks)
    }

    return player
}

export {Player}