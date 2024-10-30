import { NavLink } from "react-router-dom";

 const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="country-card card w-72 lg:w-72 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4">
      <div className="container-card p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-[#080509] to-[#1a171c] border border-zinc-700 hover:shadow-xl">
        <img
          src={flags.svg}
          alt={flags.alt}
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />

        <div className="countryInfo space-y-2">
          <p className="card-title text-white text-lg font-semibold">
            {name.common.length > 15
              ? name.common.slice(0, 15) + "..."
              : name.common}
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-bold text-white">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-bold text-white">Region:</span> {region}
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-bold text-white">Capital:</span> {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="mt-4 w-full py-2 bg-zinc-800 hover:bg-zinc-500 text-white font-semibold rounded-lg transition-colors duration-300">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;