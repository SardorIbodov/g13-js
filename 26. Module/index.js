import { getData as data } from "./script.js";
import b from "./script.js";
// data();
// console.log(b);

//! module scope
//! export: 1.oldidan 2.umumiy 3.default

// url
("https://api.open-meteo.com/v1/forecast?latitude=41.2647&longitude=69.2163&hourly=temperature_2m,relativehumidity_2m,rain&current_weather=true&timezone=auto");

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=41.2647&longitude=69.2163&hourly=temperature_2m,relativehumidity_2m,rain&current_weather=true&timezone=auto"
)
  .then((res) => res.json())
  .then((res) => console.log(res));
