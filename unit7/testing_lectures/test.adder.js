it('should add two positive numbers correctly', function() {
    expect(addNums(2, 2)).toEqual(4);
    expect(addNums(40, 20)).toEqual(60);
});

it('should add two negative numbers correctly', function() {
    expect(addNums(-2, -39)).toEqual(-41);
    expect(addNums(-5,-55)).toEqual(-60);
});

it('should be able to throw an error for non-int args', function() {
    expect(() => addNums('yo', 'sdlfkj')).toThrowError();
});