/***
 * Complete get_index_different_char fn to meet this goal. It receives a chars list and returns an int index (zero-based).

Just to be clear, alphanumeric == abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
 */

function getDiffChars(chars) {
    const alpha = []
    const nonAlpha = []
    let regExp = /^[A-Za-z0-9]+$/
    chars.forEach((char, idx) => {
        if (regExp.test(char)) alpha.push(`${char}:${idx}`)
        else nonAlpha.push(`${char}:${idx}`)
    })
    return alpha.length === 1 ? alpha[0].split(':')[1] : nonAlpha[0].split(':')[1]

}

// const r = getDiffChars(['A', 'f', '.', 'Q', 2])
// const r = getDiffChars(['.', '{', ' ^', '%', 'a'])
// const r = getDiffChars([1, '=', 3, 4, 5, 'A', 'b', 'a', 'b', 'c'])
// const r = getDiffChars(['=', '=', '', '/', '/', 9, ':', ';', '?', '¡'])
const r = getDiffChars([2, '.', ',', '!'])

console.log(r)
