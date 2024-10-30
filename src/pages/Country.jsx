import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/ui/Loader";
import CountryCard from "./CountryCard";
import SearchFilter from "./SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        Countries of the World
      </h1>
      <div className="flex  flex-wrap justify-center gap-10">
        {filterCountries.map((country) => {
          return (
            <CountryCard key={country.id} country={country} />
          );
        })}
      </div>
    </div>
  );
};

export default Country;
