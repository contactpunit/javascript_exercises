/***
 * Create a chess board of varu=ying length
 */

function createChessboard(n) {
    for (const i of Array(n).keys()) {
        const values = []
        for (const j of Array(n).keys()) {
            if (((i + j) % 2) === 0) {
                values.push(' ')
            }
            else values.push('#')
        }
        console.log(`${values.join('')}\n`)
    }
}

createChessboard(2)
// createChessboard(4)
// createChessboard(8)