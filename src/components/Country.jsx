function Country({ infoCountry }) {
  return (
    <li>
      <span>{infoCountry.flag}</span>
      <h3>{infoCountry.name.official}</h3>
      <p>{infoCountry.capital}</p>
      <p>{infoCountry.continents}</p>
    </li>
  );
}

export default Country;
