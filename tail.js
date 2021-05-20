/***
 * Complete the function below which receives (absolute) filepath and n lines to filter from the end which is returned in a list.
 */
const fs = require('fs')

function tail(filepath, n) {
    const text = fs.readFileSync(filepath, 'utf-8')
    const lines = text.split('\n')
    console.log(lines.slice(lines.length - n))
}

tail('./data/listtail.txt', 2)
tail('./data/listtail.txt', 3)