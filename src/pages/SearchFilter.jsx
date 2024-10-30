const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries,
  }) => {
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };
  
    const sortCountries = (value) => {
      const sortedCountries = [...countries].sort((a, b) => {
        return value === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
      });
      setCountries(sortedCountries);
    };
  
    return (
      <section className="container mx-auto px-4 md:px-8 lg:px-36 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:space-y-0">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleInputChange}
              className="w-full p-2 border  border-gray-600 bg-transparent text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
  
          <div className="flex space-x-2">
            <button
              onClick={() => sortCountries("asc")}
              className="bg-gradient-to-r from-[#080509] to-[#1a171c] text-white font-semibold py-2 px-4 rounded hover:shadow-lg transition-shadow duration-200"
            >
              Asc
            </button>
            <button
              onClick={() => sortCountries("des")}
              className="bg-gradient-to-r from-[#080509] to-[#1a171c] text-white font-semibold py-2 px-4 rounded hover:shadow-lg transition-shadow duration-200"
            >
              Desc
            </button>
          </div>
  
          <div className="flex-shrink-0">
            <select
              className="select-section w-full p-2 border border-gray-600 bg-transparent text-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              value={filter}
              onChange={handleSelectChange}
            >
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </section>
    );
  };
  
  export default SearchFilter;
