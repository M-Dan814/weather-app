const DOM = (arr) => {
  const body = document.querySelector("#content");
  body.innerHTML = "";
  const cont = document.createElement("div");
  const name = document.createElement("h1");
  name.textContent = arr[0];
  const temperature = document.createElement("h2");
  temperature.textContent = "Currently " + Math.round(arr[1].temp - 273, 2) + "\u00B0 C";
  const feels_like = document.createElement("span");
  feels_like.textContent = `Feels like ${Math.round(
    arr[1].feels_like - 273,
    2
  )}\u00B0 C`;
  const description = document.createElement("h2");
  description.textContent = arr[2][0].main;
  cont.append(name, description, temperature, feels_like);
  body.append(cont);
};

export { DOM };
