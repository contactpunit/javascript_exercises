/***
 * zip the 3 lists
 */

names = 'Tim Bob Julian Carmen Sofia Mike Kim Andre'.split(' ')
locations = 'DE ES AUS NL BR US'.split(' ')
confirmed = [false, true, true, false, true]

function zipping(...args) {
    const results = []
    const longest = args.reduce((curr, next) => {
        return curr.length > next.length ? curr : next
    }).length
    for (let i = 0; i < longest; i++) {
        const temp = []
        for (const arg of args) {
            temp.push(arg.length ? arg.splice(0, 1)[0] : '-')
        }
        results.push(temp)
    }
    return results
}

zipping(names, locations, confirmed)