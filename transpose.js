POSTS = {
    '2017-8': 19, '2017-9': 13, '2017-10': 13,
    '2017-11': 12, '2017-12': 11, '2018-1': 3
}
NAMES = ['Bob', 'Julian', 'Tim', 'Carmen', 'Henk', 'Sofia', 'Bernard']
AGES = [19, 13, 13, 12, 11, 3, 5]

function transpose(...data) {
    if (data.length === 1) {
        data = data[0]
        return [Object.keys(data), Object.values(data)]
    }
    else {
        const results = []
        const len = Math.max(...(data.map(d => d.length)))
        for (let i = 0; i < len; i++) {
            const temp = []
            for (const e of data) temp.push(e[i])
            results.push(temp)
        }
        return results
    }

}

console.log(transpose(NAMES, AGES))