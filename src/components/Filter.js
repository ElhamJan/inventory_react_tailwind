const Filter = ({
  onSort,
  onSearch,
  sort,
  searchValue,
  categories,
  selectedCategory,
  onSelectedCategory,
}) => {
  return (
    <div>
      <div className="text-slate-400 flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-lg">
          Search
        </label>
        <input
          id="search-input"
          type="text"
          name="search-input"
          className="bg-transparent border border-slate-500 rounded-xl"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="text-slate-400 flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-lg">
          Sort
        </label>
        <select
          id="sort-products"
          name="sort-products"
          className="bg-transparent rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option value="" className="bg-slate-500 text-slate-300">
            Select sort type
          </option>
          <option value="latest" className="bg-slate-500 text-slate-300">
            Latest
          </option>
          <option value="earliest" className="bg-slate-500 text-slate-300">
            Earliest
          </option>
        </select>
      </div>
      <div className="text-slate-400 flex items-center justify-between mb-6">
        <label htmlFor="selected-category" className="text-lg">
          Category
        </label>
        <select
          id="selected-category"
          name="selected-category"
          className="bg-transparent rounded-xl"
          value={selectedCategory}
          onChange={onSelectedCategory}
        >
          <option value="" className="bg-slate-500 text-slate-300">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                key={category.id}
                value={category.id}
                className="bg-slate-500 text-slate-300"
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
