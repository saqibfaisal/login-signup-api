const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    contact: {
        require: true,
        type: String,
        maxlength: 11,
    }
})
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel; 