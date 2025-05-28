let heroName = document.getElementById("hero-name")
let heroXP = document.getElementById("hero-xp")
let resultField = document.getElementById("result")
document.getElementById("confirm-btn").addEventListener("click", heroRanking)

function heroRanking(e) {
    if(heroXP.value > 1 && heroXP.value < 1000) {
        heroLevel = "Ferro"
    } else if(heroXP.value > 1001 && heroXP.value < 2000) {
        heroLevel = "Bronze"
    } else if(heroXP.value > 2001 && heroXP.value < 5000) {
        heroLevel = "Prata"
    } else if(heroXP.value > 5001 && heroXP.value < 7000) {
        heroLevel = "Ouro"
    } else if(heroXP.value > 7001 && heroXP.value < 8000) {
        heroLevel = "Platina"
    } else if(heroXP.value > 8001 && heroXP.value < 9000) {
        heroLevel = "Ascendente"
    } else if(heroXP.value > 9001 && heroXP.value < 10000) {
        heroLevel = "Imortal"
    } else if(heroXP.value >= 10001) {
        heroLevel = "Radiante"
    } else {
        resultField.innerHTML = '<p class="alert alert-danger">Preencha os campos em branco!</p>'
    }
    e.preventDefault()
    resultField.innerHTML = `<p>O Herói de nome <b>${heroName.value}</b> está no nível <b>${heroLevel}</b></p>`
}
