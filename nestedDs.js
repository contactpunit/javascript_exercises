/***
 * Given the provided cars object:

Get all Jeeps
Get the first car of every manufacturer.
Get all vehicles containing the string Trail in their names (should work for other grep too)
Sort the models (values) alphabetically
 */

cars = {
    'Ford': ['Falcon', 'Focus', 'Festiva', 'Fairlane'],
    'Holden': ['Commodore', 'Captiva', 'Barina', 'Trailblazer'],
    'Nissan': ['Maxima', 'Pulsar', '350Z', 'Navara'],
    'Honda': ['Civic', 'Accord', 'Odyssey', 'Jazz'],
    'Jeep': ['Grand Cherokee', 'Cherokee', 'Trailhawk', 'Trackhawk']
}

function allJeeps(cars) {
    return cars.Jeep.join(',')
}

function firstCarByManufacturer(cars) {
    const first = []
    for (const c in cars) {
        first.push(cars[c][0])
    }
    return first.join(',')
}

function stringMatch(cars) {
    const result = new Set()
    for (const car in cars) {
        cars[car].map(c => {
            if (c.toLowerCase().includes('trail')) {
                result.add(car)
            }
        })
    }
    return Array.from(result).join(',')
}

function sortAllModesl(cars) {
    for (car in cars) {
        cars[car].sort()
    }
    return cars
}

const jeeps = allJeeps(cars)
console.log(jeeps)
const first = firstCarByManufacturer(cars)
console.log(first)
const matches = stringMatch(cars)
console.log(matches)
const sorted = sortAllModesl(cars)
console.log(sorted)