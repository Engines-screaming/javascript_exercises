const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
const routes = require('./routes');
app.use('/', routes);


// // error handling
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     return res.json({
//         error: err.message
//     });
// });

module.exports = app