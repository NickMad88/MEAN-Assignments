var usersController = require('../controllers/users.js');


module.exports = function(app){

    app.get('/', function(req,res){

    })

    app.get('/users', usersController.create);

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}