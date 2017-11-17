var mongoose = require('mongoose');

var User = mongoose.model('user');

module.exports = {
    create: function(req,res){
        var user = new User(req.body);
        user.save(function(err, data){
            if (err){
                res.json(err);
                return;
            }
            res.json(data);
        });
    },

    delete: function(req,res){
        User.remove({_id: req.body.id}, function(err){
            if(err){
                console.log("ERROR: " + err);
            }
            
        })
 
    }
}