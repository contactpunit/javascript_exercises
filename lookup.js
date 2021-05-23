/***
 * Complete getPersonAge that takes a name as argument and returns the age if in any of the 3 dictionaries. The lookup should be case insensitive, so tim, Tim and tiM should all yield 30. If not in any of the objects, return Not found.
 */

group1 = { 'tim': 30, 'bob': 17, 'ana': 24 }
group2 = { 'ana': 26, 'thomas': 64, 'helen': 26 }
group3 = { 'brenda': 17, 'otto': 44, 'thomas': 46 }

function getPersonAge(name) {
    const lookupName = name.toLowerCase()
    const finalGroup = Object.assign(group3, group2, group1)
    return finalGroup[lookupName] ? finalGroup[lookupName] : 'Not Found'

}

console.log(getPersonAge('Tim'))
console.log(getPersonAge('otto'))
console.log(getPersonAge('helen'))
console.log(getPersonAge('BrEnDa'))
console.log(getPersonAge('timothy'))