consf mongoose = require('mongoose')

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
}, { timestamps: true })

// creating a model
