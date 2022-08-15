//this document is the route controller for the projects 

const Routine = require('../models/routineModel')
 const mongoose = require('mongoose')


//get all routines
 const getRoutines = async(req, res) =>{
  const user_id = req.user_id
   const routines = await Routine.find({ user_id }).sort({createdAt: -1})

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
  //error handling -form fields
  
  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!load) {
    emptyFields.push('load')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0){
    return res.status(400).json({ error: 'Please fill in the fields😉',emptyFields})
  }
   //add document to database
  try{
    const user_id = req.user._id
    const routine = await Routine.create({title, load, reps})
    res.status(200).json(routine)
  } catch (error) {
  res.status(400).json({error: error.message})
  }
 }
 //delete a routine
   const deleteRoutine = async(req, res) =>{
    const { id } = req.params

   //checking if its a valid id 
   
      if(!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({error: 'No such routine'})
   }

   const routine = await Routine.findOneAndDelete({_id: id})

   if(!routine) {
     return re.status(400).json({error: 'No such routine'})
   }
   res.status(200).json(routine)
 }

 // update a routine by adding new information (patch request)
  const updateRoutine = async (req, res) => {
   const { id } = req.params
   
        if(!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({error: 'No such routine'})
   }
    const routine = await Routine.findOneAndUpdate({_id: id}, {
     ...req.body
   })
  if(!routine) {
     return res.status(400).json({error: 'No such routine'})
   }
  res.status(200).json(routine)
 } 

// exporting all the routes
 module.exports = {
   getRoutines,
   getRoutine,
   createRoutine,
   deleteRoutine,
   updateRoutine
 }
