const { mean } = require('./helpers');

describe('Test mean function', function() {

    test('positive integers', function() {
        const nums = [1, 2, 3, 4];
        result = mean(nums);
        expect(result).toBeCloseTo(2.5);
    })

})