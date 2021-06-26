function intersection(...args) {
    const normalize = []
    for (const a of args) {
        if (a instanceof Set && a.size) {
            normalize.push(a)
        }
        else if (a instanceof Array && a.length) {
            normalize.push(new Set([...a]))
        }
        else if (typeof a === 'string') {
            normalize.push(a)
        }
    }
    if (normalize.length === 0) return new Set([])
    else if (normalize.length === 1 && typeof normalize[0] !== 'string') return new Set(normalize[0])
    else if (normalize.length === 1 && typeof normalize[0] === 'string') return new Set(normalize[0].split('').filter(a => a.trim()))
    else return calculate(normalize)
}

function calculate(input) {
    const iter = input[Symbol.iterator]()
    const first = iter.next()
    const remain = Array.from(iter)
    const result = new Set()
    for (const e of first.value) {
        let found = true
        for (elem of remain) {
            if (!new Set(elem).has(e)) {
                found = false
                break
            }
        }
        if (found) result.add(e)
    }
    return result
}

const t = intersection([1, 2, 3, 4, 5, 1, 2, 3, 2, 3], new Set([0, 10, 5]), ["a", 5])
// const r = intersection(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4]))
// const s = intersection(new Set([1, 2, 3, "1"]), new Set([1, -1]), {})
// const r = intersection(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4]), "this is a string")
// const r = intersection("this is a string")

