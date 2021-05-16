my_cities = ['Rome', 'Paris', 'Madrid', 'Chicago', 'Seville', 'Berlin']
other_cities = ['Paris', 'Boston', 'Sydney', 'Madrid', 'Moscow', 'Lima']

function uncommon_cities(my_cities, other_cities) {
    const myCitiesSet = new Set(my_cities)
    const otherCitiesSet = new Set(other_cities)
    const d1 = [...myCitiesSet].filter(s => !otherCitiesSet.has(s))
    const d2 = [...otherCitiesSet].filter(s => !myCitiesSet.has(s))
    return [...d1, ...d2]
}

const result = uncommon_cities(my_cities, other_cities)
console.log(result)