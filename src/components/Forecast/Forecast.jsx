import React from "react";

const Forecast = ({ forecast }) => {
  return forecast.list.map((data) => <div>{data.dt_txt}</div>);
};

export { Forecast as default };
