/***
 * is between 6 and 12 chars long (both inclusive)
has at least 1 digit [0-9]
has at least two lowercase chars [a-z]
has at least one uppercase char [A-Z]
has at least one punctuation char
Has not been used before (use: usedPasswords)
 */

const usedPasswords = []
function validatePassword(password) {
    pmap = { 'upper': 0, 'lower': 0, 'special': 0 }
    if (password.length < 6 && password > 12) throw new PasswordInvalidError('Password length too short')
    if (!/\d+/.test(password)) throw new PasswordInvalidError('Password should have atleast 1 digit')
    if (usedPasswords.includes(password)) throw new PasswordInvalidError('Already used password')
    for (const char of password) {
        if (/[a-z]/.test(char)) pmap['lower'] += 1
        if (/[A-Z]/.test(char)) pmap['upper'] += 1
        if (/[!"#$%&'()*+, -./:;<=>?@[\]^_`{|}~]/.test(char)) pmap['special'] += 1
    }
    if (pmap['lower'] < 2) throw new PasswordInvalidError('Password has less than 2 lowercase letters')
    if (!pmap['upper']) throw new PasswordInvalidError('Password has less than 1 uppercase letters')
    if (!pmap['special']) throw new PasswordInvalidError('Password has less than 1 punctuation character')
    return true
}

class PasswordInvalidError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PasswordInvalidError'
    }
}

// console.log(validatePassword('UPPERCASE'))
// console.log(validatePassword('lowercase'))
// console.log(validatePassword('PW_no_digits'))
// console.log(validatePassword('Pw9NoPunc'))
// console.log(validatePassword('_password_'))
// console.log(validatePassword('@#$$)==1'))
console.log(validatePassword('passWord9_'))
console.log(validatePassword('another>4Y'))
console.log(validatePassword('PyBites@1912'))
console.log(validatePassword('We<3Python'))