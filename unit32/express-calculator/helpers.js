// statistical functions


function mean(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }

    return sum/nums.length;
}

module.exports = {mean};