// CRIE SUA SOLUÇÃO ABAIXO ================

const cliente="Mariana Silva"
const cidade="Fortaleza "
const produto="Notebook pro"
const categoria="Notebook"
const preco="3500"
const quantidade="2"
const descontoPercentual="10"
const valorPago="7000"
const subtotal=preco*quantidade
const valorDesconto=subtotal * descontoPercentual/100
const valorFinal=subtotal-valorDesconto
const troco=valorPago-valorFinal
const resumo=` 
=========================================
 TECHSTORE SISTEMAS
 RESUMO DO PEDIDO
=========================================

cliente: R$ ${cliente}
cidade: R$ ${cidade}
produto: R$ ${produto}
categoria: R$ ${categoria}
preco: R$ ${preco}
quantidade: R$ ${quantidade}
descontPercentual:R$ ${descontoPercentual}
valorPago: R$ ${valorPago}
subtotal: R$ ${subtotal}
valorDeconsto: R$ ${valorDesconto}
valorFinal: R$ ${valorFinal}
troco: R$ ${troco}
=========================================
=========================================
`

console.log(resumo)


// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}