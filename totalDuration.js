const fetch = require('node-fetch')

const url = 'https://bites-data.s3.us-east-2.amazonaws.com/course_timings'

fetch(url)
    .then(resp => resp.text())
    .then(data => data.split('\n'))
    .then(lines => lines.filter(line => {
        if (line.trim()) return line
    }))
    .then(cleanLines => cleanLines.reduce((reduced, newline) => {
        const found = newline.match(/\d+:\d+/)
        if (found) {
            reduced.push(found[0])
        }
        return reduced
    }, []))
    .then(v => parseTime(v))
    .catch(err => console.log(err))

function parseTime(dates) {
    let hrs = 0
    let mins = 0
    let secs = 0
    for (const entry of dates) {
        const [min, sec] = entry.split(':').map(e => +e)
        secs += sec
        mins += min
        if (secs > 60) {
            mins = mins + Math.floor(secs / 60)
            secs = secs % 60
        }
        if (mins > 60) {
            hrs = hrs + Math.floor(mins / 60)
            mins = mins % 60
        }
    }
    console.log(hrs, mins, secs)
}