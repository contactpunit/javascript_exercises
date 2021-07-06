const Iter = require('es-iter')

function friendTeams(friends, teamSize = 2, order = false) {
    const pairs = teamSize
    let combArray = []
    if (order) {
        let combIter = new Iter(friends).permutations(pairs);
        combArray = Array.from(combIter)
    }
    else {
        let combIter = new Iter(friends).combinations(pairs);
        combArray = Array.from(combIter)
    }
    return combArray
}

console.log(friendTeams(['Bob', 'Dante', 'Eric'], 3, true))
console.log(friendTeams(['Bob', 'Dante', 'eric'], 3, false))