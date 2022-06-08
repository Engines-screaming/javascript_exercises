const express = require('express');
const userRoutes = require('./userRoutes');

app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.listen(3000, function() {
    console.log("listening on port 3000");
});