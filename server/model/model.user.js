const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    exp: Number,
    type: String,
    qualification: String
})

const User = mongoose.model('users', UserSchema)
module.exports = User
