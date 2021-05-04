/*
Write a function that can sum up numbers:

It should receive a sequence of n numbers.
If no argument is provided, return sum of numbers 1..100.
Look closely to the type of the function's default argument ...
*/

function sumAll(...args) {
    if (args.length === 0) {
        const nums = Array(100).fill().map((_, idx) => idx + 1)
        return nums.reduce((prev, curr) => prev + curr)
    }
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}

const result = sumAll(1, 2, 3)