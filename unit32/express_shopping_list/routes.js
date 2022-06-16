const express = require('express');
const router = new express.Router();

// fake db
const items = require('./fakeDB');

router.get('/items', (req, res) => {
    // TODO
    return res.json(items);
});

// router.post('/items', (req, res) => {
//     // TODO
// });

// router.get('/items/:name', (req, res) => {
//     // TODO
// });

// router.patch('/items/:name', (req, res) => {
//     // TODO
// });

// router.delete('/items/:name', (req, res) => {
//     // TODO
// });

module.exports = router;