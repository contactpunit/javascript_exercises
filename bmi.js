/***
 * create a argparser to calculate bmi
 */

const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser(
    {
        description: 'Calculate your BMI'
    }
)

parser.add_argument('-w', '--weight', { help: 'Your weight in kg', required: true })
parser.add_argument('-l', '--length', { help: 'Your length in cm', required: true })
const args = parser.parse_args()

if (args.length && args.weight) {
    const result = calc_bmi(args.weight, args.length)
    return result
}

function calc_bmi(weight, length) {
    const bmi = +weight / ((+length / 100) ** 2)
    return Math.round(bmi)
}
