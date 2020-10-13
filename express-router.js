const express = require("express")   // <<<<< first step when exporting and creating a router endpoint .
const database = require("./data/db")  //  IMPORTED THE DATABASE 

const router = express.Router() 
// THIS IS JUST THE INTRUDUCTORY ROUTER ENDPOINT . 
router.get("/", (req, res) => {
	res.json({
		message: "Welcome to our my world",
	})
})
// makign the end points 
router.post


module.exports = router





























module.export = router
                                  // step 3 this will EXPORT the router . 