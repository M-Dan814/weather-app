const color = (arr) => {
  const body = document.body;
  switch (arr[2][0].main.toLowerCase()) {
    case "cloudy":
      body.classList.add("blue");
      break;
    case "mist":
      body.classList.add("gray");
      break;
    case "snow":
      body.classList.add("gray-2");
      break;
    case "clear":
      body.classList.add("yellow");
      break;
    case "rain":
      body.classList.add("rain");
      break;
    default:
      break;
  }
};

export { color };
