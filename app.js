require('dotenv').config();
const { ApolloServer } = require('apollo-server-express')
const express = require('express')

const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')
const {conectarDB} = require('./db')

const app = express()
conectarDB()

module.exports = app

 async function start() {

   const apolloServer = new ApolloServer({
    cors: {
        origin: "https://studio.apollographql.com",
        credentials: true
      }, 
        typeDefs,
        resolvers
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app})

    app.listen(process.env.PORT, () =>{
        console.log('Server on port', process.env.PORT)
    })
}

start()