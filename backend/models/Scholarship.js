const mongoose = require("mongoose")

const scholarshipSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  provider: {
    type: String,
    required: true
  },

  category: String,

  incomeLimit: Number,

  educationLevel: String,

  deadline: Date,

  link: String

})

module.exports = mongoose.model("Scholarship", scholarshipSchema)