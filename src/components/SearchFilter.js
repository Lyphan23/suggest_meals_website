function SearchFilter({ setSearch, setRegion, regions }) {
  return (
    <div className="row g-3">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Tìm kiếm theo nguyên liệu..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="col-md-4">
        <select
          className="form-select"
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Tất cả các quốc gia</option>

          {regions.map(
            (r, index) =>
              r && (
                <option key={index} value={r}>
                  {r}
                </option>
              ),
          )}
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
