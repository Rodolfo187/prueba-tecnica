const {Schema, model} = require('mongoose')

const tareaSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    status: String
})

module.exports = model('Tareas',tareaSchema)