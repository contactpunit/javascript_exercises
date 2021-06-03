/***
 * Find odd numbers in specified range
 */
function oddNumbers(l, r) {
    // Write your code here
    const nums = new Array(r + 1 - l).fill().map((_, i) => {
        if ((l + i) % 2 !== 0) return l + i
    }).filter(i => i)
    return nums
}

console.log(oddNumbers(4, 7))
console.log(oddNumbers(1, 7))
console.log(oddNumbers(7, 28))