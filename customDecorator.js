/***
 * decorator called makeHtml that wraps text inside one or more html tags.
 */

function makeHtml(decoParams) {
    return function inputparams(fn) {
        return function decorator(text) {
            console.log(`<${decoParams}>`)
            console.log(fn(text))
            console.log(`<${decoParams}/>`)
        }
    }
}

function getText(text) {
    return text
}

const text = 'I code with PyBites'

getText = makeHtml('strong')(getText)
// getText(text)

getText = makeHtml('p')(getText)
getText(text)
