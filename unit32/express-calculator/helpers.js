// statistical functions

function mean(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }

    return sum / nums.length;
};

function median(nums) {
    const sorted_nums = nums.sort((a, b) => {return a - b});
    let half = Math.floor(sorted_nums.length / 2);

    if (sorted_nums.length % 2 === 0) {
        return sorted_nums[half];
    } else {
        let result_idx = (sorted_nums[half] + sorted_nums[half + 1]) / 2;
        return sorted_nums[result_idx];
    }
};

function mode(nums) {
    const num_counts = {};

    nums.forEach((num) => {
        if (num in num_counts) {
            num_counts[num] += 1;
        } else {
            num_counts[num] = 1;
        };
    });

    let max_counts = 0;
    let max_counts_value = 0;
    for (let num in num_counts) {
        if (num_counts[num] > max_counts_value) {
            max_counts = num;
            max_counts_value = num_counts[num];
        };
    };
    
    return parseInt(max_counts)};

module.exports = {mean, median, mode};