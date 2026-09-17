console.log
const nome="Eduardo Soares"
const idade=14
const categoria="comum"
const possuiCarteirinha="true"
const inadimplente="false"
const valorMensalidade=90
const valorPago=90
//---verificação da idade minima---
let idadeStatus = "idade permitida"
if (idade>=18) {
console.log("acesso permitido")
} else {
  console.log("acesso negado")
}
  
//---verificação de nivel de acesso---
let nivelAcesso = "acesso administrativo liberado"
if (cliente.tipoUsuario === "comum") {
  nivelAcesso = "acesso comum"
}
//---verificação de liberação de acesso---
let acessoStatus = "Acesso à piscina liberado"
//se não tiver carteirinha, estiver inadimplente ou for menor de idade, nega o acesso
if (!possuiCarteirinha || inadimplente|| idadeStatus === "idade não permitida") {
  acessoStatus = "Acesso à piscina negado"
  //---identificar corretamente a situação do pagamento---
let pagamentoStatus = "Pagamento pendente"
  if (valorPago >= valorMensalidade) {
    pagamentoStatus = "Pagamento aprovado"
  }
//---calcular o valor do troco corretamente---
  let troco = 0
  if (valorPago > valorMensalidade) {
    troco = valorPago - valorMensalidade
  }
  let statusAcesso = "Entrada no clube não confirmada"
  //---se acaso à piscina for negado ou pagamento não aprovado, barra na entrada 
if (acessoStatus === "Acesso à piscina negado" || pagamentoStatus === "pagamento aprovado") {
  statusAcesso = "Entrada no clube não confirmada"
}
  
module.exports = {
    nome,
    idade,
    categoria,
    possuiCarteirinha,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAcesso,
    resumo,
}
