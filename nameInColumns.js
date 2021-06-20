function namesInColumns(names, cols = 2) {
    const quotient = Math.floor(names.length / cols)
    const remainder = names.length % cols
    const rows = remainder ? quotient + 1 : quotient
    for (let i = 0; i < rows; i++) {
        console.log(`| ${names.slice(i * cols, (i * cols) + cols).join(' | ')}`)
    }
}

names = 'Sara Tim Ana Punit John Michael Prada Kieth'.split(' ')

namesInColumns(names)
namesInColumns(names, cols = 3)
namesInColumns(names, cols = 4)