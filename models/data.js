const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    id: String,
    characters: Array,
    requests: {},
    versionKey: false
})
module.exports = mongoose.model("data", dataSchema)