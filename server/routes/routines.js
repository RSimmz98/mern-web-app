//initializing the app
  const express = require('express')
  const Routine = require('../models/routineModel')
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
  router.post('/', async(req,res) =>{
    const{title, load, reps} = req.body
   
  try{
    const routine = await Routine.create({title, load, reps})
    res.status(200).json(routine)
  } catch (error) {
  res.status(400).json({error: error.message})
  }
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
