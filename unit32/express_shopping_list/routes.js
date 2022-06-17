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

router.get('/items/:name', (req, res) => {
    const searchedItem = items.find(item => item.name === req.params.name);
    return res.json(searchedItem);
});

router.patch('/items/:name', (req, res) => {
    for (let item in items) {
        if (item.name === req.body.name) {
            item.price = req.body.price;
        };
    };
    console.log(items);
    
    return res.json({updated: {name: req.body.name, price: req.body.price}});
});

// router.delete('/items/:name', (req, res) => {
//     // TODO
// });

module.exports = router;