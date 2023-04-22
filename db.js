const {connect} = require('mongoose')

//const MONGODB_URI='mongodb://localhost/rickandmorty'

const conectarDB = async () =>{
    try{    
        await connect(process.env.MONGODB_URI);
        console.log('=============================================')
        console.log('=============================================')
        console.log('=====>>>>Conectado exitosamente a MongoDB <===========')
        console.log('=============================================')
        console.log('=============================================')

    }catch(error){
        console.log(error);
    }
};

module.exports = {conectarDB};