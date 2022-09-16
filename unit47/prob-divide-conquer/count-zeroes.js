function countZeroes(inputArr) {
    // define zeros_couter = 0
    let zerosCounter = 0;
    let middleIdx;
    if (inputArr.length % 2 === 0) {
        middleIdx = Math.floor(inputArr.length / 2);
        for (let i = 0; i < middleIdx; i++) {
            if (inputArr[i] === 0) zerosCounter++;
            if (inputArr[middleIdx + i] === 0) zerosCounter++;
        }
    } else {
        const iterations = Math.floor((inputArr.length - 1) / 2);
        middleIdx = Math.ceil((inputArr.length - 1) / 2);
        if (inputArr[middleIdx] === 0) zerosCounter++;
        for (let i = 0; i < iterations; i++) {
            if (inputArr[middleIdx + i + 1] === 0) zerosCounter++;
            if (inputArr[middleIdx - (i + 1)] === 0) zerosCounter++;
        }
    }
    return zerosCounter;
}

module.exports = countZeroes