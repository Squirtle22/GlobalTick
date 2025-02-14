function updateTime() {
    let londonElement = document.querySelector("#london")
    if (londonElement) {
        let londonDateElement = londonElement.querySelector(".date")
        let londonTimeElement = londonElement.querySelector(".time")
        let londonTime = moment().tz("Europe/London")
    
        londonDateElement.innerHTML = moment().format("MMMM Do YYYY")
        londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss  [<small>]A[</small>]")}` 
    }

    let HonoluluElement = document.querySelector("#Honolulu")
    if (HonoluluElement) {
        let HonoluluDateElement = HonoluluElement.querySelector(".date")
        let HonoluluTimeElement = HonoluluElement.querySelector(".time")
        let HonoluluTime = moment().tz("Pacific/Honolulu")
    
        HonoluluDateElement.innerHTML = moment().format("MMMM Do YYYY")
        HonoluluTimeElement.innerHTML = `${HonoluluTime.format("h:mm:ss  [<small>]A[</small>]")}`
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
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
