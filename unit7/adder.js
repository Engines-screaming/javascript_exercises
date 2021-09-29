function addNums(num1, num2) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        throw new Error('Non numeric input')
    }
    return num1 + num2;
}