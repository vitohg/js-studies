const dataNascimeto = new Date("2006-04-22")
const dataAtual = new Date()

let diferenca = dataAtual.getTime() - dataNascimeto.getTime()

let diferencaemdias = diferenca /(1000 * 60 * 60 * 24)

let diferencaemanos = diferencaemdias / 365

document.write("diferença em anos: " + diferencaemanos.toFixed() + "<br>" + "<br>")
document.write("diferença em dias: " + diferencaemdias.toFixed())


