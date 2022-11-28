async function getData() {
  try{
  const location = document.querySelector("#city").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2f4907111f7679621a12fd4616f08931`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  }
  catch (err){
    console.log(err)
  }
}

export { getData };
