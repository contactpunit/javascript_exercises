IGNORE_CHAR = 'b'
QUIT_CHAR = 'q'
MAX_NAMES = 5

function filterNames(names) {
    const maxNames = []
    for (name of names) {
        if (name.startsWith(IGNORE_CHAR)) continue
        if ((new RegExp(/\d+/)).test(name)) continue
        if (name.startsWith(QUIT_CHAR)) break
        maxNames.push(name)
        if (maxNames.length >= 5) return maxNames
    }
    return maxNames
}

console.log(filterNames(['quit', 'ana']))
console.log(filterNames(['12', 'bas']))
console.log(filterNames(['ana', 'bob']))
console.log(filterNames(['tim', 'ana', 'quinton']))
console.log(filterNames(['tim', 'amber', 'ana', 'cindy', 'sara', 'molly', 'henry']))
console.log(filterNames(['tim', 'amber', 'ana', 'c1ndy', 'sara', 'molly', 'henry']))
console.log(filterNames(['t2im', '1quinton', 'a3na', '4']))