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

router.get('/', async (req,res)=>{

    try{
         const allPets = await Pet.find({})
         res.status(200).json({allPets})
    }
    catch(error){
     console.log(error)
     res.status(500).json({error: 'Failed To get Pets'})
    }

})

router.get('/:id', async (req, res) => {

    try{
       // get id from req.params
       const {id} = req.params

       // use model to find by id

       const foundPet = await Pet.findById(id)

       //if the pet not founded respond with 404

       if(!foundPet) {

        res.status(404).json({error: 'Pet not found'})

        //else send 200 with pet
       }else{
           
        res.status(200).json({foundPet})

       }

    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({error: "Failed To Get Pet"})
    }
})

// export the router (fixed)
module.exports = router


