require('dotenv').config();
const express = require('express');
const app = express();
const config = require('./Config/config');
const router = require('./Router/index');
const db = require('./Config/database');
require('./Config/express')(app);

app.use('/', router);

app.listen(process.env.PORT || config.port, (err) => {
    if (err) {
        console.log('Server error:', err);
        return;
    }
    db();
    console.log(`Server is listening on port:${config.port}`);
});