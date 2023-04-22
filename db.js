const {connect} = require('mongoose')

//const MONGODB_URI='mongodb://localhost/rickandmorty'

const conectarDB = async () =>{
    try{    
        await connect(process.env.MONGODB_URI);
        console.log('Conectado exitosamente a MongoDB')

    }catch(error){
        console.log(error);
    }
};

module.exports = {conectarDB};