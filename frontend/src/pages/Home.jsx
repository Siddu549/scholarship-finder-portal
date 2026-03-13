import { useEffect, useState } from "react"
import API from "../services/api"
import ScholarshipCard from "../components/ScholarshipCard"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"

function Home() {

  const [scholarships, setScholarships] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [income, setIncome] = useState("")
  const [page, setPage] = useState(1)

  const itemsPerPage = 6

  useEffect(() => {

    API.get("/scholarships")
      .then(res => setScholarships(res.data))
      .catch(err => console.log(err))

  }, [])


  const filtered = scholarships.filter((sch) => {

    return (
      sch.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || sch.category === category) &&
      (income === "" || sch.incomeLimit >= income)
    )

  })


  const start = (page - 1) * itemsPerPage
  const paginated = filtered.slice(start, start + itemsPerPage)


  return (

    <div className="p-6">

      <div className="flex gap-4 mb-6">

        <SearchBar search={search} setSearch={setSearch} />

        <Filter category={category} setCategory={setCategory} />

        <input
          type="number"
          placeholder="Enter family income"
          className="border p-2 rounded"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

      </div>


      <div className="grid md:grid-cols-3 gap-4">

        {paginated.map((sch) => (

          <ScholarshipCard
            key={sch._id}
            scholarship={sch}
          />

        ))}

      </div>


      <div className="flex gap-3 mt-6">

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Previous
        </button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={start + itemsPerPage >= filtered.length}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Next
        </button>

      </div>

    </div>

  )

}

export default Home