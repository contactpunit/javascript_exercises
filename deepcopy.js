// creating a deep copy in javascript
// Really interesting exercise

// items = [{ 'id': 1, 'name': 'laptop', 'value': 1000 },
// { 'id': 2, 'name': { 'product': 'chair' }, 'value': [300, 400] },
// { 'id': 3, 'name': 'book', 'value': 20 },
// [20, 30],
//     10]

items = { 'id': 2, 'name': { 'product': 'chair' }, 'value': [300, 400] }

function duplicate_items(items) {
    if (typeof (items) !== 'object') {
        return items
    }
    else if (Array.isArray(items)) {
        const temp = []
        for (const item of items) {
            if (typeof (item) !== 'object') {
                temp.push(item)
            }
            else if (Array.isArray(item)) {
                temp.push(duplicate_items(item))
            }
            else {
                const result = duplicate_items(item)
                temp.push(result)
            }
        }
        return temp
    }
    else if (!Array.isArray(items)) {
        const obj = {}
        for (const key in items) {
            if (Array.isArray(items[key])) {
                obj[key] = duplicate_items(items[key])
            }
            else if (typeof (items[key]) !== 'object') {
                obj[key] = items[key]
            }
            else {
                obj[key] = duplicate_items(items[key])
            }
        }
        return obj
    }
}

const result = duplicate_items(items)
// result[1]['name']['product'] = 'book'
console.log(result)
console.log('*************')
console.log(items)