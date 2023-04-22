const {Schema, model} = require('mongoose')
const Locations = require('./Locations')
const Episodes = require('./Episodes')

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
    episode:[{
        type: Schema.Types.ObjectId,
        ref: 'Episodes'
    }],
    created:String
})

module.exports = model('characters',charactersSchema)
