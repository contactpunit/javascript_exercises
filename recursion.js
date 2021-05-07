function countdown_for(start = 10) {
    if (start === 0) {
        console.log('Time is up')
    }
    if (start > 0) {
        console.log(start)
        countdown_for(start - 1)
    }
}

function countdown_recursive(start = 10) {

}

// countdown_for()
countdown_recursive()