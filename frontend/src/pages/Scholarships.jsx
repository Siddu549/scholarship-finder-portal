import { useEffect, useState } from "react"
import API from "../services/api"

function Scholarships() {

  const [scholarships, setScholarships] = useState([])

  useEffect(() => {

    API.get("/scholarships")
      .then(res => setScholarships(res.data))
      .catch(err => console.log(err))

  }, [])

  return (

    <div style={{padding:"20px"}}>

      <h1>Scholarship Finder Portal</h1>

      {scholarships.map((sch) => (

        <div key={sch._id} style={{
          border:"1px solid gray",
          padding:"10px",
          marginBottom:"10px"
        }}>

          <h3>{sch.title}</h3>
          <p>Provider: {sch.provider}</p>
          <p>Category: {sch.category}</p>
          <p>Income Limit: {sch.incomeLimit}</p>
          <p>Education Level: {sch.educationLevel}</p>

        </div>

      ))}

    </div>

  )
}

export default Scholarships