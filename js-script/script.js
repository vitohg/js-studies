//Calculo da media

/*var n1 = Number(prompt('Digite a primeira nota'))
var n2 = Number(prompt('Digite a segunda nota'))
var n3 = Number(prompt('Digite a terceira nota'))

function calcularmedia(n1, n2, n3) {

    let media = (n1 + n2 + n3)/3
    return media

}

document.write('Digite seu nome' + nome + '<br>')
document.write('Sua media é: ' + calcularmedia(n1, n2, n3).toFixed(1))
console.log('Sua media é: ' + calcularmedia(n1, n2, n3).toFixed(1))*/

//Calculo do IMC

var peso = Number(prompt("Digite o seu peso em kg: "))

var altura = Number(prompt("Digite a sua altura em : "))

function IMC(peso, altura) {
    
    var mediaIMC = peso / (altura * altura) 
    return mediaIMC.toFixed(1)

}

if (IMC(peso, altura) < 18.5) {
    
document.write("Seu peso está abaixo da media: " + IMC(peso, altura))

}

if (IMC(peso, altura) >= 18.5 && IMC(peso, altura) <= 24.9) {
    
 document.write("Seu peso está na media: " + IMC(peso, altura))

}

if (IMC(peso, altura) >= 25.0 && IMC(peso, altura) <= 29.9) {

    document.write("Você está com excesso de peso: " + IMC(peso, altura))
    
}

if (IMC(peso, altura) >= 30.0 && IMC(peso, altura) <= 34.9) {

    document.write("Você está com obesidade classe I : " + IMC(peso, altura))
    
}

if (IMC(peso, altura) >= 35.0 && IMC(peso, altura) <= 39.9) {

    document.write("Você está com obesidade classe II : " + IMC(peso, altura))
    
}

if (IMC(peso, altura) >= 40.0){

    document.write("Você está com obesidade classe III : " + IMC(peso, altura))

}



