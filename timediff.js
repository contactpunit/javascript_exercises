const fetch = require('node-fetch')

const url = 'https://bites-data.s3.us-east-2.amazonaws.com/messages.log'
const regex = new RegExp('supybot Shutdown initiated')

fetch(url)
    .then(res => res.text())
    .then(data => parseEntries(data))
    .then(matches => getDates(matches))
    .then(reqDates => calculateDiff(reqDates))
    .then(diff => console.log(diff))

function parseEntries(data) {
    const match = data.split('\n').filter(elem => regex.test(elem))
    return match
}

function getDates(matches) {
    const first = matches[0].split(' ')[1]
    const last = matches[matches.length - 1].split(' ')[1]
    return [first, last]
}

function calculateDiff(dates) {
    const start = new Date(dates[0])
    const end = new Date(dates[1])
    const d = Math.abs(end - start) / 1000
    const hours = Math.floor(d / 3600) % 24
    const minutes = Math.floor(d / 60) % 60
    const seconds = d % 60
    return `${hours}:${minutes}:${seconds}`
}
