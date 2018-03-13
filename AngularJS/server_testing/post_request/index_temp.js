var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'hi', condition: true, anyArray: [1,2,3] });
});

router.get('/test/:id', function(req, res, next) {
	res.render('test', {output: req.params.id});
});

router.post('/test/sumbit', function(req, res, next) {
	res.redirect('/test/...');
});

module.exports = router;