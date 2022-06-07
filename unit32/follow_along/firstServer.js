const express = require('express');

app = express();


app.get('/', (req, res) => {
    return res.send('welcome trainer');
});

app.get('/bulbasaur', (req, res) => {
    return res.send('<h1>BULBASAUR</h1>');
});

app.post('/bulbasaur', (req, res) => {
    return res.send('<h1>YOU CAUGHT A BULBASAUR!!!</h1>');
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});