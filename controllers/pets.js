//  fixed steps in making controller 
// require express
const express = require('express')

// model require
const Pet = require('../models/pet')

// initialize the router
const router = express.Router()


// POST + /pets/

router.post('/', async (req,res)=>{
 res.json(req.body)
})


// export the router (fixed)
module.exports = router


