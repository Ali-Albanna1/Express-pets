// dotenv
const dotenv= require('dotenv')
dotenv.config()

//mongoose
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {console.log('conected to DB')})

//express

const express= require('express')

const cors = require('cors')

const app = express()

//controllers
const morgan =require('morgan')
const petCtrl= require('./controllers/pets')

//middleware
app.use(cors()) // allow aything exept any port for now its okay but if deploy needs to be changed
app.use(morgan('dev'))

app.use(express.json())  // to accept json from postman


// routes 

app.use('/pets', petCtrl)





app.listen(3000, ()=>{
    console.log('the express app is ready')
})