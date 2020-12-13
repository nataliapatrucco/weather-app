import axios from "axios";
import React, { useState } from "react";
import Today from "../Today/Today";
import "./Searchbar.scss";

const Searchbar = () => {
  const [weather, setWeather] = useState("");
  const [value, setValue] = useState("");
  const appid = "29cd8b4e061906fc7451300f9f3e80f6";

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${appid}`
    );
    setWeather(response.data);
    console.log("response", response.data);
  };

  return (
    <div className="container">
      <form onSubmit={(e) => fetchWeather(e)}>
        <input
          className="searchbar"
          type="text"
          onKeyUp={(e) => setValue(e.target.value)}
          placeholder="City..."
        />
      </form>
      {weather && <Today weather={weather} />}
    </div>
  );
};

export { Searchbar as default };
