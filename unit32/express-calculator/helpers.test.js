const { mean, mode, median } = require('./helpers');

describe('Test mean function', function () {

    test('mean test # 1', function() {
        const nums = [1, 2, 3, 4];
        result = mean(nums);
        expect(result).toBeCloseTo(2.5);
    });

});

describe('Test mode function', function () {

    test('mode test #1', function() {
        const nums = [3, 4, 8, 10, 12, 12];
        result = mode(nums);
        expect(result).toBe(12);
    })
    
})


describe('Test median function', function () {

    test('median test #1', function() {
        const nums = [3, 4, 8, 10, 12, 12];
        result = median(nums);
        expect(result).toBe(10);
    })
    
})