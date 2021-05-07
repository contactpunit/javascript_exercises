/***
 * Write a function called get_profile that can only allows 2 keyword arguments: name and profession which default to punit and programmer respectively.
 */

function get_profile({ name = "punit", profession = "programmer" }, ...remaining) {
    console.log(`${name} is a ${profession}`)
}

get_profile({ name: 'punit', profession: 'programmer' })