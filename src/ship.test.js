import {Ship} from "./ship";

test('create ship', () => {
    const mockNewShip = Ship(2)
    expect(mockNewShip.length).toBe(2)
    expect(mockNewShip.name()).toBe("Boat")
    expect(mockNewShip.timesHit).toBe(0)
    expect(mockNewShip.sunk).toBeFalsy()
})

test('hit ship', () => {
    const mockNewShip = Ship(2)
    mockNewShip.hit()
    expect(mockNewShip.timesHit).toBe(1)
})

describe('is ship sunk', () => {
    it('ship is sunk', () => {
        const mockNewShip = Ship(2)
        mockNewShip.hit()
        mockNewShip.hit()
        expect(mockNewShip.isSunk).toBeTruthy()
    })
    it('ship is not sunk', () => {
        const mockNewShip = Ship(2)
        mockNewShip.hit()
        expect(mockNewShip.isSunk).toBeFalsy()
    })
})


