/***
In this filter out the items in the set and returns the resulting object, so if your object is {1: 'punit', 2: 'sumit', 3: 'jim'} and your set is {2, 3}, the resulting object would be {1: 'punit'}.
 */

exercises = {
    6: 'Exercise1 arrays',
    7: 'Parsing dates from logs',
    9: 'Palindromes',
    10: 'Practice exceptions',
    11: 'Enrich a class with dunder methods',
    12: 'Write a user validation function',
    13: 'Javascript is great',
    14: 'Generate a table of n sequences',
    15: 'Objects are fantastic',
    16: 'Proxys are core',
    17: 'Form teams from a group of friends',
    18: 'Find the most common word',
    19: 'Write a simple string',
    20: 'Write a program',
    21: 'Query a nested data structure'
}
exclude_exercises = new Set([6, 10, 16, 18, 21])

function filterExercises(exercises, done = exclude_exercises) {
    const filtered = Object.entries(exercises).filter(entry => {
        if (!exclude_exercises.has(+entry[0])) {
            return entry
        }
    })
    return new Map(filtered)
}

filterExercises(exercises, exclude_exercises)