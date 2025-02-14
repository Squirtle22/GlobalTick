function updateTime() {
    let londonElement = document.querySelector("#london")
    let londonDateElement = londonElement.querySelector(".date")
    let londonTimeElement = londonElement.querySelector(".time")
    let londonTime = moment()

    londonDateElement.innerHTML = moment().format("MMMM Do YYYY")
    londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss  [<small>]A[</small>]")}`



    let HonoluluElement = document.querySelector("#Honolulu")
    let HonoluluDateElement = HonoluluElement.querySelector(".date")
    let HonoluluTimeElement = HonoluluElement.querySelector(".time")
    let HonoluluTime = moment().tz("Pacific/Honolulu")

    HonoluluDateElement.innerHTML = moment().format("MMMM Do YYYY")
    HonoluluTimeElement.innerHTML = `${HonoluluTime.format("h:mm:ss  [<small>]A[</small>]")}`
}

updateTime();
setInterval(updateTime, 1000)