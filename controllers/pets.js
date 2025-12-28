//  fixed steps in making controller 
// require express
const express = require('express')

// model require
const Pet = require('../models/pet')

// initialize the router
const router = express.Router()


// POST + /pets/

router.post('/', async (req,res)=>{

try{

   // use the model to insert data to into db
   const pet = await Pet.create(req.body)
   // respond with new pet data doesnt need to create a templates in the case of api use postman 
   res.status(201).json({pet})


}
catch(error){
    console.log(error)
    res.status(500).json({error: 'fail to create pet'})
}
})


// export the router (fixed)
module.exports = router


