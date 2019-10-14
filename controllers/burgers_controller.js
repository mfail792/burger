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



//note: can enter DELETE query here to delete table data and add button to index.handlebars page
// $("#text-enter").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();


//   <button type="submit" class="btn btn-primary" id="text-enter-button">Delete</button>


module.exports = router;
