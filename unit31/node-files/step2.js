
const fs = require("fs")


function cat(path) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(`Error reading ${path}: ${err}`)
        }
        console.log(data)
    })
}

cat("one.txt")
cat("onesdfasdf.txt")