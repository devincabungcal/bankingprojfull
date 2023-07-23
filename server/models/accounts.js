const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    balance:Number
})

module.exports = mongoose.model("accounts", schema)