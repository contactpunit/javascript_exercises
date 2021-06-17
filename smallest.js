const Iter = require('es-iter')

function smallest(numlist) {
    if (numlist.length === 0) return 0
    const unique = new Set(numlist)
    const length = unique.size
    let combIter = new Iter(Array.from(unique)).combinations(length)
    console.log(Array.from(combIter))

}

smallest([])
smallest([7, 1, 1, 8])