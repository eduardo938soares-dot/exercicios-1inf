 const prompt = require("prompt-sync")()

let dias = Number(prompt("Quantos dias? "))

let totalProduzido = 0

for (let dia = 1; dia <= dias; dia++) {
  const producao = Number(prompt(`Produção do dia ${dia}: `))
  totalProduzido = totalProduzido + producao
}

console.log(totalProduzido)

module.exports = totalProduzido