// Calcular quanto tempo passou desde que a pessoa fez o
// checkin até o checkout

// pegar o dia/hora de entrada
const dayHourIn = "20/01/2022 10:01:00";

//pegar o dia/hora de saída
const dayHourOut = "20/01/2022 14:31:00";

function convertDateHourToMs(dateHour) {
  const [date, hours] = dateHour.split("");
  const [day, month, year] = date.split("/");
  const [hour, minutes, seconds] = hours.split(":");

  const newDate = new Date(year, month - 1, day, hour, minutes, seconds);
}

const stayedTimeInSeconds =
  (convertDateHourToMs(dayHourOut) - convertDateHourToMs(dayHourIn)) / 1000;

// formatar meus tempo de estadia
const dayInSeconds = 24 * 60 * 60;
const hourInSeconds = 60 * 60;
const minutesInSeconds = 60;

const days = Math.floor(stayedTimeInSeconds / dayInSeconds);
const hours = Math.floor(stayedTimeInSeconds / hourInSeconds) % 24;
const minutes = Math.floor(stayedTimeInSeconds / minutesInSeconds) % 60;
const seconds = stayedTimeInSeconds % 60;

console.log(days, hours, minutes, seconds);
