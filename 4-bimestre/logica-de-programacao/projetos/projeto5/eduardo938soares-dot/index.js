const prompt = require("prompt-sync")()

let nomeTurno = prompt("Turno: ")
let meta = Number(prompt("Meta: "))
let producaoInicial = Number(prompt("Produção inicial: "))
let pecasPorCaixa = Number(prompt("Itens por caixa: "))

let producaoFinal = producaoInicial
while (producaoFinal < meta) {
  producaoFinal++
}

let caixasNecessarias = (producaoFinal / pecasPorCaixa)

const situacaoMeta = producaoFinal >= meta
  ? "Meta atingida"
  : "Meta não atingida"


const resumo = `
nomeTurno ${nomeTurno}
meta ${meta}
producaoInicial ${producaoInicial}
pecasPorCaixa ${pecasPorCaixa}
producaoFinal ${producaoFinal}
situacaoMeta ${situacaoMeta}
`
console.log(resumo)

module.exports = {
  nomeTurno,
  meta,
  producaoInicial,
  pecasPorCaixa,
  producaoFinal,
  caixasNecessarias,
  situacaoMeta,
  resumo
}
