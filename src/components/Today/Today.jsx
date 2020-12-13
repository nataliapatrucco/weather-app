import React from "react";
import "./Today.scss";
import weatherImage from "../../utils/weatherIcons";
import up from "../../img/up-arrow.png";
import down from "../../img/down-arrow.png";

import getLocalTime from "../../utils/getLocalTime";

const Today = ({ weather }) => {
  const temperature = weather.main.temp.toString().split(".")[0];
  const temp_min = weather.main.temp_min;
  const temp_max = weather.main.temp_max;

  const localTime = getLocalTime(weather.dt, weather.timezone);
  return (
    <div className="weather-container">
      <p>{localTime}</p>
      {weatherImage(weather.weather[0].main)}
      <p style={{ fontSize: 60 }}>{temperature}º</p>
      <div className="min-max">
        <div>
          <img className="arrow" src={up} />
          <p>{temp_max}º</p>
        </div>
        <div>
          <img className="arrow" src={down} />
          <p>{temp_min}º</p>
        </div>
      </div>
      <button className="forecast">5 days</button>
    </div>
  );
};

export { Today as default };
