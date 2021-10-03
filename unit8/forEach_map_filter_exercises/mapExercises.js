// const numbers = [21, 37, 64, 99, 142];

// negatives = numbers.map(function(num) {
//     return num * -1;
// });

// console.log(negatives);


// attempt at my own map function

function myMap(arr, func) {
    let new_ar r = [];

    for (let item in arr) {
        new_arr.push(func(item));
    }

    return new_arr
}

arr = [1, 2, 3];
new_arr = myMap(arr, function(val) {
    return val * 2;
})

console.log(new_arr);
console.log(arr);