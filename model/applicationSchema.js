const mongoose = require("mongoose");


const ApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    size: {
        type: String,
        required: false
    },
    overview: {
        type: Object,
        required: true
    },
    plant_bio: {
        type: String,
        required: false
    },
    category: {
        type: String
    },
    image: {
        type: String,
        required: false
    }
})
const Cart_model = mongoose.model("application", ApplicationSchema)
module.exports = Cart_model; 