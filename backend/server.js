const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const scholarshipRoutes = require("./routes/scholarshipRoutes")

const app = express()

app.use(cors())
app.use(express.json())

// connect database
connectDB()

// routes
app.use("/api/auth", authRoutes)
app.use("/api/scholarships", scholarshipRoutes)

// test route
app.get("/", (req, res) => {
  res.send("Scholarship Portal Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})