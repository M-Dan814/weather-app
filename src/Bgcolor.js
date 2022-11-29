const color = (arr) => {
  const body = document.body;
  switch (arr[2][0].main.toLowerCase()) {
    case "clouds":
      body.className = "";
      body.classList.add("cloud");
      break;
    case "mist":
      body.className = "";
      body.classList.add("mist");
      break;
    case "fog":
      body.className = "";
      body.classList.add("mist");
      break;
    case "haze":
      body.className = "";
      body.classList.add("mist");
      break;
    case "dust":
      body.className = "";
      body.classList.add("mist");
      break;
    case "smoke":
      body.className = "";
      body.classList.add("mist");
      break;
    case "snow":
      body.className = "";
      body.classList.add("snow");
      break;
    case "clear":
      body.className = "";
      body.classList.add("sunny");
      break;
    case "rain":
      body.className = "";
      body.classList.add("rain");
      break;
    case "thunderstorm":
      body.className = "";
      body.classList.add("rain");
      break;
    case "drizzle":
      body.className = "";
      body.classList.add("rain");
      break;
    case "tornado":
      body.className = "";
      body.classList.add("tornado");
      break;
    case "squall":
      body.className = "";
      body.classList.add("squall");
      break;
    default:
      break;
  }
};

export { color };
