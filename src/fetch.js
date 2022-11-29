import { DOM } from "./DOM";
import { color } from "./Bgcolor";

async function getData() {
  try {
    const location = document.querySelector("#city").value;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2f4907111f7679621a12fd4616f08931`,
      { mode: "cors" }
    );
    const data = await response.json();
    const weather = [];
    weather.push(data.name, data.main, data.weather);
    DOM(weather);
    color(weather);
    console.log(weather);
  } catch (err) {
    const error = document.createElement("h1");
    error.textContent = err;
    const body = document.querySelector("#content");
    body.innerHTML = "";
    body.append(error);
  }
}

export { getData };
