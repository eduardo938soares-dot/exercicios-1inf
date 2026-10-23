const prompt = require("prompt-sync")()

const turnos = Number(prompt("Quantos turnos? "))

let turnosAcimaDaMeta = 0

for (let turno = 1; turno <= turnos; turno++) {
  const pecas = Number(prompt(`Peças do turno ${turno}: `))

  if (pecas > 15) {
    turnosAcimaDaMeta++
  }
}

console.log(turnosAcimaDaMeta)

module.exports = turnosAcimaDaMeta