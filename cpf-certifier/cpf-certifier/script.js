const form = document.getElementById("form");
const cpf = document.getElementById("cpf");
const input = document.querySelector("input")

input.addEventListener("keypress", () => {
  let inputValue = input.value.length

  if (inputValue === 3 || inputValue === 7) {
    input.value += "."
  }else if (inputValue === 11) {
    input.value += "-"
  }
    
});

function cpfValid(cpf = 0) {
    cpf = cpf.value;
    
    let soma = 0;

    soma += cpf[0] * 10;
    soma += cpf[1] * 9;
    soma += cpf[2] * 8;
    soma += cpf[4] * 7;
    soma += cpf[5] * 6;
    soma += cpf[6] * 5;
    soma += cpf[8] * 4;
    soma += cpf[9] * 3;
    soma += cpf[10] * 2;
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    if (soma != cpf[9]){

    }

    soma = 0;

    soma += cpf[0] * 11;
    soma += cpf[1] * 10;
    soma += cpf[2] * 9;

    soma += cpf[4] * 8;
    soma += cpf[5] * 7;
    soma += cpf[6] * 6;

    soma += cpf[8] * 5;
    soma += cpf[9] * 4;
    soma += cpf[10] * 3;

    soma += cpf[12] * 2;
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    if (soma != cpf[12]){

    }
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const cpfValue = cpf.value;
    let ncaracteries = input.value.length

    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório.");

    }else if (ncaracteries < 14){
        setErrorFor(cpf, "O CPF está incompleto");

    }else {
        setSuccessFor(cpf, "O CPF é valido.");

    }
}

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