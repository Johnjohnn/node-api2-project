const express = require("express")
const apiRouter = require("./api-router")   // this exports the Routher from the api routher file . 

const server = express()
const port = 4000

server.use(express.json())
server.use(apiRouter)                    // this exports the Routher from the api routher file . 
  
server.get('/', ( req, res) =>{
res.json({
    message:"Welcome to our API"
} )

})