const User = require("./userModel");


const getUsers = function() {
    return new Promise((resolve,reject) => {
        User.find({}, function(err, data) {
            if(err) {
               reject(err)
            } else {
              resolve(data);
            }
        })
    })
}

const getUser = function(id) {
    return new Promise((resolve,reject) => {
        User.findById(id, function(err, data) {
            if(err) {
               reject(err)
            } else {
              resolve(data);
            }
        })
    })
}

const updateUser  = (id, obj) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, {
        name: obj.name,
        email: obj.email,
        street: obj.street,
        city: obj.city,
        zipcode: obj.zipcode 
    },
         function(err) {
            if(err) {
                reject(err)
            } else {
                resolve("Updated!");
            }
        })
    } ) 
}

const deleteUser = function(id) {
    return new Promise((resolve,reject) => {
        User.findByIdAndDelete(id, function(err) {
            if(err) {
               reject(err)
            } else {
              resolve("Deleted!");
            }
        })
    })
}

module.exports = {getUsers, getUser, updateUser, deleteUser};
