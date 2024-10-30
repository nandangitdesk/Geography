import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../api/postApi";
import Loader from "../components/ui/Loader";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <div className="border border-zinc-400 hover:border-zinc-500 rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center ">
        {country && (
          <>
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full h-auto rounded-lg mb-4 shadow-md md:w-1/2"
            />
            <div className="country-content text-gray-200 flex flex-col justify-between md:ml-4">
              <h2 className="text-2xl font-bold mb-2 text-white">{country.name.official}</h2>
              <div className="space-y-1">
                <p><span className="font-bold">Native Names:</span> {Object.keys(country.name.nativeName).map(key => country.name.nativeName[key].common).join(", ")}</p>
                <p><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-bold">Region:</span> {country.region}</p>
                <p><span className="font-bold">Sub Region:</span> {country.subregion}</p>
                <p><span className="font-bold">Capital:</span> {country.capital}</p>
                <p><span className="font-bold">Top Level Domain:</span> {country.tld[0]}</p>
                <p><span className="font-bold">Currencies:</span> {Object.keys(country.currencies).map(curElem => country.currencies[curElem].name).join(", ")}</p>
                <p><span className="font-bold">Languages:</span> {Object.keys(country.languages).map(key => country.languages[key]).join(", ")}</p>
              </div>
            </div>
          </>
        )}
        <div className="mt-4 md:mt-6 md:self-end">
          <NavLink to="/country" className="inline-block bg-gradient-to-r from-[#080509] to-[#1a171c] text-white font-semibold py-2 px-4 rounded hover:shadow-lg transition-shadow duration-200">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
