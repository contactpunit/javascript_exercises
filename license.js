/***
 * Write a function called gen_key that creates a license key with this format: KI80OMZ7-5OGYC1AC-735LDPT1-4L11XU1U

The key consists of a combination of upper case letters and digits.

It takes two arguments: parts and chars_per_part which default to 4 and 8 respectively, so you can call the function like:

gen_key() to get a similar key as above, or
as gen_key(parts=3, chars_per_part=4) to get a shorter one, e.g. 54N8-I70K-2JZ7

*/

function gen_key(parts = 4, chars_per_part = 8) {
    const chars = new Array(26).fill().map((_, idx) => String.fromCharCode(65 + idx))
    const nums = new Array(10).fill().map((_, i) => i)
    const range = chars.concat(nums).join('')
    const licenceKey = new Array(parts).fill().
        map((_) => {
            return new Array(chars_per_part).
                fill().map(
                    (_) => range.charAt(Math.floor(Math.random() * range.length))
                ).join('')
        }).join('-')
    return licenceKey

}

console.log(gen_key())
console.log(gen_key(parts = 3, chars_per_part = 6))