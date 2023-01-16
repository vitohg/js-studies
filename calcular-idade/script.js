function calcularIdade() {

let dia1 = document.getElementById('dia1').value
let mes1 = document.getElementById('mes1').value
let ano1 = document.getElementById('ano1').value

let data = new Date()

let dia2 = data.getDate()
let mes2 = data.getMonth()
let ano2 = data.getFullYear()

let ultimoDiadeCadaMes = [31, 28, 31, 30, 31, 30 ,31, 31, 30, 31, 30, 31]

if (dia2 > dia1) {

    dia2 = dia2 + ultimoDiadeCadaMes [mes2 - 1]
    mes2 = mes2 + 1
    
}

if (mes1 > mes2) {
    
    mes2 = mes2 + 12
    ano2 = ano2 - 1

}

let dia = dia2 - dia1
let mes = mes2 - mes2
let ano = ano2 - ano1

document.getElementById("idade").innerHTML = "você tem ${ano} anos, ${mes} meses e ${dia} dias."

    
}