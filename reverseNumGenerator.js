function* numGenerator(num) {
    let value = num
    while (true) {
        if (value <= 0) return
        else {
            yield value;
            value = value - 1
        }
    }
}

const g = numGenerator(10)
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())