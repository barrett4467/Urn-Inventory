const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const MongoClient = require("mongodb").MongoClient;

let PORT = 3000; 

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, function(){
    console.log(`Server.js listening on ${PORT}`)
})

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
        app.get("/", function(req, res){
            db.collection("urns").find().toArray()
            .then(results => {
                console.log(results)
                res.render("index.ejs", {urns: results})
            })
            .catch(error => console.error(error))
        })
})







//upright or horizontal
//type of wood
//type of box (plain, inlay)

// BigurnCO2021