const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    "name" : String,
    "email" : String,
    "street" : String,
    "city" : String,
    "zipcode" : String,
    "tasks" : [ 
        {
            "id" : Number,
            "title" : String,
            "completed" : Boolean
        }
    ],
    "posts" : [ 
        {
            "id" : Number,
            "title" : String,
            "body" : String
        }, 
    ]
});

module.exports = mongoose.model('users',userSchema);