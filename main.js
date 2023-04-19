const closedCookie = document.querySelector("#closedCookie")
const buttonReset = document.querySelector("button")
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")

const phrases = [
    "Há certo gosto em pensar sozinho. É ato individual, como nascer e morrer.",
    "Quando eu pensar que aprendi a viver, terei aprendido a morrer.",
    "Não espere por uma crise para descobrir o que é importante em sua vida.",
    "No fundo de um buraco ou de um poço, acontece descobrir-se as estrelas."
]

closedCookie.addEventListener("click", openTheCookie)
buttonReset.addEventListener("click", resetCookie)

function openTheCookie() {
    toggleScreen()
    chooseRandomPhrase()
}

function resetCookie() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function chooseRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * phrases.length)
    document.querySelector("#screen2 p").textContent = phrases[randomNumber]
}