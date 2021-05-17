/***
 * Complete contains_only_vowels, contains_any_py_chars, and contains_digit
 */
const vowels = 'aeiou'
const digits = '0123456789'
const js = 'Javascript'

function contains_only_vowels(inputString) {
    return inputString.split('').every(element => vowels.includes(element.toLowerCase()))
}

function contains_any_js_chars(input) {
    return input.split('').some(element => js.includes(element.toLowerCase()))
}

function contains_digit(input) {
    return input.split('').some(element => digits.includes(element))

}

console.log(contains_only_vowels('EoUia'))
console.log(contains_digit('3243s5'))
console.log(contains_digit('dfrgs'))
console.log(contains_any_js_chars('js'))