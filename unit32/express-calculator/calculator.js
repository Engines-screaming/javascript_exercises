const express = require('express');

app = express();

app.get('/mean', (req, res) => {
    const nums = [req.query.nums];
    return res.send(Math.mean(nums));
});


app.get('/median', (req, res) => {
    const nums = [req.query.nums];
    return res.send(Math.mean(nums));
});

app.get('/mode', (req, res) => {
    const nums = [req.query.nums];
    return res.send(Math.mode(nums));
});


app.listen(3000, function () {
    console.log('App on port 3000');
  })