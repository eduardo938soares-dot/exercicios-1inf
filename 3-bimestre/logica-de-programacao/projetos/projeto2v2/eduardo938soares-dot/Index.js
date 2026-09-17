console.log
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
    } else if (!pagamentoAorovado) {
      console.log("Situação: Pedido pendente (Aguardando pagamento")
    } else if (!capacidadeAdequada) {
      console.log("Situação: Retido (Logistica bloqueada por excesso de carga")
    }

    const resumo =`
    cliente: ${cliente}
    produto: ${produto}
    preco: ${preco}
    quantidade: ${quantidade}
    capacidadeCaminhao: ${capacidadeCaminhao}
    valorPago: ${valorPago}
    subtotal: ${subtotal}
    capacidadeStatus: ${capacidadeStatus}
    descontoStatus: ${descontoStatus}
    valorDesconto: ${valorDesconto}
    valorFinal: `

    $fbmam
    pagamentoStatus,
    troco,
    statusPedido,
    
    
    
    
    
    
    
    
    
    
    `

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
