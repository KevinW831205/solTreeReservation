//Home page - 4links, redirect to tables, reservation, view the table jSon, view the waitlist jSon
//Create a server.jS using -Express
//create a package.
//set routes
//AJAX 

//HTML --> HTTP GET AND POST 
//css/materialize
//nodejS for our server
//express framework for NodeJS
//path, core node module for directory structure. 

// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var tables = [
    {
        id: "JOHN",
        name: "Jedi Master",
        email: "john@gmail.com",
        phone: 200999333
    },
    {
        id: "sec",
        name: "Jedi Master",
        email: "john@gmail.com",
        phone: 200999333
    },
    {
        id: "JOHN",
        name: "Jedi Master",
        email: "john@gmail.com",
        phone: 200999333
    },
    {
        id: "JOHN",
        name: "Jedi Master",
        email: "john@gmail.com",
        phone: 200999333
    }
];

var waitlist = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all 
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

//2nd get request will display all waitlist.
app.get("/api/waitlist", function (req, res) {
    console.log(res.json(waitlist));
    return res.json(waitlist);
});
// Recieve user input, after submitting a reservation request.
// store it in a var = newTable, which will be pushed to either tables or waitlist.
// then, we need to 

app.post("/api/reservation", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
    console.log(newTable);
    console.log(tables.length)
    if (tables.length >= 5) {           
        waitlist.push(newTable);
    } else {
        tables.push(newTable);
    }
    //is this guaranteeing, that the response is returning as a jSon object. 
    //thus, this makes it a stringifies version for displaying purposes.    
    res.json(newTable);
});

