let Convertor = (function () {
    const Convertor = function (value) {
        if (typeof new.target === 'undefined') {
            throw new Error('Constructor should be invoked using new keyword')
        }
        this.value = value
    }

    Object.defineProperty(Convertor.prototype, 'convert', {
        enumerable: false,
        writable: true,
        configurable: true,
        value: function (fmt) {
            if (typeof new.target !== 'undefined') throw new Error('cannot be invoked using new keyword')
            if (!['cm', 'in'].includes(fmt)) throw new Error('format should be either cm(centimeter) or in(inches)')
            if (fmt.toLowerCase() === 'cm') return this.value / 0.39370
            else return this.value * 0.39370

        }
    })
    return Convertor
})()

const c = new Convertor(100)
console.log(c)
console.log(c.convert('cm'))
console.log(c.convert('in'))