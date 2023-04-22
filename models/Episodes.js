const {Schema, model} = require('mongoose')

const episodesSchema = new Schema({
    _id:String,
    name:String,
    air_date: String,
    episode: String,
    characters:[String],
    created:String
})

module.exports = model('Episodes',episodesSchema)