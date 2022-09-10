function averagePair(inputArr, target) {
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = i + 1; j < inputArr.length; j++) {
            if ((inputArr[i] + inputArr[j])/2 === target) {
                return true;
            }
        }
    }
    return false;
}

export default averagePair;