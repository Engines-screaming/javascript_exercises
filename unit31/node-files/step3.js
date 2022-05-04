const fs = require("fs");
const axios = require("axios");

function cat(path) {
    if (path.includes('.txt')) {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                console.log(`Error reading ${path}: ${err}`);
            }
            output(data);
        })
    } else {
        webCat(path);
    }
}

function webCat(url) {
    axios.get(url)
        .then((resp) => {
            output(resp.data);
        })
        .catch((err) => {
            console.log(`error fetching ${url}: \n${err}`);
        })
}

function output(content) {
    if (output_file_idx) {
        fs.writeFile(argv[output_file_idx], content, "utf-8", (err) => {
            console.log(`error: ${err}`);
        });
    } else {
        console.log(content);
    }
}


const argv = process.argv
let output_file_idx = null;

// check for output file to write to
for (let i=0; i<argv.length; i++) {
    if (argv[i] === "--out") {
        output_file_idx = i + 1;
    }
}

cat(argv[argv.length - 1])