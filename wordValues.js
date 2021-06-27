const fetch = require('node-fetch')

const baseUrl = 'https://bites-data.s3.us-east-2.amazonaws.com/'
const fileName = 'dictionary.txt'
const url = baseUrl + fileName
scrabble_scores = new Map([[1, "E A O I N R T L S U"], [2, "D G"], [3, "B C M P"],
[4, "F H V W Y"], [5, "K"], [8, "J X"], [10, "Q Z"]])

const scrableScores = new Map(
    Array.from(
        scrabble_scores.entries()).map(entry => {
            return [entry[0], entry[1].toLowerCase().split(' ')]
        })
)

function loadWords(url) {
    return fetch(url)
        .then(res => res.text())
        .catch(err => console.log(err))
}

function calcWordValue(word) {
    const values = word.split('').map(letter => {
        for ([k, v] of scrableScores.entries()) {
            if (v.includes(letter)) return k
        }
    })
    return values.reduce((accum, cur) => accum + cur, 0)
}

function maxWordValue(words) {
    const result = words.map(word => [word, calcWordValue(word)])
    result.sort((a, b) => {
        if (a[1] < b[1]) return 1
        else if (a[1] > b[1]) return -1
        else return 0
    })
    return result[0][0]
}

// loadWords(url)
//     .then(result => console.log(result))
console.log(calcWordValue('hello'))
test_words = ['bob', 'julian', 'pybites', 'quit', 'barbeque']
console.log(maxWordValue(test_words))
console.log(calcWordValue('benzalphenylhydrazone'))