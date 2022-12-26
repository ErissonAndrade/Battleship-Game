import {Player} from "./player"

describe('place ships', () => {
    it('place ships on axis Y', () => {
        const mockPlayer = Player("player")
        expect(mockPlayer.placePlayerShip("4","1B", "Y").map(ship => ship.type)).toStrictEqual(["Battleship"])
        expect(mockPlayer.placePlayerShip("4","1B", "Y").map(ship => ship.coords)).toStrictEqual([["1B", "2B", "3B", "4B"]])
        expect(mockPlayer.placePlayerShip("4","1B", "Y").map(ship => ship.shipMethods.timesHit)).toStrictEqual([0])
        mockPlayer.placePlayerShip("4","1B", "Y").map(ship => ship.shipMethods.hit())
        expect(mockPlayer.placePlayerShip("4","1B", "Y").map(ship => ship.shipMethods.timesHit)).toStrictEqual([1])
    })
    it('place ships on axis X', () => {
        const mockPlayer = Player("player")
        expect(mockPlayer.placePlayerShip("4","1B", "X").map(ship => ship.type)).toStrictEqual(["Battleship"])
        expect(mockPlayer.placePlayerShip("4","1B", "X").map(ship => ship.coords)).toStrictEqual([["1B", "1C", "1D", "1E"]])
        expect(mockPlayer.placePlayerShip("4","1B", "X").map(ship => ship.shipMethods.timesHit)).toStrictEqual([0])
        mockPlayer.placePlayerShip("4","1B", "X").map(ship => ship.shipMethods.hit())
        expect(mockPlayer.placePlayerShip("4","1B", "X").map(ship => ship.shipMethods.timesHit)).toStrictEqual([1])
    })
    it('place computer ships', () => {
        const mockComputer = Player("Computer")
        expect(mockComputer.placeComputerShip().length).toBe(4)
    })
})


test ('attack enemy board', () => {
    const mockComputer = Player("Computer")
    const placeComputerShips = mockComputer.placeComputerShip()
    const getShipsPosition = placeComputerShips.map(ship => ship.coords[0])
    const computerShipPosition = getShipsPosition[0]
    mockComputer.playerAttack(computerShipPosition)
    expect(placeComputerShips.every(ship => ship.shipMethods.timesHit == 0)).toBeFalsy()
})


