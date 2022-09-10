// function averagePair(inputArr, target) {
//     for (let i = 0; i < inputArr.length; i++) {
//         for (let j = i + 1; j < inputArr.length; j++) {
//             if ((inputArr[i] + inputArr[j])/2 === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


function averagePair(inputArr, target) {
    // optimized solution with pointers method
    let lptr = 0;
    let rptr = inputArr.length - 1;

    while (lptr < rptr) {
        let currentAvg = (inputArr[lptr] + inputArr[rptr]) / 2;
        if (currentAvg === target) {
            return true;
        } else if (currentAvg < target) {
            lptr++;
        } else if (currentAvg > target) {
            rptr--;
        }
    }
    return false;
}

export default averagePair;