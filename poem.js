/***
 * Convert below to a poem
 */

const input = `
                      Remember me when I am gone away,
                      Gone far away into the silent land;
                      When you can no more hold me by the hand,

                      Nor I half turn to go yet turning stay.


                      Remember me when no more day by day
                      You tell me of our future that you planned:
                      Only remember me; you understand
`

function poem(input) {
    let prev = false
    const lines = input.split('\n')
    for (const line of lines) {
        if (!line) {
            prev = true
            continue
        }
        if (line && prev) {
            console.log(line.trim())
            prev = false
        }
        else {
            console.log('\t' + line.trim())
        }
    }
}

console.log(poem(input))