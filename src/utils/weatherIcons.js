import cloud from "../img/cloud.png";
import sunny from "../img/sunny.png";
import snow from "../img/snowflake.png";
import storm from "../img/storm.png";
import cloudy from "../img/cloudy.png";
import rain from "../img/rain.png";
import mist from "../img/haze.png";
import fog from "../img/fog.png";

const weatherImage = (data, time) => {
  let icon = "";
  // if (time < "12:00") {
  switch (data) {
    case "Clouds":
      icon = <img alt="cloud" src={cloud} />;
      break;
    case "Clear":
      icon = <img alt="sunny" src={sunny} />;
      break;
    case "Rain":
      icon = <img alt="rain" src={rain} />;
      break;
    case "Thunderstorm":
      icon = <img alt="storm" src={storm} />;
      break;
    case "Drizzle":
      icon = <img alt="cloudy" src={cloudy} />;
      break;
    case "Snow":
      icon = <img alt="snow" src={snow} />;
      break;
    case "Mist":
      icon = <img alt="mist" src={mist} />;
      break;
    case "Fog":
      icon = <img alt="fog" src={fog} />;
      break;
    default:
      icon = "";
      break;
  }
  // }

  return icon;
};

export { weatherImage as default };
