
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1(lat, long, timeStr) {



  const tempr = await fetch(APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`)
    .then(data => data.json())
    .then(data => data.hourly.temperature_2m)



  let sum = 0;
  tempr.forEach( (value) => {
    sum += value;
  });


  return (
    Math.floor(sum / tempr.length)
  )
}


module.exports = f1;

