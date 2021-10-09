// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?
let q1 = new Set([1,1,2,2,3,4]);
// [1,2,3,4]


// Quick Question #2
// What does the following code return?
let q2 = [...new Set("referee")].join("") // ref


// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//  0: {Array(3) => true}
//  1: {Array(3) => false}


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    const uniques = new Set(arr);
    if (uniques.size === arr.length) {
        return true;
    } else {
        return false;
    }
}
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    let vowels = [...str].filter(letter => 'aeiou'.indexOf(letter) !== -1);
    let uniqueVowels = new Set(vowels);
    let vowelCounts = new Map();
    for (let vowel of uniqueVowels) {
        let count = 0;
        for (let letter of str) {
            if (letter === vowel) {
                count += 1;
            }
        }
        vowelCounts.set(vowel, count);
    }
    return vowelCounts;
}