data = `last_name,first_name,country_code
Watsham, Husain, ID
Harrold, Alphonso, BR
Apdell, Margo, CN
Tomblings, Deerdre, RU
Wasielewski, Sula, ID
Jeffry, Rudolph, TD
Brenston, Luke, SE
Parrett, Ines, CN
Braunle, Kermit, PL
Halbard, Davie, CN`

function groupNamesByCountry(data) {
    const entryMap = new Map()
    const entries = data.split('\n')[Symbol.iterator]()
    entries.next()
    for (const entry of entries) {
        const [lname, fname, ccode] = entry.split(',').map(e => e.trim())
        if (!entryMap.has(ccode)) entryMap.set(ccode, [])
        entryMap.get(ccode).push(`${fname} ${lname}`)
    }
    return entryMap
}

console.log(groupNamesByCountry(data))