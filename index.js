var express = require('Express');
var app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');




let PORT = 3000; 

require("dotenv");

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: true }));

// connecting public folder for update
app.use(express.static("public"));

app.listen(PORT, function(){
    console.log(`Server.js listening on ${PORT}`)
})
app.get("/", function(req, res){
    res.render("inventory.ejs");
})

// POST METHOD
app.post("/", (req, res) => {
    console.log(req.body);
});


