const {Schema, model} = require('mongoose')
const Locations = require('./Locations')

const charactersSchema = new Schema({
    _id:String,
    name:String,
    status: String,
    species:String,
    type:String,
    gender:String,
    origin:{
        type: Schema.Types.ObjectId,
        ref: 'Locations'
    },
    location:{
        type:Schema.Types.ObjectId,
        ref:'Locations'
    },
    image:String,
    episode:[String],
    created:String
})

module.exports = model('characters',charactersSchema)
