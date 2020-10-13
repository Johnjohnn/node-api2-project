const express = require("express")
const apiRouter = require("./express-router")   // this exports the Routher from the api routher file . 

const server = express()
const port = 4000

server.use(express.json())
server.use(apiRouter)                    // this exports the Routher from the api routher file . 




server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
