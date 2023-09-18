const bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
const { log } = require("console");



const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true
}))



// connect database

mongoose.connect("mongodb://0.0.0.0:27017/mydb", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})


var db = mongoose.connection;

// check connection

db.on("error", () => console.log("error in connection database"));
db.once("open", () => console.log("connected to database"));



// checking page
app.get("/", (req, res) => {
    return res.redirect("index.html");
})