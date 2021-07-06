const names = 'Julian Bob PyBites Dante Martin Rodolfo'.split(' ')
const aliases = new Array(2).fill('Javascript Coder'.split(' ')).flat()
const awake = new Array(4).fill(['yes', 'no']).flat()

function generateTable(...sequences) {
    const firstElem = sequences.shift()
    const totalLength = sequences.length
    const remainIters = []
    for (const i of sequences) {
        remainIters.push(i[Symbol.iterator]())
    }
    firstElem.forEach(elem => {
        const zipElem = []
        zipElem.push(elem)
        for (let i = 0; i < totalLength; i++) {
            const e = remainIters[i].next()
            zipElem.push(!e.done ? e.value : false)
        }
        if (zipElem.every(e => !!e)) console.log(zipElem)
    })
}

generateTable(names, aliases, awake)