function updateTime() {
    let HawaiiElement = document.querySelector("#Hawaii")
    if (HawaiiElement) {
        let HawaiiDateElement = HawaiiElement.querySelector(".date")
        let HawaiiTimeElement = HawaiiElement.querySelector(".time")
        let HawaiiTime = moment().tz("US/Hawaii")
    
        HawaiiDateElement.innerHTML = moment().format("MMMM Do YYYY")
        HawaiiTimeElement.innerHTML = `${HawaiiTime.format("h:mm:ss  [<small>]A[</small>]")}` 
    }

    let HonoluluElement = document.querySelector("#Honolulu")
    if (HonoluluElement) {
        let HonoluluDateElement = HonoluluElement.querySelector(".date")
        let HonoluluTimeElement = HonoluluElement.querySelector(".time")
        let HonoluluTime = moment().tz("Pacific/Honolulu")
    
        HonoluluDateElement.innerHTML = moment().format("MMMM Do YYYY")
        HonoluluTimeElement.innerHTML = `${HonoluluTime.format("h:mm:ss  [<small>]A[</small>]")}`
    }

    let MaldivesElement = document.querySelector("#Maldives")
    if (MaldivesElement) {
        let MaldivesDateElement = MaldivesElement.querySelector(".date")
        let MaldivesTimeElement = MaldivesElement.querySelector(".time")
        let MaldivesTime = moment().tz("Indian/Maldives")
    
        MaldivesDateElement.innerHTML = moment().format("MMMM Do YYYY")
        MaldivesTimeElement.innerHTML = `${MaldivesTime.format("h:mm:ss  [<small>]A[</small>]")}`
    }

    
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess() }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone)
    
    let citiesElement = document.querySelector("#cities")
    
    // Empty the current city list and add the selected city
    citiesElement.innerHTML = `
    <div class="city" id="${cityTimeZone}">
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>
    `
}

updateTime();
setInterval(updateTime, 1000)

let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity)
