function SearchBar({ search, setSearch }) {

  return (

    <input
      type="text"
      placeholder="Search scholarships..."
      className="border p-2 rounded w-full"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

  )

}

export default SearchBar