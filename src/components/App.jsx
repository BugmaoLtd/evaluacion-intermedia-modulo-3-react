import "../scss/App.scss";
import dataCountries from "../services/data.json";
import CountriesList from "./CountriesList";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("");

  const changeInputValue = (inputValue) => {
    setFilterValue(inputValue);
  };

  const filteredCountries = dataCountries.filter((country) => {
    return country.name.official.includes(filterValue);
  });

  return (
    <div>
      <header>
        <h1>Descubre los países del mundo</h1>
      </header>
      <main>
        <Filter onChangeFilter={changeInputValue} />
        <CountriesList countries={filteredCountries} />
      </main>
    </div>
  );
}

export default App;
