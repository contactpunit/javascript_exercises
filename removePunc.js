puncChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
const puncArray = puncChars.split('')

function remove_punctuation(input_string) {
    const result = input_string.split('').filter(char => {
        if (!puncArray.includes(char)) {
            return char
        }
    })
    return result.join('')
}

console.log(remove_punctuation('Hello, I am Tim.'))
console.log(remove_punctuation(';String. with. punctuation characters!'))
console.log(remove_punctuation('Watch out!!!'))