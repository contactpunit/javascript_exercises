/*
First you will write a function to take out duplicates and title case them.
Then you will sort the list in alphabetical descending order by surname and lastly determine what the shortest first name is. For this exercise you can assume there is always one name and one surname.
 */

const NAMES = ['arnold schwarzenegger', 'alec baldwin', 'bob belderbos',
    'julian sequeira', 'sandra bullock', 'keanu reeves',
    'julbob pybites', 'bob belderbos', 'julian sequeira',
    'al pacino', 'brad pitt', 'matt damon', 'brad pitt']

function titleCase(names) {
    const unique = new Set(names)
    return Array.from(unique).map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
}

function sortList(names) {
    names.sort((a, b) => {
        if (a > b) { return 1 }
        else if (a < b) { return -1 }
        else return 0
    })
    return names
}

function shortestFname(names) {
    names.sort((a, b) => {
        first = a.split(/\s+/)[0]
        second = b.split(/\s+/)[0]
        if (first.length < second.length) return -1
        else if (first.length > second.length) return 1
        else return 0
    })
    return names[0]
}

const titleCaseNames = titleCase(NAMES)
const sortedNames = sortList(titleCaseNames)
const sName = shortestFname(sortedNames)
console.log(`Shortest name: ${sName}`)