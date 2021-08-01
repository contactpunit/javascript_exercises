function getProfile(name, age, ...input) {
    const remain = {}
    const sports = []
    if (!age) throw new TypeError('age not provided')
    if (typeof age !== 'number') {
        throw new ValueError('not a number')
    }
    if (input.length > 0) {
        for (k of input) {
            if (typeof k === 'object' && !Array.isArray(k)) Object.assign(remain, k)
            else sports.push(k)
        }
    }
    if (sports.length > 5) throw new ValueError('more than 5 sports')
    const result = { name, age }
    if (sports.length > 0) Object.assign(result, { sports })
    if (Object.keys(remain).length) Object.assign(result, { awards: remain })
    return result
}

class ValueError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValueError'
    }
}

class TypeError extends Error {
    constructor(message) {
        super(message)
        this.name = 'TypeError'
    }
}

// getProfile('tim')
// getProfile('tim', 'nonint')
getProfile('tim', 36, 'tennis', 'basketball')
getProfile('tim', 36, 'tennis')
getProfile('tim', 36, 'tennis', { champ: 'helped out team in crisis' })
getProfile('tim', 36, 'tennis', {
    service: 'going the extra mile for our customers',
    champ: 'helped out the team in crisis',
    attitude: 'unbeatable positive + uplifting'
})