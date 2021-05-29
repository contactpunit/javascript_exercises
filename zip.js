/***
 * Implement zip in javascript
 * 'Note that zip returns iterator like in Python
 */

function zip(...iterables) {
    const allIterators = iterables.map(iterable => iterable[Symbol.iterator]())
    return {
        [Symbol.iterator]() {
            return this
        },
        next() {
            const values = allIterators.map(iterator => {
                const { value, status } = iterator.next()
                if (!status) return value
            })
            if (values.some(v => v === undefined)) return { value: undefined, 'done': true }
            else return { value: values, 'done': false }
        }
    }
}

const s = zip([1, 2], [3, 4])

// console.log(s.next())
// console.log(s.next())
// console.log(s.next())

for (const f of s) {
    console.log(f)
}