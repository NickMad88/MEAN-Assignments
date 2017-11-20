var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');


var sessionConfig = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'thisissupersekret'
};

//setting up ejs and our views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./assets")));
app.use(session(sessionConfig));


//root route to render the index.ejs view
app.get('/', function(req, res) {
    if(!req.session.count){
        req.session.count = 0;
    }
    req.session.count ++;
    res.render("index", { counter: req.session.count });
})


//tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
