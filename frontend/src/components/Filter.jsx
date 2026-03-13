function Filter({ category, setCategory }) {

  return (

    <select
      className="border p-2 rounded"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >

      <option value="">All Categories</option>
      <option value="SC/ST/OBC">SC/ST/OBC</option>
      <option value="Merit Based">Merit Based</option>
      <option value="Girls Scholarship">Girls Scholarship</option>

    </select>

  )

}

export default Filter