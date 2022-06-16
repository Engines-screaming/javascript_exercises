const express = require('express');
const router = new express.Router();

// fake db
const items = require('./fakeDB');

router.get('/items', (req, res) => {
    // returns list of shopping items
    return res.json(items);
});

router.post('/items', (req, res) => {
    // accepts json data and adds it to shopping list
    const newItem = {name: req.query.name, price: req.query.price};
    items.push(newItem);
    return res.json({added: newItem});
});

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