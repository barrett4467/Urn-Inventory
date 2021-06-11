
var express = require('Express');
var app = express();
const dotenv = require("dotenv").config({path:__dirname+'/.env}'});
const mongoose = require('mongoose');
dotenv.config();

const path = require("path");
require("dotenv").config({ path: path.resolve })

//connection to DB
mongoose.set("useFindAndModify", false);
console.log(process.env.DB_CONNECT);

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true }, () => {
        console.log("Connected to DB!");
    });

let PORT = 3000; 


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


