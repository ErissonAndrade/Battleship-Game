const selectPlayer = document.querySelector(".player-board")
const selectComputer = document.querySelector(".computer-board")

function createCoords () {
    const columns = ["A","B","C","D","E","F","G","H","I","J"] 
    let gridCoord = []
    for(let i = 1; i <= 9; i++) {
        columns.forEach(letter => gridCoord.push(i + letter))
    }
    return gridCoord
}

function createDivs (parent) {
    for(let i = 1; i <= 90; i++) {
        const div = document.createElement("div")
        div.classList.add("grid")
        parent.appendChild(div)
        const gridCoords = createCoords()
        div.dataset.selection = gridCoords[i-1]
        div.dataset.isTaken = false
        div.setAttribute("id", gridCoords[i-1])
    } 
}

function createGrid() {
    createDivs(selectPlayer)
    createDivs(selectComputer) 
}

export {createGrid}