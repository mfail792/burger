var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");
//did not include bodyparser

var app = express();
var port = 3000;
app.listen(port);

//setting up mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "vegetable",
    database: "burgers_db"
});

//establishing connection
connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as id: ' + connection.threadId);
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set("view engine", 'handlebars');

