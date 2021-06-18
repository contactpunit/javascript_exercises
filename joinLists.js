function joinLists(list, char) {
    const result = list.join(`,${char},`)
    return result.split(',')
}

console.log(joinLists([['a', 'b'], ['c']], '&'))
console.log(joinLists([['a']], '|'))
console.log(joinLists([['a', 'b'], ['c']], '&'))
console.log(joinLists([['a', 'b'], ['c'], ['d', 'e']], '+'))