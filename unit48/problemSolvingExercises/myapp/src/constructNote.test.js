import constructNote from './constructNote';

describe('testing constructNote function', () => {
    test('test #1', () => {
        expect(constructNote('aa', 'abc')).toBe(false);
    })
    
    test('test #2', () => {
        expect(constructNote('abc', 'dcba')).toBe(true);
    })

    test('test #3', () => {
        expect(constructNote('aabbcc', 'bcabcaddff')).toBe(true);
    })
    
})