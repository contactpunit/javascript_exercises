/***
 * Keep the list sorted on insert
 */

function OrderedList() {
    this.data = []
}

OrderedList.prototype.add = function (value) {
    const insertPlace = this.data.findIndex(elem => elem >= value)
    this.data.splice(insertPlace, 0, value)
}

const o = new OrderedList()
o.add(8)
o.add(4)
o.add(6)
o.add(-2)
o.add(1)
console.log(o.data)
