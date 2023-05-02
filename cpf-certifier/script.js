const form = document.getElementById("form");
const cpf = document.getElementById("cpf");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const cpfValue = cpf.value;

    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório.");

    }else{
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

function checkcpf(cpf) {
    // inserir com o return a Mascara do cpf
    

}