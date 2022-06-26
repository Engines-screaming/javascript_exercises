const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const db = require('../db');

router.get('/', async function(req, res, next) {
    try {
        const results = await db.query('select code, name, description from companies;');
        return res.json({ companies: results.rows});
    } catch (e) {
        return next(e);
    }
});

router.get('/:code', async function(req, res, next) {
    try {
        const companyCode = req.params.code;
        const results = await db.query(`select * from companies where code=$1`, [companyCode]);
        return res.json({ companies: results.rows});
    } catch (e) {
        return next(e);
    }
});

module.exports = router;