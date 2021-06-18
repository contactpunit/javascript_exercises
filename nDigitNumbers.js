function nDigitNumbers(nums, n) {
    if (n < 1) throw Error('Value less than 1')
    const modified = nums.map(num => {
        let sign = ''
        num = num.toString()
        if (num < 0) {
            sign = '-'
            num = num.slice(1, num.toString().length)
        }
        if (num.includes('.')) {
            num = num.replace('.', '')
        }
        if (num.length === n) {
            num = num
        }
        else if (num.length < n) {
            num = parseInt(num + ('0' * (n - nums.length)))
        }
        else {
            num = parseInt(num.slice(0, n))
        }
        num = sign ? sign + num : num
        return parseInt(num)
    })
    console.log(modified)
}

nDigitNumbers([1, 2, 3], 2)
nDigitNumbers([1, 2, 3], 1)
nDigitNumbers([-1.1, 2.22, -3.333], 3)
nDigitNumbers([5.2, 1600, 520, 3600, 13, 55, 4000], 2)
nDigitNumbers([-1.1, 2.22, -3.333], 3)
nDigitNumbers([-1.1, 2.22, -3.333, 4444, 55555], 4)