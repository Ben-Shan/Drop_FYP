const express = require('express');
const router = express.Router();
const cors = require('cors');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'birdman911',
    database : 'imagesDB'
});

router.use(cors())

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'database items were fetched'
    });
});

router.post('/', (req, res, next) => {
    const dbitem = {
            dbitemID: req.body.dbitemID,
            itemIP: req.body.itemIP
    }
    res.status(201).json({
        message: 'database items were created',
        db_item: db_item
    });
});

router.get('/:dbitemID', (req, res, next) => {
    res.status(200).json({
        message: 'database items details',
        dbitemID: req.params.dbitemID
    });
});

router.delete('/:dbitemID', (req, res, next) => {
    res.status(200).json({
        message: 'database items deleted',
        dbitemID: req.params.dbitemID
    });
});

module.exports = router;