/***
 * write a function mostProlificAutomaker to find out which automaker produces the most new models for a particular year.

Secondly you will write get_models which filters the data set down to car models produced by a particular automaker and year (as passed into the function).
 */

const fetch = require('node-fetch')
const url = 'http://projects.bobbelderbos.com/pcc/cars.json'

async function getJsonData(url) {
    const response = await fetch(url)
    if (response.status === 200) {
        const data = await response.json()
        return data
    }
}

async function yearOfMaxModels(data) {
    const models = new Map()
    for (const record of data) {
        if (!models.get(record['year'])) models.set(record['year'], new Set())
        models.set(record['year'], models.get(record['year']).add(record['automaker']))
    }
    const sortedMap = [...models.entries()].sort((a, b) => {
        if (a[1].size < b[1].size) return 1
        else if (a[1].size > b[1].size) return -1
        else return 0
    })
    return sortedMap[0]
}

async function mostProlificAutomaker(data, year) {
    // const makerYearMap = await createMapping(data)
    const yearRecord = data.get(year)
    const sorted = [...yearRecord.entries()].sort((a, b) => {
        if (a[1].size < b[1].size) return 1
        else if (a[1].size > b[1].size) return -1
        else return 0
    })
    return sorted
}

async function createMapping(data) {
    const makerYearMap = new Map()
    for (const record of data) {
        const rmaker = record['automaker']
        const ryear = record['year']
        const rmodel = record['model']
        if (!makerYearMap.get(ryear)) makerYearMap.set(ryear, new Map())
        if (!makerYearMap.get(ryear).get(rmaker)) makerYearMap.get(ryear).set(rmaker, new Set())
        makerYearMap.get(ryear).set(rmaker, makerYearMap.get(ryear).get(rmaker).add(rmodel))
    }
    return makerYearMap
}

async function get_models(data, automaker, year) {
    const models = data.get(year).get(automaker)
    return [...models]
}

async function run() {
    const results = await getJsonData(url)
    const yearDetails = await yearOfMaxModels(results)
    console.log(yearDetails[0])
    const yearMap = await createMapping(results)
    const automakers = await mostProlificAutomaker(yearMap, 1999)
    console.log(automakers[0][0])
    const models = await get_models(yearMap, 'Volkswagen', 2008)
    console.log(models)
}

run()