
BITES = {6: 'PyBites Die Hard',
         7: 'Parsing dates from logs',
         9: 'Palindromes',
         10: 'Practice exceptions',
         11: 'Enrich a class with dunder methods',
         12: 'Write a user validation function',
         13: 'Convert dict in namedtuple/json',
         14: 'Generate a table of n sequences',
         15: 'Enumerate 2 sequences',
         16: 'Special PyBites date generator',
         17: 'Form teams from a group of friends',
         18: 'Find the most common word',
         19: 'Write a simple property',
         20: 'Write a context manager',
         21: 'Query a nested data structure'}
bites_done = [6, 10, 16, 18, 21]

class Promo {
    constructor() {
        this.bites_done = new Set(bites_done)
        this.arr = Object.keys(BITES).map(e => +e)
    }

    _pickRandomBite() {
        if(this.bites_done.size >= this.arr.length) throw new NoBitesAvailable
        let random = this.arr[Math.floor(Math.random() * this.arr.length)]
        while(true) {
            if (!this.bites_done.has(random)) {
                break
            }
            else {
                random = this.arr[Math.floor(Math.random() * this.arr.length)]
            }
        }
        return random
    }

    newBite() {
        const bite = this._pickRandomBite()
        this.bites_done.add(bite)
        return BITES[bite]
    }
}

class NoBitesAvailable extends Error {
    constructor(message){
        super(message)
    }
}

const p = new Promo()
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())
console.log(p.newBite())

