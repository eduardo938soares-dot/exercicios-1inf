
const cliente= "Renata Dias"
const produto= "Garrafão de Água mineral 20L"
const preco= 4
const quantidade= 45
const desconto= 15
const capacidadeCaminhão= 40
const valorPago= 200
const subtotal= preco*quantidade 
const valorFinal= subtotal-desconto
const troco= valorPago-valorFinal

//---verificar a capacidade do caminhão de entrega---
  
  if(quantidade > capacidadeCaminhão) {
    console.log("Excede a capacidade do caminhão")
  } else {
    console.log("Capacidade adequada para a entrega")
  }
//---Desconto para pedido grande---
  if(Subtotal >= valorMinimoParadesconto) {
    console.log("desconto aplicado")
  } else {
    console.log("Sem desconto aplicado")
//---verficação de pagamento---
  if(valorPago >= valorFinal) {
    console.log("Pagamento aprovado")
  } else { 
    console.log("Pagamento não aprovado")
  }
  //---situação do pedido---
    const capacidadeAdequada = quantidade <= capacidadeCaminhao
    const pagamentoAprovado = valorPago >= valorFinal
    if (capacidadeAdequada && pagamentoAprovado) {
      console.log("situação: Pedido confirmado e pronto para envio.")
    } else (pagamentoAorovado) {
      console.log("Situação: Pedido pendente (Aguardando pagamento")
    } else (capacidadeAdequada) {
      console.log("Situação: Retido (Logistica bloqueada por excesso de carga")
    }

    const resumo =`
    cliente: ${cliente}
    produto: ${produto}
    preco: R${preco}
    quantidade: ${quantidade}
    capacidadeCaminhao: ${capacidadeCaminhao}
    valorPago: R${valorPago}
    subtotal: R${subtotal}
    capacidadeStatus: ${capacidadeStatus}
    descontoStatus: ${descontoStatus}
    valorDesconto: R${valorDesconto}
    valorFinal: R${valorFinal}
    pagamentoStatus: ${pagamentoStatus}
    troco: R${troco}
    statusPedido: ${statusPedido}
    resumo: ${resumo}
    final do resumo
    `
console.log (resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    capacidadeCaminhao,
    valorPago,
    subtotal,
    capacidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo,
  }
