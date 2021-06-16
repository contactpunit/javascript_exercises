function freqDigit(num) {
    const m = new Map()
    for (const digit of num.toString()) {
        if (!m.has(digit)) m.set(digit, 1)
        else m.set(digit, m.get(digit) + 1)
    }
    const entries = Array.from(m.entries()).sort((a, b) => {
        if (a[1] > b[1]) return -1
        else if (a[1] < b[1]) return 1
        else return 0
    })
    return entries[0][0]

}

console.log(freqDigit(13255555553666))