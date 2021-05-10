/***
 * create queue to keep last n items only
 */

function MyQueue(n = 4) {
    this.elements = []
    this.size = n
}

MyQueue.prototype.push = function (element) {
    if (this.elements.length >= this.size) {
        this.elements.splice(0, (this.elements.length + 1) - this.size)
        this.elements.push(element)
    }
    else {
        this.elements.push(element)
    }
}

const q = new MyQueue()
q.push(1)
q.push(20)
q.push(30)
q.push(40)
q.push(90)
q.push(90)
q.push(90)
q.push(90)
console.log(q)