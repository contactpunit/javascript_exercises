/***
 * write map function totraverse infinite series
 */

function createDoubleGen(func) {
    return function* (iterable) {
        for (const iter of iterable) {
            yield func(iter)
        }
    }
}

const double = createDoubleGen((x) => x * x)
for (const value of double([10, 20])) {
    console.log(value)
}
