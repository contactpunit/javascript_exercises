const Gen = require('generatorics')

function smallest(numlist) {
    if (numlist.length === 0) return 0
    const unique = new Set(numlist)
    const length = unique.size
    const uniqueArray = Gen.permutation(Array.from(unique), length)
    const allPerms = []
    for (const perm of uniqueArray) {
        allPerms.push(parseInt(perm.join('')))
    }
    return allPerms.reduce((max, curr) => max <= curr ? max : curr) // Cannot use Max.min with large arrays
}

console.log(smallest([]))
console.log(smallest([0]))
console.log(smallest([1]))
console.log(smallest([5]))
console.log(smallest([1, 1]))
console.log(smallest([1, 7]))
console.log(smallest([7, 1]))
console.log(smallest([1, 9, 5, 9, 1]))
console.log(smallest([0, 9, 5, 9]))
console.log(smallest([9, 3, 1, 2, 7, 9, 4, 5, 7, 9, 8, 6, 1]))