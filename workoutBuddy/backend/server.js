const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
require('dotenv').config()


const app = express()

//listening for request




// middleware, this is used so that req parameter can contain data for the request
app.use(express.json())


//request handler
app.get('/home', (req, res) =>{
    
    res.json({message: 'this is home'})
})

app.get('/', (req, res) =>{
    res.json({message: 'this is root'})
})

app.use('/api/workout', workoutRoutes)

mongoose.connect(process.env.URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT);
    })
})
.catch((error) => {
    console.log(error.message);
})


