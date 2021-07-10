const fetch = require('node-fetch')

const stopwordsUrl = 'https://bites-data.s3.us-east-2.amazonaws.com/stopwords.txt'
const harryText = 'https://bites-data.s3.us-east-2.amazonaws.com/harry.txt'

function fetchStopWords(url) {
    return fetch(url)
        .then(resp => resp.text())
        .then(data => data.split('\n'))
        .then(rec => generateAllWords(rec, set = true))
        .catch(err => console.log(err.message))
}

function fetchText(url) {
    return fetch(url)
        .then(resp => resp.text())
        .then(data => data.split('\n'))
        .then(lines => generateAllWords(lines))
        .catch(err => console.log(err.message))

}

function generateAllWords(lines, set = false) {
    const allWords = lines.map(line => {
        const normalized = line.split(' ').map(word => {
            if (word.trim()) {
                word = word.toLowerCase()
                word = word.replace(/[.,':"!’—?-]/g, '')
                if (word.trim()) return word.trim()
            }
        })
        if (set) return Array.from(new Set(normalized))
        else return normalized
    })
    return allWords.flat()
}

async function getFrequency() {
    const stopwords = await fetchStopWords(stopwordsUrl)
    const text = await fetchText(harryText)
    const m = new Map()
    for (word of text) {
        if (word && !stopwords.includes(word)) {
            if (m.has(word)) m.set(word, m.get(word) + 1)
            else {
                m.set(word, 1)
            }
        }
    }
    const sorted = Array.from(m.entries()).sort((a, b) => {
        if (a[1] > b[1]) return -1
        else if (a[1] < b[1]) return 1
        else return 0
    })
    return sorted[0]
}

getFrequency()
    .then(entry => console.log(entry[0]))
