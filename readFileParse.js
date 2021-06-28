const url = 'https://bites-data.s3.us-east-2.amazonaws.com/dirnames.txt'

const fetch = require('node-fetch')
const challenges = new Map()
const users = new Map()

function getOnlyDirs(promise) {
    promise
        .then(data => {
            const iter = parseData(data)
            for (const dirname of iter) {
                console.log(dirname)
            }
        })
}

function genDirs() {
    return fetch(url)
        .then(res => res.text())


}

function* parseData(data) {
    const entries = data.split('\n')
    for (entry of entries) {
        const [dirname, isDir] = entry.split(',')
        if (isDir === 'True') yield dirname
    }
}

function dieHardUser(promise) {
    promise
        .then(data => {
            const iter = parseData(data)
            for (dirname of iter) {
                const [challenge, user] = dirname.split('/')
                if (!users.has(user)) users.set(user, 0)
                users.set(user, users.get(user) + 1)
                if (!challenges.has(challenge)) challenges.set(challenge, 0)
                challenges.set(challenge, challenges.get(challenge) + 1)
            }
            const maxPR = Array.from(challenges.entries()).sort((a, b) => {
                if (a[1] > b[1]) return -1
                else if (a[1] < b[1]) return 1
                else return 0
            })[0][0]
            console.log(maxPR)

            const maxUser = Array.from(users.entries()).sort((a, b) => {
                if (a[1] > b[1]) return -1
                else if (a[1] < b[1]) return 1
                else return 0
            })[0][0]
            console.log(maxUser)
        })
}

const promise = genDirs()
getOnlyDirs(promise)
dieHardUser(promise)