const router = require("express").Router()

const { getScholarships } = require("../controllers/scholarshipController")

router.get("/", getScholarships)

module.exports = router