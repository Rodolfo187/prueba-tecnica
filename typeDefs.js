const { gql } = require("apollo-server-express");

const typeDefs = gql`

    #Definimos nuestros propios tipos de datos para GraphQL
    type Datos{
        id: ID
        name: String
        status:String
    }

    type characters{
        id: ID
        name: String
        status:String
        origin:String
        location:String
        image:String
        created:String
        episodes:[Episodes]
    }

    type character{
        id: ID
        name: String
        status:String
        origin:Locations
        location:Locations
        image:String
        created:String
        episodes:[Episodes]
    }

    type Episodes{
        id: ID
        name: String
        air_date: String,
        episode: String,
        characters:[String],
        created:String
    }

    type Locations{
        id: ID
        name:String,
        type: String,
        dimension: String,
        residents:[characters],
        created:String,
    }

    input parametros{
        name: String
    }


    #Solo es de consulta
    type Query{
        getAllTasks:[Datos],
        characters(page:Int):[characters],
        character(id:ID!): character,

        episodes(page:Int):[Episodes],
        episode(id:ID!):Episodes,

        locations(page:Int):[Locations],
        location(id:ID!): Locations,

    }

    #Es para agregar y modificar
    type Mutation{
        createCharacter(name:String, status:String):characters,
        deleteCharacter(id:ID!):String
        updateCharacter(id:ID!, param: parametros):character
    }
`

module.exports = {typeDefs}