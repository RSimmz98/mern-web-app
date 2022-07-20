//exporting the dotenv from the lib we installed
require('dotenv').config()

  const express = require('express')
  const routineRoutes = require('./routes/routines')
  const mongoose = require('mongoose')
  const userRoutes = require('./routes/user')
//express app
  const app = express()

//registering middleware
  app.use(express.json())

  app.use((req,res, next) => {
   console.log(req.path, req.method)
   next()
})


//react to requests
//routes for the app

  app.use('/api/routines', routineRoutes)
  app.use('/api/user', userRoutes)

 //connecting to database 
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
   //listen for requests 
   app.listen(process.env.PORT, () => {
      console.log('yes you are connected to the db using that PORT >', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

//lets create the schemas
