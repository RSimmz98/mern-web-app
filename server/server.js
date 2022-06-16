require('dotenv').config()

  const express = require('express')
    const routineRoutes = require('./routes/routines')

  const PORT = '5000'

//express app
  const app = express()

//registering middleware
  app.use(express.json())

  app.use((req,res, next) => {
   console.log(req.path, req.method)
   next()
})


//react to requests
//routes

  app.use('/api/routines', routineRoutes)

//listen for requests
  app.listen(process.env.PORT,
      () => {
  console.log('server is running on', process.env.PORT)

  })
