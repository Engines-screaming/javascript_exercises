colors = ['blue', 'green', 'red']

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(colors, function(color) {
    console.log(color.toUpperCase());
})