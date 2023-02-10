const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     require: true,
    // },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    // confirmpassword: {
    //     require: true,
    //     type: String,
    // },
    usertype:{
        type:String,
        default:"User",
    }
})
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel; 