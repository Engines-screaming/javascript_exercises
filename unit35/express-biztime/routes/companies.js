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

router.post('/', async function(req, res, next) {
    try {
        const { code, name, description } = req.body;
        const results = await db.query(`INSERT INTO companies (code, name, description)
                                            VALUES ($1, $2, $3) RETURNING code, name, description`, [code, name, description]);
        return res.status(201).json({company: results.rows[0]});
    } catch (e) {
        return next(e);
    }
});


// PUT /companies/[code]
// Edit existing company.

// Should return 404 if company cannot be found.

// Needs to be given JSON like: {name, description}

// Returns update company object: {company: {code, name, description}}
router.put('/:code', async function(req, res, next) {
    try {
        const companyCode = req.params.code;
        const { name, description } = req.body;
        const result = await db.query(`UPDATE companies SET name=$1, description=$2
                                        WHERE code=$3
                                        RETURNING code, name, description`, 
                                        [name, description, companyCode]
        );
        return res.json({companies: result.rows[0]});
    } catch(e) {
        return next(e);
    }
});




// DELETE /companies/[code]
// Deletes company.

// Should return 404 if company cannot be found.

// Returns {status: "deleted"}

module.exports = router;