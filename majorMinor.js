const numbers = [1, 2, 2, 3, 2, 3, 3, 2]

function majorMinor(numbers) {
    const m = new Map()
    for(const n of numbers) {
        if(!m.get(n)) m.set(n, 1)
        else m.set(n, m.get(n) + 1)
    }
    const sorted = Array.from(m.entries()).sort((a,b) =>{
        if(a[1] > b[1]) return 1
        else if(a[1] < b[1]) return -1
        else return 0
    })
    return {major: sorted[sorted.length -1][0], minor: sorted[0][0]}
}

console.log(majorMinor(numbers))