const express = require('express');

app = express();

app.get('/', (req, res) => {
    return res.send('welcome home');
});



app.listen(3000, function() {
    console.log("listening on port 3000");
});