function imc() {

    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    
    //let IMC = peso / (altura*altura)
    let IMC = (peso / Math.pow(altura, 2)).toFixed(1)

    if (IMC < 18,5) {

        document.getElementById('resultado').innerHTML = `Seu IMC é ${IMC} e você está Abaixo do Peso `
        
    }

    else if (IMC >= 18,5 && IMC <= 24,9) {

        document.getElementById('resultado').innerHTML = `Seu IMC é ${IMC} e você está num Peso Normal `
        
    } 

    else if (IMC >= 25 && IMC <= 29,9) {

        document.getElementById('resultado').innerHTML = `Seu IMC é ${IMC} e você está com Sobrepeso `

    }

    else if (IMC >= 30 && IMC <= 34,9) {

        document.getElementById('resultado').innerHTML = `Seu IMC é ${IMC} e você está com Obesidade Grau I `

    }

    else if (IMC >= 35 && IMC <= 39,9) {
        
        document.getElementById('resultado').innerHTML = `Seu IMC é ${IMC} e você está com Obesidade Grau II `

    }

    else if (IMC >= 40) {
        
        document.getElementById('resultado').innerHTML = `Seu IMC é ${IMC} e você está com Obesidade Grau III ou Morbida `

    }



    //document.write(`Seu IMC é: ${IMC} `)
    //document.getElementById('resultado').innerHTML = `Seu IMC é: ${IMC}`

}