import {Ship} from "./ship"

function Gameboard() {
    let gameBoard = {}

    gameBoard.shipsOnBoard = [] 

    gameBoard.coordsAttacked = []   

    gameBoard.endGame = false

    gameBoard.placeShipsOnBoard = (length, coords, position) => {
        const newShip = Ship(length)
        const shipName = newShip.name()
        const shipLength = newShip.length

        let axis = position
        let getRow = parseInt(coords.split("")[0])
        let getColumn = coords.split("")[1]
        let columnCharCode = getColumn.charCodeAt()
        let getCoords = []

        if(axis == "Y") {
            for(let i = 0; i < shipLength; i ++) {
                getCoords.push(getRow++ + getColumn)
            }
        }
        else {
            for(let i = 0; i < shipLength; i ++) {
                getCoords.push(getRow + String.fromCharCode(columnCharCode++))
            }
        }

        // Sets Maximum Column and Row //
        const filterMaximumRow = getCoords.filter(coords => coords.includes(10))
        const filterMaximumColumn = getCoords.filter(coords => coords.includes("K")) 
        
        // Prevents from adding 2 types of the same ship or 2 ships on the same coord //
        let checkCoords = []
        getCoords.forEach(coord => {
            const check = gameBoard.shipsOnBoard.some(ship => ship.coords.includes(coord))
            checkCoords.push(check)
        })

        const isCoordTaken = checkCoords.includes(true)   
        const isShipOnBoard = gameBoard.shipsOnBoard.map(ship => ship.type).includes(shipName)
        
        if(filterMaximumRow.length == 0 && filterMaximumColumn.length == 0 && isCoordTaken == false && isShipOnBoard == false) {
            gameBoard.shipsOnBoard.push({type: shipName, length: shipLength, coords: getCoords, shipMethods: newShip})
        } 
    } 

    gameBoard.receiveAttack = (coordsSelected) => {
        const getShipDamaged = gameBoard.shipsOnBoard.filter(ship => ship.coords.includes(coordsSelected))
        const isCoordTaken = gameBoard.coordsAttacked.includes(coordsSelected)
        let isShipHit = false
        gameBoard.coordsAttacked.push(coordsSelected)

        if(getShipDamaged.length == 1 && isCoordTaken == false) {
            getShipDamaged.map(ship => ship.shipMethods.hit())
            isShipHit = true
        }
        
        if(isCoordTaken == true) {
            gameBoard.coordsAttacked.pop()
        }

        const isEveryShipSunk = gameBoard.shipsOnBoard.every(ship => ship.shipMethods.isSunk == true)
        if(isEveryShipSunk == true) {
            gameBoard.endGame = true
        }

        return isShipHit
    }

    return gameBoard
}



export { Gameboard }