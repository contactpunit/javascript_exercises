// Swap character case

const text = "Today we added TWO NEW Bites to our Platform, exciting!"
function convertChars(text) {
    const values = text.split('').map(elem => {
        return _flipCase(elem)
    })
    return values.join('')
}

function _flipCase(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return char.toLowerCase()
    }
    else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        return char.toUpperCase()
    }
    else {
        return char
    }
}

console.log(convertChars(text))