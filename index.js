const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();



let PORT = 3000; 

require("dotenv");

// middleware
app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: true }));

// connecting public folder for update
app.use(express.static("public"));

app.listen(PORT, function(){
    console.log(`Server.js listening on ${PORT}`)
})
// app.get("/", function(req, res){
//     res.send("hello");
// })

MongoClient.connect('mongodb+srv://BigUrn:BigUrn2021@cluster0.eb4nl.mongodb.net/Inventory?retryWrites=true&w=majority', {useUnifiedTopology: true})

    .then(client => { 
        console.log("Connected to Mongodb")
        const db = client.db("Inventory")
        const urnsCollection = db.collection("urns")
        app.post("/urns", (req,res) => {
            console.log(req.body);
            urnsCollection.insertOne(req.body)
            .then(result => {
                res.redirect("/")
            })
            .catch(error => console.log(error))
        })
        
        // create
        app.get("/", function(req, res){
            res.send("hello from server");
            // db.collection("urns").find().toArray()
            // .then(results => {
            //     res.render("index.ejs", {urns: results})
            // })
            // .catch(error => console.error(error))
        })
        // update
})
.catch(err => {
    console.log(err);
})







//upright or horizontal
//type of wood
//type of box (plain, inlay)

// BigurnCO2021