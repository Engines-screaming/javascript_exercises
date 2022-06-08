const express = require('express');
const userRoutes = require('./userRoutes');
const middleware = require('./middleware');

app = express();
app.use(express.json());

app.use(middleware.logger);

app.use('/users', userRoutes); 


app.listen(3000, function() {
    console.log("listening on port 3000");
});