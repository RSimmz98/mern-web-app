//initializing the app
  const express = require('express')
  const {
     getRoutines,
     getRoutine,
     createRoutine,
     deleteRoutine,
     updateRoutine
   } = require('../controllers/routineController')

  const router = express.Router()


   //creating routes
  
  //GET all routines that have been created
  router.get('/', getRoutines)

  //GET a single routine by using the id
  router.get('/:id', getRoutine) 

  //POST a new routine or adding the routine to the database
  router.post('/', createRoutine) 

  //DELETE a routine usin the id
   router.delete('/:id', deleteRoutine)
   
   //UPDATE a routine or modifying the existing routine using the id of the routine
   router.patch('/:id', updateRoutine)



  module.exports = router
