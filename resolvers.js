const Episodes = require('./models/Episodes');
const Locations = require('./models/Locations');
const Tarea = require('./models/Tareas')
const characters = require('./models/characters')


const resolvers = {

    Query: {
        getAllTasks:  async () => {
            const tarea = await  Tarea.find()
            return tarea
        },

        characters: async(_,args) =>{
            const carac = await characters.find().skip(args).limit(20).exec()
            return carac;
        },
        character: async(_,args) =>{
            let charact = await characters.findById(args.id)
            const idLoca = charact.location;
            const idOrigin = charact.origin;
            const locatio = await Locations.findById(idLoca)
            const origin = await Locations.findById(idOrigin)

            charact.location.name = locatio.name

            charact.origin.name = origin.name
            
            return charact;
        },

        episodes: async(_,args) =>{
            const epi = await Episodes.find().skip(args).limit(20).exec()
            return epi
        },
        episode: async(_,args) =>{
            const {id} = args
            let epi = await Episodes.findById(id)
            console.log(epi);
            console.log(epi.characters);
            epi.characters.forEach(function(numero) {
                console.log(numero.name);
            });
            
            return epi;
        },

        locations: async(_,args) =>{
            const locations = await Locations.find().skip(args).limit(20).exec()
            return locations;
        },
        location: async (_,args) =>{
            const {id} = args
            const locati = await Locations.findById(id)
            return locati;
        },
        

        /* async getEpisodesId(_, args) {
            const {id} = args 
            console.log(id);
            const episod = await Episodes.findById(id)
            console.log(episod);
            return episod;

        } */

    },
    Mutation: {
        createTask: async (_,args) =>{
            const {name, status} = args
            const newTask = new Tarea({name, status})//Creamos el objeto para guardarlo
            await newTask.save()
            console.log(newTask)
            return newTask
        },

        async deleteCharacter(_,args){
            const {id} = args
            console.log(id);
            await characters.findByIdAndDelete(id)
            return 'Se elimino de forma correcta'
        },

        async updateCharacter(_,{id, param}){
            const characActualizado = await characters.findByIdAndUpdate(id, {$set: param}, {new:true})
            return characActualizado
        }
    }

};

module.exports = {resolvers};