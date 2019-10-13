var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (burger_data) {
        console.log(burger_data);
        res.render('index', { burger_data });
    });

})

router.put('/burgers/update', function (req, res) {
    burger.updateOne(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

//exporting routes for server file
module.exports = router;