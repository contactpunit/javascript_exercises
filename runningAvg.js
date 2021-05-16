/**
 * running average
 */

function* running_avg(nums) {
    // works with generators
    let total = 0
    let count = 0
    let avg = 0
    for (const num of nums) {
        total += num
        count += 1
        avg = total / count
        yield avg
    }
}

const avg = running_avg([10, 20, 30, 40, 50])
let result = avg.next()
while (!result.done) {
    console.log(result.value)
    result = avg.next()
}