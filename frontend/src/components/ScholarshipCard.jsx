import { useState, useEffect } from "react"

function ScholarshipCard({ scholarship }) {

  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || []

    if (bookmarks.find((b) => b._id === scholarship._id)) {
      setSaved(true)
    }

  }, [scholarship])


  const toggleBookmark = () => {

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || []

    if (saved) {
      bookmarks = bookmarks.filter((b) => b._id !== scholarship._id)
    } else {
      bookmarks.push(scholarship)
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    setSaved(!saved)
  }


  const deadline = new Date(scholarship.deadline)
  const today = new Date()

  const daysLeft = Math.ceil(
    (deadline - today) / (1000 * 60 * 60 * 24)
  )


  return (

    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">

      <h2 className="text-lg font-semibold mb-2">
        {scholarship.title}
      </h2>

      <p className="text-gray-600">
        Provider: {scholarship.provider}
      </p>

      <p>
        Category: {scholarship.category}
      </p>

      <p>
        Income Limit: ₹{scholarship.incomeLimit}
      </p>

      <p>
        Education Level: {scholarship.educationLevel}
      </p>

      <p className="text-red-500 font-semibold">
        {daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed"}
      </p>

      <a
        href={scholarship.link}
        target="_blank"
        className="text-blue-600 underline mt-2 inline-block"
      >
        Apply Now
      </a>

      <button
        onClick={toggleBookmark}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded"
      >
        {saved ? "Bookmarked" : "Bookmark"}
      </button>

    </div>

  )
}

export default ScholarshipCard