const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'database items were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
    message: 'database items were created'
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