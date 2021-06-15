
UPPER_SLICE = "=== Upper bread slice ==="
LOWER_SLICE = "=== Lower bread slice ==="

function sandwitch(func) {
    return function (param) {
        console.log(UPPER_SLICE)
        func(param)
        console.log(LOWER_SLICE)
    }
}

function add_ingredients(ingredients) {
    console.log(ingredients.join(' / '))
}

const ingredients = ['bacon', 'lettuce', 'tomato']

add_ingredients = sandwitch(add_ingredients)
console.log(add_ingredients(ingredients))
