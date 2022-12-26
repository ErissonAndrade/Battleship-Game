const shipTypes = [
    {type: "Carrier", length: 5},
    {type: "Battleship", length: 4},
    {type: "Destroyer", length: 3},
    {type: "Boat", length:2}
]

function Ship(length) {
    let ship = {}
    ship.length = length

    ship.name = () => {
        const getShip = shipTypes.filter(type => type.length == ship.length)
        const shipName = getShip[0].type
        return shipName
    }
    
    ship.timesHit = 0
    
    ship.hit = () => {
        ship.timesHit++
        if(ship.timesHit == ship.length) {ship.isSunk = true}
    }
    
    ship.isSunk = false

    return ship
} 


export {Ship, shipTypes}