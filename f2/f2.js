




const locations = require('../locations.json');
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';

async function f2(lat, long, timeStr, hour) {

  const tempr = await fetch(APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`)
    .then(data => data.json())
    .then(data => data.hourly.temperature_2m)

  return(tempr[hour])
}

module.exports = f2;