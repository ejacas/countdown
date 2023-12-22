const daysElement = document.querySelector(".days .number")
const hoursElement = document.querySelector(".hours .number")
const minutesElement = document.querySelector(".minutes .number")
const secondsElement = document.querySelector(".seconds .number")

const newYears = "1 Jan 2024"

const countdown = () => {
    const newYearsDate = new Date(newYears)
    const currentData = new Date()
    const totatSecondsLeft = (newYearsDate - currentData) / 1000

    const days = Math.floor(totatSecondsLeft / 3600 / 24)
    const hours = Math.floor(totatSecondsLeft / 3600) % 24
    const minutes = Math.floor(totatSecondsLeft / 60) % 60
    const seconds = Math.floor(totatSecondsLeft) % 60

    daysElement.innerText = formatTime(days)
    hoursElement.innerText = formatTime(hours)
    minutesElement.innerText = formatTime(minutes)
    secondsElement.innerText = formatTime(seconds)

    
}

const formatTime = (time) => {
    return time < 10 ? `0${time}`: time
}

setInterval(countdown, 1000)

// Initial call
countdown()

// initial animation
const website = document.querySelector(".website")
const countdownContainer = document.querySelector(".countdown-container")

setTimeout(() => {
    website.classList.add("show")
}, 500)

setTimeout(() => {
    countdownContainer.style.opacity = 1
}, 1000)


