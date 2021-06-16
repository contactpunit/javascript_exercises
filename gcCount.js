const sequence = 'AAAAAAAATTTTTTGGGGCC'
const seq = "tagtgaaagatattcatttcgaaggccttcagcgtgtcgccgttggtgcggccctcctca"

function calcGcContent(sequence) {
    const m = new Map()
    for (char of sequence.split('')) {
        if (!m.has(char.toLowerCase())) m.set(char.toLowerCase(), 1)
        else m.set(char.toLowerCase(), m.get(char.toLowerCase()) + 1)
    }
    const total = Array.from(m.values()).reduce((collector, cur) => collector + cur)
    const ratio = (m.get('g') + m.get('c')) * 100 / total
    return ratio
}

console.log(calcGcContent(sequence))
console.log(calcGcContent(seq))