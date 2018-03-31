const express = require('express');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');

router.use(cors())


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits:{
        fileFilter: fileFilter
    }});

router.get('/', (req, res, next) => {
        res.status(200).json({
        message: req.file
    });
});

// router.post('/', upload.single('imageFile'),(req, res, next) => {
//     console.log(req.file);
// const image = {
//     //attributes of item that server will request (more important for db
//     name: req.body.name,
//     size: req.body.size
// };
// console.log(req.body.size);
//
// res.status(201).json({
//     message: storage
// });
// });

router.post('/', (req, res, next) => {
    console.log(req.name);
    const imageJSON = {
        //attributes of item that server will request (more important for db
        name: req.body.name,
        image: req.body.image
    };
    console.log(req.body.image);

    res.status(201).json({
        message: imageJSON

    });
});

//Ionic app uses get request to access image via its image id
// router.get('/:imageID', (req, res, next) => {
//     const id = req.params.imageID;
// if (id === 'special') {
//     // res.status(200).json({
//     //     message: id,
//     //     id: id,
//     //     file: '././uploads/' + id
//     // });
//     res.sendFile(id, { root: path.join(__dirname, '../uploads') });
// }else {
//     res.sendFile(id, { root: path.join(__dirname, '../uploads') });
//     // res.status(200).json({
//     //     message: id
//     //     //file: '././uploads/' + id
//     // });
//     //res.sendFile(id, { root: path.join( '././uploads') });
//     //res.sendFile(id, { root: path.join(__dirname, '../uploads') });
// }
// });

router.get('/:imageID', (req, res, next) => {
    const id = req.params.imageID;
    res.sendFile(id, { root: path.join(__dirname, '../uploads') });
    // res.status(200).json({
    //     message: id,
    //     id: id
    // });
});

//sent after Ionic app has downloaded image
router.delete('/:imageID', (req, res, next) => {
    res.status(200).json({
    message: 'deleted image'
});
})

module.exports = router;