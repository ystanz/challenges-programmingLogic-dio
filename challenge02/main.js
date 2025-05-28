// Instruções para entrega
//  # Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)


// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let username = document.getElementById("username")
let winsCount = document.getElementById("wins-count")
let losesCount = document.getElementById("loses-count")
let rankedClass = document.getElementById("result")
let confirmButton = document.getElementById("confirm-btn")

confirmButton.addEventListener("click", rankedBalance)

function rankedBalance(e) {
    const userRanked = winsCount.value - losesCount.value
    e.preventDefault()

    if (userRanked > 1 && userRanked <= 10) {
        userRankedElo = "Ferro"
    } else if (userRanked >= 11 && userRanked <= 20) {
        userRankedElo = "Bronze"
    } else if (userRanked >= 21 && userRanked <= 50) {
        userRankedElo = "Prata"
    } else if (userRanked >= 51 && userRanked <= 80) {
        userRankedElo = "Ouro"
    } else if (userRanked >= 81 && userRanked <= 90) {
        userRankedElo = "Diamente"
    } else if (userRanked >= 91 && userRanked <= 100) {
        userRankedElo = "Lendário"
    } else if (userRanked >= 101) {
        userRankedElo = "Imortal"
    } else {
        rankedClass.innerHTML = '<p class="alert alert-danger">Preencha os campos em brancos para descobrir sua classificação</p>'
    }
    rankedClass.innerHTML = `<p>O Herói tem de saldo de <b>${userRanked}</b> vitórias e está no nível <b>${userRankedElo}</b></p>`
}