var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updates_at'}}
);

mongoose.model('user', userSchema);