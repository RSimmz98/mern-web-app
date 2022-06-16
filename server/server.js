require('dotenv').config()

const express = require('express')


  const PORT = '5000'

//express app
  const app = express()

//registering middleware
  app.use((req,res, next) => {
   console.log(req.path, req.method)
   next()
})


//react to requests
//routes

  app.get('/', (req,res) => {
  res.json("yo im live")
})

//listen for requests
  app.listen(process.env.PORT,
      () => {
  console.log('server is running on', process.env.PORT)

  })
