/***
Create a function that takes a username and checks for a valid user:

The username is not there,
the user is not expired, and
the user has the ADMIN role.
If those 3 conditions are met return SECRET.

If one of the conditions is not True raise an exception you define yourself: UserDoesNotExist, UserAccessExpired and UserNoPermission respectively.
 */

const users = 'name role expired'.split(' ')
const USER = 'user'
const ADMIN = 'admin'
const SECRET = 'I am a very secret token'

const user1 = { name: 'Punit', role: USER, expired: false }
const user2 = { name: 'Manu', role: USER, expired: true }
const user3 = { name: 'Ram', role: ADMIN, expired: false }

function validateUser(username) {
    const m = new Map()
    for (const user of [user1, user2, user3]) {
        if (!m.has(user.name)) m.set(user.name, new Map())
        if (!m.get(user.name).has('role')) m.get(user.name).set('role', user.role)
        if (!m.get(user.name).has('expired')) m.get(user.name).set('expired', user.expired)
    }
    if (!m.has(username)) throw new UserDoesNotExist('User doesnot exists')
    if (m.get(username).get('expired')) throw new UserAccessExpired('user expired')
    if (!(m.get(username).get('role') === ADMIN)) throw new UserNoPermission('user doesnot have permissions')
    return SECRET
}

class UserDoesNotExist extends Error {
    constructor(message) {
        super(message)
        this.name = 'UserDoesNotExistException'
    }
}

class UserAccessExpired extends Error {
    constructor(message) {
        super(message)
        this.name = 'UserAccessExpiredException'
    }
}

class UserNoPermission extends Error {
    constructor(message) {
        super(message)
        this.name = 'UserNoPermissionException'
    }
}
validateUser('Ram')