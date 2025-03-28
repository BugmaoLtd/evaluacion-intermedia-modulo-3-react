import Country from "./Country";

function CountriesList({ countries }) {
  return (
    <ul>
      {countries.map((country) => {
        return <Country infoCountry={country} />;
      })}
    </ul>
  );
}

export default CountriesList;
