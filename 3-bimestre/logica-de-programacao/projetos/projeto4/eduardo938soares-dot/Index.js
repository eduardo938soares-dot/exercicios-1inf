const cliente = 'Larissa Duarte'
const opcaoMenu = 4
const quantidade = 2
const formaPagamento = 'cartao'
const statusPedido = 'pendente'

let prato = "guaraná"
let precoUnitario = 0
let freteStatus = "frete pago"
let frete = 8
let pagamentoMensagem = ''
let descontoPercentual = 5
let statusMensagem = "aguardando pagamento"

switch (opcaoMenu) {
  case 4:
    prato = 'Guaraná'
    precoUnitario = 8
    break
  default:
    prato = 'Item não identificado'
    precoUnitario = 0
}

if (statusPedido === 'pendente') {
  freteStatus = 'Frete pago'
  frete = 8
} else if (statusPedido === 'entregue') {
  freteStatus = 'Frete grátis'
  frete = 0
} else {
  freteStatus = 'A calcular'
  frete = 0
}


if (formaPagamento === 'dinheiro') {
  pagamentoMensagem = 'Pagamento via dinheiro'
  descontoPercentual = 10
} else if (formaPagamento === 'cartao') {
  pagamentoMensagem = 'Pagamento via cartão'
  descontoPercentual = 5
} else {
  pagamentoMensagem = 'Outra forma de pagamento'
  descontoPercentual = 0
}

switch (statusPedido) {
  case 'pendente':
    statusMensagem = 'Aguardando pagamento'
    break
  case 'pago':
    statusMensagem = 'Preparando pedido'
    break
  default:
    statusMensagem = 'Status desconhecido'
}


const subtotal = quantidade * precoUnitario
const desconto = (subtotal * descontoPercentual) / 100
const total = subtotal + frete - desconto

const resumo = `
  Cliente: ${cliente}
  Prato: ${prato}
  Quantidade: ${quantidade}
  Subtotal: ${subtotal}
  Frete: ${freteStatus}
  Pagamento: ${pagamentoMensagem}
  Desconto: ${desconto}
  Total: ${total}
  Status: ${statusMensagem}
`

module.exports = {
  cliente,
  opcaoMenu,
  quantidade,
  formaPagamento,
  statusPedido,
  prato,
  precoUnitario,
  subtotal,
  freteStatus,
  frete,
  pagamentoMensagem,
  descontoPercentual,
  desconto,
  total,
  statusMensagem,
  resumo
}

  
