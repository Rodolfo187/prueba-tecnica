const {Schema, model} = require('mongoose')

const locationsSchema = new Schema({
    _id:String,
    name:String,
    type: String,
    dimension: String,
    residents:[String],
    created:String,
})

module.exports = model('Locations',locationsSchema)