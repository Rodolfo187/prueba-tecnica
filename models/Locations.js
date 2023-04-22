const {Schema, model} = require('mongoose')


const locationsSchema = new Schema({
    _id:String,
    name:String,
    type: String,
    dimension: String,
    residents:[{
        type: Schema.Types.ObjectId,
        ref: 'characters'
    }],
    created:String,
})

module.exports = model('Locations',locationsSchema)