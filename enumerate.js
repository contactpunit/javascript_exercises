/**
 * Iterate over the given names and countries lists, printing them prepending the number of the loop (starting at 1). Here is the output you need to deliver:

1. Julian     Australia
2. Bob        Spain
3. PyBites    Global
4. Dante      Argentina
5. Martin     USA
6. Rodolfo    Mexico

 */

names = 'Julian Bob PyBites Dante Martin Rodolfo'.split(/\s+/)
countries = 'Australia Spain Global Argentina USA Mexico'.split(/\s+/)

function enumerate(names, countries) {
    names.map((name, idx) => {
        console.log(`${idx}\t${name}\t${countries[idx]}`)
    })
}

enumerate(names, countries)