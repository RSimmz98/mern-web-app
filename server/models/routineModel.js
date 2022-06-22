// creating the schema

const mongoose = require('mongoose')

const Schema = mongoose.Schema

// adding all the routines that we need to use as well as the data types

const routineSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  reps: {
    type: Number,
    requred: true
  },
   load: {
    type: Number,
    required: true
  }
}, { timestamps: true }) //updates date and time of when the object was created

// creating a model
 module.exports = mongoose.model('Routine', routineSchema)

//title being the name of the routine 
//rep _time taken doing the routine
//load _ how often do you do it 
// you can add more I will also be adding more as well
