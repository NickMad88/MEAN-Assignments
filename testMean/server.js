var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./Server/config/mongoose.js')
require('./Server/config/routes.js')(app)


app.listen(4200, function(){
    console.log("listening on port 4200")
});
