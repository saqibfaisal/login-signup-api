const mongoose = require("mongoose");


const ApplicationSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    decription: {
        type: String,
    },
    id: {
        type: Number,
    },
    // confirmpassword: {
    //     require: true,
    //     type: String,
    // },
})
const ApplicationModel = mongoose.model("application", ApplicationSchema)
module.exports = ApplicationModel; 