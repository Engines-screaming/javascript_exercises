const express = require('express');
const { mean, median, mode } = require('./helpers');

app = express();

app.get('/mean', (req, res) => {
    const nums = [req.query.nums];
    return res.send(mean(nums));
});


app.get('/median', (req, res) => {
    const nums = [req.query.nums];
    return res.send(median(nums));
});

app.get('/mode', (req, res) => {
    const nums = [req.query.nums];
    return res.send(mode(nums));
});


app.listen(3000, function () {
    console.log('App on port 3000');
  })