
const url = 'http://bit.ly/2Cbj6zn'

const fetch = require("node-fetch");

function readUrl(url) {
    return fetch(url)
        .then(res => res.text())
        .then(data => data.split('\n'))
}

function parseLines(promise) {
    const res = readUrl(url)
    res.then(lines => {
        lines.push('A car, a man, a maraca.')
        const allPalindromes = []
        for (const line of lines) {
            if (line.trim() && isPalindrome(line)) allPalindromes.push(line)
        }
        const sorted = allPalindromes.sort((a, b) => {
            if (a.length > b.length) return -1
            else if (a.length < b.length) return 1
            else return 0
        })
        console.log(sorted[0])
    })
}

readUrl(url)
    .then(promise => parseLines(promise))

function isPalindrome(word) {
    const nword = normalize(word)
    const reversed = []
    nword.split('').map(letter => {
        reversed.unshift(letter)
    })
    if (nword === reversed.join('')) return true
    else return false
}

function normalize(word) {
    const normalized = word.trim().toLowerCase().split('').filter(letter => {
        if (!"',!:\".’".split('').includes(letter) && letter.trim()) return letter
    })
    return normalized.join('')
}

console.log(isPalindrome('Aibohphobia'))
console.log(isPalindrome('Avid diva'))
console.log(isPalindrome('Avid diva. '))
console.log(isPalindrome('A Toyota’s a Toyota.'))
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('malayalam'))

