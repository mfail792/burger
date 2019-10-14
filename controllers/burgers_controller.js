var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.selectAll(function (burger_data) {
        res.render('index', { burger_data });
    });
});

router.post('/burgers/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

router.put('/burgers/update', function (req, res) {
    burger.updateOne(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });
});





//note: can input delete table function here


module.exports = router;
