/***
 * # Unix command
$ wc wc.py
      22      85     771 wc.py

# your script
$ node wc.js './test.txt'
22	85	771 test.txt
 */

// If e also count each space in a line like wc does for each character
const fs = require('fs')
const files = process.argv.slice(2)
for (const file of files) {
    const data = fs.readFileSync(file, 'utf-8')
    const lines = data.split('\n')
    const wordsArray = lines.map(line => line.split(/\s+/))
    const words = [].concat(...wordsArray.map(word => {
        return word.filter(w => w)
    }))
    const chars = [].concat(...lines.map(line => {
        return line.split('').filter(l => l)
    }))
    console.log(`${lines.length}\t${words.length}\t${chars.length}\tfile`)
}

return
//If we dont count each character between words

for (const file of files) {
    const data = fs.readFileSync(file, 'utf-8')
    const lines = data.split('\n')
    const wordsArray = lines.map(line => line.split(/\s+/))
    const words = [].concat(...wordsArray.map(word => {
        return word.filter(w => w)
    }))
    const chars = [].concat(...words.map(word => {
        return word.split('')
            .filter(element => element)
    }))
    console.log(`${lines.length}\t${words.length}\t${chars.length}\tfile`)
}