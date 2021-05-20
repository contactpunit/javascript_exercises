/***
 * calculate the amount of space (literal space, not tab or newline) characters:

'string  ' -> 0 (we only care about leading spacing)
'  string' -> 2
'    string' -> 4
etc...
 */

function count_indents(text) {
    let count = 0
    for (const nonspace of text.split('')) {
        if (nonspace === ' ') count += 1
        else return count
    }
}

console.log(count_indents('    hey man how are you'))
console.log(count_indents('string  '))
console.log(count_indents('\t\tstring'))
console.log(count_indents('  str  ing'))