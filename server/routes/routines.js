//initializing the app
const express = require('express')

  const router = express.Router()


   //creating routes
  
  //GET all routines
  router.get('/', (req,res) => {
    res.json({mssg: 'get all routines'})
  })

  //GET a single routines
  router.get('/:id', (req,res) =>{
    res.json({mssg: 'Get a single routine'})
  })
  
  //POST a new routine
  router.post('/',(req,res) =>{
    res.json({mssg: 'POST a new routine'})
  })

  //DELETE a routine
   router.delete('/:id',(req,res) =>{
    res.json({mssg: 'DELETE a routine'})
  })
   
   //UPDATE a routine
   router.patch('/:id',(req,res) =>{
    res.json({mssg: 'UPDATE a new routine'})
  })



  module.exports = router
