known_users = ['tom', 'harry', 'mike', 'carmen', 'sue']
loggedin_users = ['mike', 'sue']

function loginDecorator(fn) {
    return function deco(user) {
        if (!known_users.includes(user)) return 'please create an account'
        else if (!loggedin_users.includes(user)) return 'please login'
        else return fn(user)
    }
}

function welcome(user) {
    return `welcome back ${user}`

}

welcome = loginDecorator(welcome);

console.log(welcome('punit'))
console.log(welcome('tom'))
console.log(welcome('sue'))