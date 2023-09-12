// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import "./contris.css";

const Countrais = () => {
  const [countrys, setCountrys] = useState([]);
  const [visitedCountrys, setVisitedCountrys] = useState([]);
  //   console.log(countrys);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fbclid=IwAR1N1-n4exej_awUf93oxplsSNQ2EwgHi97X_GjpeAYWlQn4bWLODx_8ryk"
    )
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log(["add this to mark country"]);
    const newVisitedCountry = [...visitedCountrys, country];
    setVisitedCountrys(newVisitedCountry);
  };

  return (
    <div>
      <h3>Country count : {countrys.length} </h3>
      <div>
        <h4>visit CountryS: {visitedCountrys.length} </h4>
        <ol>
          {visitedCountrys.map((country) => (
            <li key={country.cca3}> {country?.name?.common} </li>
          ))}
        </ol>
      </div>

      <div className="display_show">
        {countrys.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countrais;
