const express = require('express');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');
const fileUpload = require('express-fileupload');

router.use(cors());
router.use(fileUpload());

router.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./uploads/'+sampleFile, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

module.exports = router;