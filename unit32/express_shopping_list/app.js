const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
const routes = require('./routes');
app.use('/', routes);

app.listen('3000', function(){
    console.log('server starting on port 3000')
})