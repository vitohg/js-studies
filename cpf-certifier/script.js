const form = document.getElementById('form')
const cpf = document.getElementById("cpf");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const cpfValue = cpf.value;

    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório.");
    }
    else{
        setSuccessFor(cpf);
    }
}

function setErrorFor(input, mensage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.inerText = mensage;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.class = "form-control success";
}

