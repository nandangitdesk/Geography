import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container py-8  ">
      <h2 className=" text-center text-white text-2xl lg:text-4xl font-bold mb-10  ">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>

      <div className="flex  flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } = country;
          return (
            <div
              key={id}
              className="card w-72 lg:w-96 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-6 mb-4 sm:mb-0 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-[#080509] to-[#1a171c] border border-zinc-700 hover:shadow-xl"
            >
              <div className="space-y-2">
                <p className="text-white text-lg font-semibold">{countryName}</p>
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-white">Capital: </span>
                  {capital}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-white">Population: </span>
                  {population}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-white">Interesting Fact: </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;