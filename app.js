"use strect";
const api = {
  key: "249fa98490934471aa301441230704",
  url: "http://api.weatherapi.com/v1/",
};
const searchBox = document.querySelector("#sear");

searchBox.addEventListener("keypress", setQuery);
function setQuery(e) {
  if (e.keyCode == 13) {
    Query(searchBox.value);
  }
}

function Query(query) {
  fetch(`${api.url}current.json?key=${api.key}&q=${query}`)
    .then(weather => {
      return weather.json();
    })

    .then(displayResult);
}
function displayResult(weather) {
  console.log(weather);
  const region = document.querySelector(".region");
  region.innerHTML = `${weather.location.country}, ${weather.location.name} `;

  const temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.current.temp_c)}°<span>C</span><img class="cloud" src="${weather.current.condition.icon}">`;
  const weth=document.querySelector(".weth");
  weth.innerHTML=`${weather.current.condition.text}`;

  const wethType=document.querySelector(".weth-type");
  wethType.innerHTML=`${Math.round(weather.current.feelslike_c)}<span>°C /</span> ${Math.round(weather.current.temp_c)}<span></span>°C `
  const d = new Date();
  const weekday = new Array(7);
  weekday[0] = "sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let day = weekday[d.getDay()];
  console.log(day);

  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  const dn = new Date();
  let name = month[dn.getMonth()];
  console.log(name);

  const date =document.querySelector(".date");
  date.innerHTML=`${weather.current.last_updated} ${day} `
}
