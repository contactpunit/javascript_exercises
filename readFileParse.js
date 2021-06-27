const url = 'https://bites-data.s3.us-east-2.amazonaws.com/dirnames.txt'

const fetch = require('node-fetch')

function genFiles() {
    fetch(url)
        .then(res => res.text())
        .then(data => {
            const iter = parseData(data)
            for (entry of iter) console.log(entry)
        }
        )
}

function* parseData(data) {
    const entries = data.split('\n')
    for (entry of entries) {
        const [dirname, isDir] = entry.split(',')
        if (isDir === 'True') yield dirname
    }
}

genFiles()