words = "It's almost Holidays and PyBites wishes You a Merry Christmas and a Happy 2019".split(' ')

words.sort((a, b) => {
    if (a.charCodeAt(0) < b.charCodeAt(0)) return -1
    else if (a.charCodeAt(0) > b.charCodeAt(0)) return 1
    else if (a.charCodeAt(0) === b.charCodeAt(0)) {
        idx = 1
        while (true) {
            if (a[idx] && b[idx] && a.charCodeAt(idx) < b.charCodeAt(idx)) {
                return -1
            }
            else if (a[idx] && b[idx] && a.charCodeAt(idx) > b.charCodeAt(idx)) {
                return 1
            }
            else if (a[idx] && !b[idx]) return 1
            else if (!a[idx] && b[idx]) return -1
            else if (a[idx] && b[idx] && a.charCodeAt(idx) === b.charCodeAt(idx)) {
                idx += 1
                continue
            }
            else {
                return 0
            }
        }
    }
})

console.log(words)
