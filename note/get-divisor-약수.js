function getDivisor(n) {
    let index = 1
    let divisor = []
    while(index <= n) {
        if(n % index === 0) {
            divisor.push(index)
        }

        index++
    }

    return divisor
}