// creating the schema

const mongoose = require('mongoose')

const Schema = mongoose.Schema

// adding all the routines that we need to use as well as the data types
// by adding the user_id we are making sure that when each user logs in will definetly see their on work outs
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
  },
  user_id : {
    type: String,
    required : true
  }
}, { timestamps: true }) //updates date and time of when the object was created

// creating a model
 module.exports = mongoose.model('Routine', routineSchema)

//title being the name of the routine 
//rep _time taken doing the routine
//load _ how often do you do it 
// you can add more I will also be adding more as well
