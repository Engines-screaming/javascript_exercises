const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const db = require('../db');

// GET /invoices
// Return info on invoices: like {invoices: [{id, comp_code}, ...]}
router.get('/', async function(req, res, next) {
  try {
    const results = await db.query(`SELECT comp_code, amt, paid, paid_date FROM invoices`);
    return res.json(results.rows);
  } catch(e) {
    return next(e);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    const cid = req.params.id;
    const invoice = await db.query(`SELECT id, amt, paid, add_date, paid_date, comp_code as company, name as company_name, description
                                    FROM invoices LEFT JOIN companies on invoices.comp_code = companies.code
                                    WHERE id = $1`, [cid]);
    return res.json({id: invoice.rows[0].id, 
                     amt: invoice.rows[0].amt, 
                     paid: invoice.rows[0].paid, 
                     add_date: invoice.rows[0].add_date, 
                     paid_date: invoice.rows[0].paid_date, 
                     company: {code: invoice.rows[0].company, 
                               name: invoice.rows[0].company_name, 
                               description: invoice.rows[0].description
                     }
    });
  } catch(e) {
    return next(e);
  }
});

router.post('/', async function(req, res, next) {
  try {
    const { comp_code, amt } = req.body;
    const results = await db.query(`INSERT INTO invoices (comp_code, amt) 
                                    VALUES ($1, $2)
                                    RETURNING id, comp_code, amt, paid, add_date, paid_date`, 
                                   [comp_code, amt]
    );
    return res.json({invoice: results.rows[0]});
  } catch(e) {
    next(e);
  }
});


// PUT /invoices/[id]
// Updates an invoice.
// If invoice cannot be found, returns a 404.
// Needs to be passed in a JSON body of {amt}
// Returns: {invoice: {id, comp_code, amt, paid, add_date, paid_date}}
router.put('/:id', async function(req, res, next) {
  try {
    const id = req.params.id;
    const result = await db.query(`UPDATE invoices SET amt=$1 WHERE id = $2
                                   RETURNING id, comp_code, amt, paid, add_date, paid_date`, 
                                   [amt, id]
    );
    return res.json({invoice: result.rows[0]});
  } catch(e) {
    return next(e);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    const id = req.params.id;
    const results = await db.query(`DELETE FROM invoices WHERE id = $1`, [id]);
    return res.json({status: "deleted"});
  } catch(e) {
    next(e);
  }
});


// GET /companies/[code]
// Return obj of company: {company: {code, name, description, invoices: [id, ...]}}
// If the company given cannot be found, this should return a 404 status response.



module.exports = router;