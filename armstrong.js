function armstrong(num) {
    const numString = num.toString()
    const digits = numString.length
    const result = Array.from(numString).reduce((accum, curr) => {
        return accum + Math.pow(+curr, digits)
    }, 0)
    if(result === num) return true
    else return false
}

console.log(armstrong(153))
console.log(armstrong(5))
console.log(armstrong(370))
console.log(armstrong(2020))
console.log(armstrong(371))
console.log(armstrong(9474))
console.log(armstrong(11))