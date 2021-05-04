/**
 * Write a simple Promo class. Its constructor receives two variables: name (which must be a string) and expires (which must be a datetime object).

Add a getter called expired which returns a boolean value indicating whether the promo has expired or not.
 */

class Promo {
    constructor(name, expires) {
        this.name = name
        this.expires = new Date(expires)
    }

    get expired() {
        if (Date.now() > this.expires) {
            return true
        }
        else {
            return false
        }
    }
}

const p = new Promo('Punit', '05-05-2021')
console.log(p.expired)