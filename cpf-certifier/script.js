const form = document.getElementById("form");
const cpf = document.getElementById("cpf");
const input = document.querySelector("input")

input.addEventListener("keypress", () => {
    let inputValue = input.value.length

    if (inputValue === 3 || inputValue === 7) {
        input.value += "."
    } else if (inputValue === 11) {
        input.value += "-"
    }

});

//function cpfValid(cpf = 0) {  
//}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const cpfValue = cpf.value;
    let ncaracteries = input.value.length
    let soma = 0;




    if (cpfValue === "") {
        setErrorFor(cpfValue, "O CPF é obrigatório.");

    } else if (ncaracteries < 14) {
        setErrorFor(cpfValue, "O CPF está incompleto");

    }

    // Calculo do cpf

    else if (ncaracteries == 14) {
        let resultado = []
        

        for (let i = 0; i < cpfValue.length; i++) {
            if (isNaN(cpfValue[i])) {

            } else {
                resultado.push(Number(cpfValue[i]))
            }

        }



        let ok = 0
        let teste_matriz = []

        for (let i = 0; i < 10; i++) {
            teste_matriz.push([i, i, i, i, i, i, i, i, i, i, i])
        }

        for (let i = 0; i < teste_matriz.length; i++) {
            if (arraysEqual(teste_matriz[i], resultado)) {
                ok = 1
                break;
            }            
        }
        if (ok === 0) {

            for (let i = 0; i < (resultado.length - 2); i++) {
                soma += resultado[i] * (10 - i)            
            }
    
            resultSoma1 = soma % 11;
    
    
            if (resultSoma1 < 2) {
                resultSoma1 = 0
            } else {
                resultSoma1 = 11 - resultSoma1
            }
    
            // [1, 1, 1, 4, 4, 4, 7, 7, 7, 3, 5]
    
            soma = 0;
            for (let i = 0; i < (resultado.length - 2); i++) {
                soma += resultado[i] * (11 - i)   
            }
    
            soma += resultSoma1 * 2;
            resultSoma2 = soma % 11;
    
            if (resultSoma2 < 2) {
                resultSoma2 = 0
            } else {
                resultSoma2 = 11 - resultSoma2
            }
    
            console.log("Digito 1:"+resultSoma1)
            console.log("Digito 2:"+resultSoma2)
    
            if(resultado[9] != resultSoma1) {
                console.log("CPF inválido")
            } else {
                if(resultado[10] != resultSoma2) {
                    console.log("CPF inválido")
                } else {
                    console.log("CPF válido")
                }
            }
        } else {
            console.log("CPF inválido")
        }

    }

    // Fim do calculo do cpf

}
//else if(cpfValid){
//    setSuccessFor(cpf, "O CPF é valido.");

//}else{
//   setErrorFor(cpf, "O CPF é invalido")
//}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control success";
}
