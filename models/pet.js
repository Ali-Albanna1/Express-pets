// require mongoose library
const mongoose =  require('mongoose')

//create mongoose schema 
const petSchema= new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age:{
        type: Number,
        min : 0,
        required: true,
    },
    breed: String, // equivlant to breed: { type: strinf}
})

//intialize the mongoose model 
const Pet = mongoose.model('Pet', petSchema)

//export the model

module.exports = Pet                                                        