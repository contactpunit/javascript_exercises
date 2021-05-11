/***
 * 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ..
 *
Complete the fizzbuzz function below, it should take a number and return the right sting or integer.
 */

function fizzbuzz(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        return 'Fizz Buzz'
    }
    if (input % 3 === 0) {
        return 'Fizz'
    }
    if (input % 5 === 0) {
        return 'Buzz'
    }
    return input
}

console.log(fizzbuzz(2))
console.log(fizzbuzz(12))
console.log(fizzbuzz(15))
console.log(fizzbuzz(5))