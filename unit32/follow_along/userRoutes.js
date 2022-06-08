const express = require('express');
const router = new express.Router();


router.get('/', (req, res) => {
    return res.send('welcome to the pokedex, trainer');
});

router.get('/bulbasaur', (req, res) => {
    return res.send('<h1>BULBASAUR</h1>');
});

router.post('/bulbasaur', (req, res) => {
    return res.send('<h1>YOU CAUGHT A BULBASAUR!!!</h1>');
});


module.exports = router;