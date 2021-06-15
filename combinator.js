// n combinatior summing to total x
const Iter = require('es-iter')

function findNumberPairs(numbers, N = 3, total = 12) {
    const pairs = N
    let combIter = new Iter(numbers).combinations(pairs);
    const combArray = Array.from(combIter)
    const result = combArray.filter(innerArray => {
        const sum = innerArray.reduce((accum, cur) => accum += cur)
        if (sum === total) return innerArray
    })
    return result
}

console.log(findNumberPairs([2, 3, 5, 4, 6]))
console.log(findNumberPairs([2, 3, 5, 4, 6], 2, 10))
console.log(findNumberPairs([9, 1, 3, 8, 7], 2, 10))
console.log(findNumberPairs([0.24, 0.36, 0.04, 0.06, 0.33, 0.08, 0.20, 0.27, 0.3, 0.31,
    0.76, 0.05, 0.08, 0.08, 0.67, 0.09, 0.66, 0.79, 0.95], 2, 1))