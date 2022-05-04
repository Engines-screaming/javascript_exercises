const fs = require("fs");
const axios = require("axios");

function cat(path) {
    if (path.includes('.txt')) {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                console.log(`Error reading ${path}: ${err}`);
            }
            console.log(data);
        })
    } else {
        webCat(path);
    }
}

function webCat(url) {
    axios.get(url)
        .then((resp) => {
            console.log(resp.data);
        })
        .catch((err) => {
            console.log(`error fetching ${url}: \n${err}`);
        })
}

const argv = process.argv
cat(argv[2]);