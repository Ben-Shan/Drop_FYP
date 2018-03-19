const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors())

const imageRoutes = require('./api/routes/images');
const dbitemRoutes = require('./api/routes/db_item');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Headers','*');

if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST', 'GET', 'DELETE');;
    return res.status(200).json({});
}
next();
});

app.use('/images',imageRoutes);
app.use('/db_item',dbitemRoutes);

//if a request that cannot be handled by the above routes is sent, this handles the error
app.use((req, res, next) => {
    const error = new Error('Not found');
error.status = 404;
next(error);
})

//catches additional errors which might be a specific error/error status
app.use((req, res, next) => {
    res.status(err.status || 500);
res.json({
    error: {
        message: error.message
    }
});
})

module.exports = app;