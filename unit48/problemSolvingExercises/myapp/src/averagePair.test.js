import averagePair from './averagePair';

describe('testing averagePair function', () => {
    test('test #1', () => {
        expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    });
    
    test('test #2', () => {
        expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    });

    test('test #3', () => {
        expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    });

    test('test #4', () => {
        expect(averagePair([], 4)).toBe(false);
    });
    
});