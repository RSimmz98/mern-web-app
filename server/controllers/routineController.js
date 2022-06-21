 const Routine = require('../models/routineModel')
 const mongoose = require('mongoose')


//get all routines
 const getRoutines = async(req, res) =>{
   const routines = await Routine.find({}).sort({createdAt: -1})

   res.status(200).json(routines)
 } 


// get a single routine
 const getRoutine = async (req, res) =>{
  const {id} = req.params

   if(!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({error: 'No such routine'})
   }

   const routine = await Routine.findById(id)

   if(!routine) {
     return res.status(404).json({error: 'No such routine'})
   }

   res.status(200).json(routine)
 } 

 // create new routine 
 const createRoutine = async(req, res) =>{
      const{title, load, reps} = req.body
   //add document to database
  try{
    const routine = await Routine.create({title, load, reps})
    res.status(200).json(routine)
  } catch (error) {
  res.status(400).json({error: error.message})
  }
 }
 //delete a routine
 

 // update a routine
 

 module.exports = {
   getRoutines,
   getRoutine,
   createRoutine
 }
