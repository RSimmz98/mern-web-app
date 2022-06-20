const mongoose = require('mongoose')

const Schema = mongoose.Schema

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



