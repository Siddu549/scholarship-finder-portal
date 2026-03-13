const Scholarship = require("../models/Scholarship")

exports.getScholarships = async (req, res) => {
  try {

    const scholarships = await Scholarship.find()

    res.json(scholarships)

  } catch (error) {

    console.error(error)
    res.status(500).json({ message: "Server Error" })

  }
}