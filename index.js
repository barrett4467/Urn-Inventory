
var express = require('Express');
var app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
let PORT = 3000; 

dotenv.config();

const NewUrn = require("./models/NewUrn");
dotenv.config();

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//connection to DB
mongoose.set("useFindAndModify", false);
console.log(process.env.DB_CONNECT);

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true }, () => {
        console.log("Connected to DB!");

        //server set up
        app.listen(PORT, () => {
            console.log(`Server up and running on port ${PORT}`);
        });
    });




app.get("/", function(req, res){
    NewUrn.find({}, (err, tasks) => {
        res.render("inventory.ejs", { newUrn: urn });
    });
});

// POST METHOD
app.post("/", (req, res) => {
    console.log(req.body);
});


