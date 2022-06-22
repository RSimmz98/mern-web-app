//initializing the app
  const express = require('express')
  const {
     getRoutines,
     getRoutine,
     createRoutine,
     deleteRoutine
   } = require('../controllers/routineController')

  const router = express.Router()


   //creating routes
  
  //GET all routines
  router.get('/', getRoutines)

  //GET a single routine
  router.get('/:id', getRoutine) 

  //POST a new routine
  router.post('/', createRoutine) 

  //DELETE a routine
   router.delete('/:id', deleteRoutine)
   
   //UPDATE a routine
   router.patch('/:id',(req,res) =>{
    res.json({mssg: 'UPDATE a new routine'})
  })



  module.exports = router
