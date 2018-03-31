const express = require('express');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'birdman911',
    database : 'imagesDB'
});

router.use(cors());

// connection.connect(function(err){
//     if(!err) {
//         console.log("Database is connected ... nn");
//     } else {
//         console.log("Error connecting database ... nn");
//     }
// });

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// connection.query('SELECT * from < table name >', function(err, rows, fields) {
//     if (!err)
//         console.log('The solution is: ', rows);
//     else
//         console.log('Error while performing Query.');
// });

// connection.end();


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
    //console.log(name);
    const id = req.params.name;
//console.log(id);

//res.sendFile(id, { root: path.join(__dirname, '../uploads') });

var sql = "SELECT image FROM images WHERE name = 2018-03-31T21:04:39.944Zdrop_pres_logo2.png " ;
connection.query(sql, function (err, result) {
    console.log('get req');
    if (err) throw err;
    console.log(result);
    res.send(result);
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
    //console.log(req.body.image);

    res.status(201).json({
        message: imageJSON
    });
    // connection.connect(function(err){
    //     if(!err) {
    //         console.log("Database is connected ... nn");
    //     } else {
    //         console.log("Error connecting database ... nn");
    //     }
    // });
// var post = {id: 1, name: req.body.name, image: req.body.image};
// var query = connection.query('INSERT INTO images (id, name, image) VALUES ?', post,
//         function(err, rows, fields) {
//             connection.end();
//             if (!err)
//                 console.log('The solution is: ', rows);
//             else
//                 console.log('Error while performing Query.', err);
//         });

        //Make SQL statement:
        var sql = "INSERT INTO images (name, image) VALUES ?";
        //Make an array of values:
        var values = [
            [req.body.name, req.body.image]
        ];
        console.log(req.body.name);
        //Execute the SQL statement, with the value array:
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });

    // connection.end();
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

// router.get('/:imageID', (req, res, next) => {
//     const id = req.params.imageID;
//     res.sendFile(id, { root: path.join(__dirname, '../uploads') });
//     // res.status(200).json({
//     //     message: id,
//     //     id: id
//     // });
// });

router.get('/', (req, res, next) => {
    //console.log(name);
    const id = req.params.name;
    //console.log(id);

    //res.sendFile(id, { root: path.join(__dirname, '../uploads') });

    var sql = "SELECT image FROM images WHERE name = '2018-03-31T21:04:39.944Zdrop_pres_logo2.png' ";
    connection.query(sql, function (err, result) {
        console.log('get req');
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

//sent after Ionic app has downloaded image
router.delete('/:imageID', (req, res, next) => {
    res.status(200).json({
    message: 'deleted image'
});
})

module.exports = router;