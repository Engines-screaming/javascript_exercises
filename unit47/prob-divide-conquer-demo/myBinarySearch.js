function myBinarySearch(inputArr, target) {
    let tries = 1;
    // calculate middle index with floor division 
    let middle_index = Math.floor(inputArr.length - 1 / 2);
    while (inputArr[middle_index] !== target) {
        if (inputArr[middle_index] > target) {
            middle_index = Math.floor(inputArr.length - middle_index);
        } else if (inputArr[middle_index] < target) {
            middle_index = Math.floor(middle_index / 2);
        } 
        tries++;
    }

    console.log(`took ${tries} tries to guess ${target}`);
}

console.log("starting search");
const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 3;
myBinarySearch(inputArr, target);
