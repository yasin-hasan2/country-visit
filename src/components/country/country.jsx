// import React from 'react';
import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry }) => {
  //   console.log(country);
  //   console.log(handleVisitedCountry);

  const { name, flags, population, area, cca3 } = country;
  //   console.log(name);

  const [visit, setVisit] = useState([false]);

  const CountryVisit = () => {
    setVisit(!visit);
  };

  return (
    <div>
      <div className={`country ${visit ? "visited" : "non_Visited"}`}>
        <h3>Name: {name?.common} </h3>
        <img className="img" src={flags?.png} alt="" />
        <p> population : {population} </p>
        <p> area: {area} </p>
        <p>Country Code : {cca3} </p>
        <div>
          <button className="btn" onClick={CountryVisit}>
            {visit ? "Going" : "Visited"}
          </button>
          <button className="btn" onClick={() => handleVisitedCountry(country)}>
            Mark Visit
          </button>
          <p className="visit_title">
            {visit ? "i want to visite" : "i have visited this country"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
