/***
 * Create a class User
*/

let User = (function () {
    const User = function (firstName, lastName) {
        if (typeof new.target === 'undefined') {
            throw new Error('Class constructor cannot be instantiated without a new keyword')
        }
        this.firstName = firstName
        this.lastName = lastName
    }

    Object.defineProperty(User.prototype, 'getFullName', { // getter only
        enumerable: false,
        configurable: false,
        get: function () {
            return this.firstName + ' ' + this.lastName
        }
    })

    Object.defineProperty(User.prototype, 'username', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return `${this.firstName[0]}${this.lastName.slice(0, 7)}`.toLowerCase()
        }
    })

    User.prototype.toString = function () {
        return `${this.getFullName} (${this.username()})`
    }

    return User

})()

const user1 = new User('punit', 'Babaylon')
console.log(user1)
console.log(user1.getFullName)
console.log(user1.username())
console.log('' + user1)