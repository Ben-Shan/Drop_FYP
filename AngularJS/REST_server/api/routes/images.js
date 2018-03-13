const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /images'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
    message: 'Handling POST requests to /images'
});
});
//Ionic app uses get request to access image via its image id
router.get('/:imageID', (req, res, next) => {
    const id = req.params.imageID;
    if (id === 'special') {
        res.status(200).json({
            message: 'you got the id',
            id: id
        });
    }else {
        res.status(200).json({
            message:'you passed an id'
        });
    }
});

//sent after Ionic app has downloaded image
router.delete('/:imageID', (req, res, next) => {
    res.status(200).json({
        message: 'deleted image'
    });
})

module.exports = router;