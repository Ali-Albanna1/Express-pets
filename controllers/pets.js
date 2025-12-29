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


//get +/pets/123
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

// DEL + /pets/123
router.delete('/:id', async (req, res)=>{

    try{
      // get the id from params
     
        const {id}= req.params
      // try to find pet using id 
       const pet = await Pet.findByIdAndDelete(id)

       //if there is no pet send 404
       if(!pet){

         res.status(404).json({error: 'pet not found'})
       } else{
        // use 204 if u dont want to send new thing
        res.status(200).json({pet})
       }

       //else 
      
       // send back msg to say deleted

  }
    catch(error){

        console.log(error)

        res.status(500).json({error: "failed to delete pet"})
    }



})

//PUT + /pets/123
router.put('/:id', async (req,res)=>{
    try{

        //get id
        const {id} =req.params
        // find pet using id and update with req.body add new to see change immediatly with out it it will not show on postman whwn put
        const pet = await Pet.findByIdAndUpdate(id, req.body, {new:true})


        if(!pet){
            res.status(404).json({error: 'Pet Not found'})

        }else{
               res.status(200).json({pet})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: 'failed to update pet'})
    }


})

// export the router (fixed)
module.exports = router


