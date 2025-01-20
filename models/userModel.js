const mongoose = require('mongoose')

//Making schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: false
    }
})
const user = mongoose.model('users', userSchema)
module.exports = user;